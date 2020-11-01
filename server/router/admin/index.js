module.exports = (app) => {
  const express = require("express");
  const router = express.Router();
  const Category = require("../../models/Category");
  const {
    FETCH_CATE,
    SAVA_CATE,
    FIND_UPDATE_CATE,
  } = require("../../api/admin");
  router.post(SAVA_CATE, async (req, res) => {
    const model = await Category.create(req.body);
    res.send(model);
  });
  router.get(FETCH_CATE, async (req, res) => {
    const lists = await Category.find().limit(10);
    res.send(lists);
  });

  router.get(FIND_UPDATE_CATE, async (req, res) => {
    const { id } = req.params;
    const item = await Category.findById(id);
    res.send(item);
  });
  router.put(FIND_UPDATE_CATE, async (req, res) => {
    const { id } = req.params;
    const { body } = req;
    const model = await Category.findByIdAndUpdate(id, body);
    res.send(model);
  });

  router.delete(FIND_UPDATE_CATE, async (req, res) => {
    const { id } = req.params;
    const { body } = req;
    console.log(id);
    console.log(body);

    await Category.findByIdAndRemove(id, body);
    res.send({
      success: true,
    });
  });

  app.use("/admin/api", router);
};
