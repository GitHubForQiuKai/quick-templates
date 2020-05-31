// https://github.com/stylelint/stylelint
module.exports = {
  // processors: ["stylelint-processor-html"],
  extends: ['stylelint-config-standard'],
  plugins: ['stylelint-order'], // stylelint-order是CSS属性排序插件
  rules: {
    'order/order': [
      'declarations',
      'custom-properties',
      'dollar-variables',
      'rules'
    ],
    // 根据 Andy Ford 的 "Order of the Day: CSS Properties"
    // 并且可以将 CSS 属性进行分组
    'order/properties-order': [
      {
        groundName: 'Display & Flow',
        emptyLineBefore: 'never',
        properties: ['display', 'visibility', 'float', 'clear']
      },
      {
        groundName: 'Positioning',
        emptyLineBefore: 'never',
        properties: [
          'position',
          'top',
          'right',
          'bottom',
          'left',
          'z-index',
          'transform'
        ]
      },
      {
        groupName: 'Flex',
        emptyLineBefore: 'never',
        properties: [
          'flex',
          'flex-direction',
          'flex-grow',
          'flex-shrink',
          'flex-basis',
          'flex-wrap',
          'justify-content',
          'align-items'
        ]
      },
      {
        groupName: 'Dimensions',
        emptyLineBefore: 'never',
        properties: [
          'width',
          'min-width',
          'max-width',
          'height',
          'min-height',
          'max-height',
          'overflow'
        ]
      },
      {
        groupName: 'Margins, Padding, Borders, Outline',
        emptyLineBefore: 'never',
        properties: [
          'margin',
          'margin-top',
          'margin-right',
          'margin-bottom',
          'margin-left',
          'padding',
          'padding-top',
          'padding-right',
          'padding-bottom',
          'padding-left',
          'border-radius',
          'border',
          'border-top',
          'border-right',
          'border-bottom',
          'border-left',
          'border-width',
          'border-top-width',
          'border-right-width',
          'border-bottom-width',
          'border-left-width',
          'border-style',
          'border-top-style',
          'border-right-style',
          'border-bottom-style',
          'border-left-style',
          'border-color',
          'border-top-color',
          'border-right-color',
          'border-bottom-color',
          'border-left-color',
          'outline',
          'list-style',
          'table-layout',
          'border-collapse',
          'border-spacing',
          'empty-cells'
        ]
      },
      {
        groundName: 'Typographic Styles',
        emptyLineBefore: 'never',
        properties: [
          'font',
          'font-family',
          'font-size',
          'line-height',
          'font-weight',
          'text-align',
          'text-indent',
          'text-transform',
          'text-decoration',
          'letter-spacing',
          'word-spacing',
          'white-space',
          'vertical-align',
          'color'
        ]
      },
      {
        groupName: 'Backgrounds',
        emptyLineBefore: 'never',
        properties: [
          'background',
          'background-color',
          'background-image',
          'background-repeat',
          'background-position'
        ]
      },
      {
        groundName: 'Opacity, Cursors, Generated Content, Transition',
        emptyLineBefore: 'never',
        properties: ['opacity', 'cursor', 'content', 'quotes', 'transition']
      }
    ],
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: ['global']
      }
    ],
    'at-rule-no-unknown': null
  }
}
