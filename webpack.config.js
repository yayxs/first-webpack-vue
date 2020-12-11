
const path = require('path')



const pathResolve =
     (str) => path.resolve(__dirname, str)



module.exports ={
    mode:'development', // 打包模式
    entry:'./src/main.js',
    output:{
        filename:'chunk.js',
        path:pathResolve('./dist')
    }
}