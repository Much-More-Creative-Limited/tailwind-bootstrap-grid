/* eslint-disable global-require */

module.exports = {
  screens: {
    mobile: '1em',
    desktop: '2em',
  },

  plugins: [
    require('../index')({
      gridColumns: 3,
      rtl: true,
    }),
  ],

  modules: {
    appearance: false,
    backgroundAttachment: false,
    backgroundColors: false,
    backgroundPosition: false,
    backgroundRepeat: false,
    backgroundSize: false,
    borderCollapse: false,
    borderColors: false,
    borderRadius: false,
    borderStyle: false,
    borderWidths: false,
    cursor: false,
    display: false,
    flexbox: false,
    float: false,
    fonts: false,
    fontWeights: false,
    height: false,
    leading: false,
    lists: false,
    margin: false,
    maxHeight: false,
    maxWidth: false,
    minHeight: false,
    minWidth: false,
    negativeMargin: false,
    objectFit: false,
    objectPosition: false,
    opacity: false,
    outline: false,
    overflow: false,
    padding: false,
    pointerEvents: false,
    position: false,
    resize: false,
    shadows: false,
    svgFill: false,
    svgStroke: false,
    tableLayout: false,
    textAlign: false,
    textColors: false,
    textSizes: false,
    textStyle: false,
    tracking: false,
    userSelect: false,
    verticalAlign: false,
    visibility: false,
    whitespace: false,
    width: false,
    zIndex: false,
  },
};
