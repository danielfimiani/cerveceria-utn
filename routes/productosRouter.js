const express = require("express");
const router = express.Router();
const Productos = require("../models/productos");
const Categorias = require("../models/categorias");
const ServicioProducto = require("../services/productos");

router.get("/", async (req, res) => {
  res.render("productosAdmin", {
    layout: "mainAdmin.handlebars",
    Categorias: await Categorias.GetCategoriasProd(),
    Productos: await Productos.GetProductoslist(),
  });
});

router.get("/delete/:idproducto", function (req, res) {
  const { idproducto } = req.params;
  const rest = ServicioProducto.deleteProducto(idproducto);
  res.redirect("/admin/productos");
});

router.post("/update/:idproducto", function (req, res) {
  const { idproducto } = req.params;
  const objProducto = req.body;
  objProducto.sn_habilitado = parseInt(objProducto.sn_habilitado);
  objProducto.sn_especial = parseInt(objProducto.sn_especial);
  const file = req.file;
  console.log(req.body);
  const rest = ServicioProducto.updateProducto(idproducto, objProducto, file);
  res.redirect("/admin/productos");
});

router.post("/create", function (req, res) {
  const objProducto = req.body;
  objProducto.sn_habilitado = parseInt(objProducto.sn_habilitado);
  objProducto.sn_especial = parseInt(objProducto.sn_especial);
  const objProductoimg = req.file;
  const id = ServicioProducto.createProducto(objProducto, objProductoimg);
  res.redirect("/admin/productos");
});

module.exports = router;
