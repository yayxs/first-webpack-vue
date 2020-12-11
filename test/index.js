console.log(`is es6`)

const path = require('path')



const pathResolve = (target)=>path.resolve(__dirname,target)

// 'd:\\github-code\\first-webpack-vue\\test\\dist'
const res =  pathResolve('./dist')

console.log('res')