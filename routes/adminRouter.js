const express = require("express");
const router = express.Router();
const Productos = require("../models/productos");
router.get("/", (req, res) => {
  res.render("homeAdmin", { layout: "mainAdmin.handlebars" });
});

router.get("/productos", async (req, res) => {
  res.render("productosAdmin", {
    layout: "mainAdmin.handlebars",
    Productos: await Productos.GetProductoslist(),
  });
});

module.exports = router;
