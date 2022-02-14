const express = require("express");
const { findByIdAndRemove, findByIdAndUpdate } = require("../models/Product");
const ProductModel = require("../models/Product");

const router = express.Router();

router.get("/list", async (req, res) => {
  try {
    const products = await ProductModel.find({});
    return res.send(products);
  } catch (error) {
    return console.error(error);
  }
});

router.post("/create", async (req, res) => {
  try {
    const { name, price, quantity } = req.body;
    const findProduct = await ProductModel.findOne({ name });

    if (findProduct && findProduct.name === name) {
      return res.status(400).send({ message: "product already exists" });
    }

    await ProductModel.create({ name, price, quantity });
    return res.status(201).send({ message: "Product created!" });
  } catch (error) {
    return console.error(error);
  }
});

router.put("/update/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const updateProduct = await ProductModel.findByIdAndUpdate(
      { _id: id },
      { ...req.body },
      { new: true }
    );
    await updateProduct.save();
    return res.send({ updateProduct });
  } catch (error) {
    return console.error(error);
  }
});

router.delete("/delete/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await ProductModel.findByIdAndDelete({ _id: id });
    return res.status(200).send({ message: "Product deleted!" });
  } catch (error) {
    return console.error(error);
  }
});

module.exports = (app) => app.use("/product", router);
