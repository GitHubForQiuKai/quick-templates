const loaderUtils = require('loader-utils')

module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://47.100.233.255:8080',
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/api': '/'
        }
      }
    }
  },

  configureWebpack: config => {
    const StyleLintPlugin = require('stylelint-webpack-plugin')
    config.plugins.push(
      new StyleLintPlugin({
        files: ['src/**/*.{vue,html,css,scss,sass,less}'],
        failOnError: false,
        cache: true,
        fix: true
      })
    )
  },

  css: {
    requireModuleExtension: true,
    loaderOptions: {
      // 给 sass-loader 传递选项
      sass: {
        // @/ 是 src/ 的别名
        // 所以这里假设你有 `src/variables.sass` 这个文件
        // 注意：在 sass-loader v7 中，这个选项名是 "data"
        prependData: '@import "~@/style/variables.scss"; @import "~@/style/common.scss";'
      },
      css: {
        modules: {
          // 修复多module时类名相同问题
          getLocalIdent (context, localIdentName, localName) {
            const { resourceQuery, resourcePath } = context
            const { index, module } = loaderUtils.parseQuery(resourceQuery)

            const selector = loaderUtils
              .interpolateName(context, localIdentName, {
                context: context.rootContext,
                content: resourcePath + resourceQuery + localName
              })
              .replace(/\[local\]/gi, localName)
              .replace(
                /\[module\]/gi,
                typeof module === 'boolean' ? '' : module
              )
              .replace(/\[index\]/gi, index)
              .replace(new RegExp('[^a-zA-Z0-9\\-_\u00A0-\uFFFF]', 'g'), '-')
              .replace(/^((-?[0-9])|--)/, '_$1')

            return selector
          }
        }
      },
      // 移动端px2viewport插件
      postcss: {
        plugins: [
          require('postcss-px-to-viewport')({
            unitToConvert: 'px',
            viewportWidth: 750,
            unitPrecision: 3,
            propList: [
              '*'
            ],
            viewportUnit: 'vw',
            fontViewportUnit: 'vw',
            selectorBlackList: [],
            minPixelValue: 1,
            mediaQuery: false,
            replace: true,
            exclude: /(\/|\\)(node_modules)(\/|\\)/
          })
        ]
      }
    }
  }
}
