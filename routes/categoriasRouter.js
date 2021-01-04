const express = require("express");
const { parse } = require("uuid");
const router = express.Router();
const Categorias = require("../models/categorias");

//Lista
router.get("/", async (req, res) => {
  res.render("categoriasAdmin", {
    layout: "mainAdmin.handlebars",
    Categorias: await Categorias.GetCategoriaslist(),
  });
});

//ALTA
router.post("/create", function (req, res) {
  const objCategoria = req.body;
  const id = Categorias.create(objCategoria);
  res.redirect("/admin/categorias");
});

//BAJA
router.get("/delete/:idcategoria", function (req, res) {
  const { idcategoria } = req.params;
  const rest = Categorias.delete(idcategoria);
  res.redirect("/admin/categorias");
});

//Modificacion
router.post("/update/:idcategoria", function (req, res) {
  const { idcategoria } = req.params;
  const Categoria = req.body;
  Categoria.sn_habilitado = parseInt(Categoria.sn_habilitado);
  const rest = Categorias.update(idcategoria, Categoria);
  res.redirect("/admin/categorias");
});

module.exports = router;
