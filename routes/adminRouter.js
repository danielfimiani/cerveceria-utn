const express = require("express");
const router = express.Router();
const Productos = require("../models/productos");
const Categorias = require("../models/categorias");
const ServicioProducto = require("../services/productos");

router.get("/", (req, res) => {
  res.render("homeAdmin", { layout: "mainAdmin.handlebars" });
});

router.get("/productos", async (req, res) => {
  res.render("productosAdmin", {
    layout: "mainAdmin.handlebars",
    Productos: await Productos.GetProductoslist(),
    Categorias: await Categorias.GetCategoriaslist(),
  });
});

router.get("/productos/delete/:idproducto", function (req, res) {
  const { idproducto } = req.params;
  const rest = ServicioProducto.deleteProducto(idproducto);
  res.redirect("/admin/productos");
});

module.exports = router;
