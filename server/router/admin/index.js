module.exports = (app) => {
  const express = require("express");
  const router = express.Router();
  const Category = require("../../models/Category");
  // router.post(`categories`);
  app.use(`/admin/api/categroies/add`, async (req, res) => {
    const model = await Category.create(req.body);
    console.log(model);
    res.send(model);
  });
};
