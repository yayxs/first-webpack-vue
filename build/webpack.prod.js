const {merge} = require('webpack-merge')
const baseConfig = require('./index')

const prodConfig = {
  // 模式
  mode: 'production'
}

module.exports = merge(baseConfig, prodConfig)