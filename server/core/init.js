/**
 * 入口初始化
 */
const express = require("express");
const app = express();
// 使用中间件
require("../middleware")(app);
// 连接数据库
require("../plugins/db")(app);
// 加载路由 传入 app
require("../router/admin")(app);

// 端口服务监听的端口
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`http://localhost:3000`);
});
