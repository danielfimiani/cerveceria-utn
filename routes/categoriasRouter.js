const express = require("express");
const router = express.Router();
const Categorias = require("../models/categorias");

router.get("/categorias", async (req, res) => {
  res.render("categoriasAdmin", {
    layout: "mainAdmin.handlebars",
    Categorias: await Categorias.GetCategoriaslist(),
  });
});

module.exports = router;
