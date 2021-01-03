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
    Categorias: await Categorias.GetCategoriaslist(),
    Productos: await Productos.GetProductoslist(),
  });
});

router.get("/productos/delete/:idproducto", function (req, res) {
  const { idproducto } = req.params;
  const rest = ServicioProducto.deleteProducto(idproducto);
  res.redirect("/admin/productos");
});

router.post("/productos/update/:idproducto", function (req, res) {
  const idproducto = req.params;
  const body = req.body;
  console.log(req.body);
  const rest = ServicioProducto.updateProducto(idproducto, body);
  res.redirect("/admin/productos");
});

module.exports = router;
