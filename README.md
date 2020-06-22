# VUE-TEMPLATE

基于vue-cli3的项目模板，特集成性：

- stylelint
- commitlint 规范化commit
- standard-version 自动生成changlog
- 链式路由中间件

其他相关插件可通过`vue add`命令添加

## 目录结构

```
vue-template
├── public (静态文件)
├── setting (编辑器相关设置)
├── src
|   ├── api (请求接口目录)
│   ├── assets (资源文件目录)
│   ├── components
│   ├── middleware (路由中间件)
│   ├── plugin (第三方插件)
│   ├── router
│   ├── store
│   ├── style (样式文件)
│   ├── ui (第三方ui库，如element)
│   ├── util (工具)
│   └── views
└── test
```

## Project setup

```
yarn install
```

### Compiles and hot-reloads for development

```
yarn serve
```

### Compiles and minifies for production

```
yarn build
```

### Lints and fixes files

```
yarn lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
