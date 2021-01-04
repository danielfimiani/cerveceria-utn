const express = require("express");
const router = express.Router();
const Productos = require("../models/productos");
const Categorias = require("../models/categorias");
const ServicioProducto = require("../services/productos");
const multer = require("multer"); // npm i multer
const config = { dest: `./public/tmp` };
const upload = multer(config);

//HOME
router.get("/", async (req, res) => {
  res.render("productosAdmin", {
    layout: "mainAdmin.handlebars",
    Categorias: await Categorias.GetCategoriasProd(),
    Productos: await Productos.GetProductoslist(),
  });
});

//ALTA
router.post("/create", upload.single("image"), function (req, res) {
  const objProducto = req.body;
  objProducto.sn_habilitado = parseInt(objProducto.sn_habilitado);
  objProducto.sn_especial = parseInt(objProducto.sn_especial);
  const file = req.file;
  const id = ServicioProducto.createProducto(objProducto, file);
  res.redirect("/admin/productos");
});

//BAJA
router.get("/delete/:idproducto", function (req, res) {
  const { idproducto } = req.params;
  const rest = ServicioProducto.deleteProducto(idproducto);
  res.redirect("/admin/productos");
});

//MODIFICACION
router.post("/update/:idproducto", upload.single("image"), function (req, res) {
  const { idproducto } = req.params;
  const objProducto = req.body;
  objProducto.sn_habilitado = parseInt(objProducto.sn_habilitado);
  objProducto.sn_especial = parseInt(objProducto.sn_especial);
  const file = req.file;
  const rest = ServicioProducto.updateProducto(idproducto, objProducto, file);
  res.redirect("/admin/productos");
});

module.exports = router;
