module.exports = (app) => {
  const express = require("express");
  // 解决跨域
  app.use(require("cors")());

  app.use(express.json());
};
