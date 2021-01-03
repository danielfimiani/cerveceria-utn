const express = require("express");
const router = express.Router();
const Productos = require("../models/productos");
const Categorias = require("../models/categorias");
const ServicioProducto = require("../services/productos");
const { parse } = require("uuid");

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
  const file = req.file;
  console.log(req.body);
  const rest = ServicioProducto.updateProducto(idproducto, body, file);
  res.redirect("/admin/productos");
});

router.post("/productos/create", function (req, res) {
  const objProducto = req.body;
  objProducto.sn_habilitado = parseInt(objProducto.sn_habilitado);
  objProducto.sn_especial = parseInt(objProducto.sn_especial);
  const objProductoimg = req.file;
  const id = ServicioProducto.createProducto(objProducto, objProductoimg);
  res.redirect("/admin/productos");
});

module.exports = router;
