module.exports = (app) => {
  const express = require("express");
  const router = express.Router();
  // const Category = require("../../models/Category");
  // const { FETCH_CREATE, FIND_UPDATE } = require("../../api/admin");
  router.post(`/`, async ({ Model, body }, res) => {
    const model = await Model.create(body);
    res.send(model);
  });
  router.get(`/`, async (req, res) => {
    const { Model } = req;
    const queryOptions = {};

    Model.modelName === "Category" && (queryOptions.populate = "parent");

    const lists = await Model.find().setOptions(queryOptions).limit(10);
    res.send(lists);
  });

  router.get(`/:id`, async (req, res) => {
    const {
      params: { id },
      Model,
    } = req;
    const item = await Model.findById(id);
    res.send(item);
  });
  router.put(`/:id`, async (req, res) => {
    const { id } = req.params;
    const { body, Model } = req;
    const model = await Model.findByIdAndUpdate(id, body);
    res.send(model);
  });

  router.delete(`/:id`, async (req, res) => {
    const { id } = req.params;
    const { body, Model } = req;

    await Model.findByIdAndRemove(id, body);
    res.send({
      success: true,
    });
  });

  app.use(
    "/admin/api/rest/:resources",
    (req, res, next) => {
      const modelName = require("inflection").classify(req.params.resources);
      req.Model = require(`../../models/${modelName}`);
      next();
    },
    router
  );
};
