const express = require("express");
const router = express.Router();
const Productos = require("../models/productos");
const Categorias = require("../models/categorias");
const ServicioProducto = require("../services/productos");
const multer = require("multer"); // npm i multer
const config = { dest: `./public/tmp` };
const upload = multer(config);
 


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

router.post("/productos/update/:idproducto", upload.single("image") , function (req, res) {  
  const idproducto = req.params;
  const body = req.body;
  const file = req.file; 
  const rest = ServicioProducto.updateProducto(idproducto, body, file);
  res.redirect("/admin/productos");
});
upload.single("imagen")
module.exports = router;
