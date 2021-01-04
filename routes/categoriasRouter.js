const express = require("express");
const { parse } = require("uuid");
const router = express.Router();
const Categorias = require("../models/categorias");

router.get("/", async (req, res) => {
  res.render("categoriasAdmin", {
    layout: "mainAdmin.handlebars",
    Categorias: await Categorias.GetCategoriaslist(),
  });
});

router.post("/update/:idcategoria", function (req, res) {
  const { idcategoria } = req.params;
  const Categoria = req.body;
  Categoria.sn_habilitado = parseInt(Categoria.sn_habilitado);
  const rest = Categorias.update(idcategoria, Categoria);
  res.redirect("/admin/categorias");
});

router.get("/delete/:idcategoria", function (req, res) {
  const { idcategoria } = req.params;
  const rest = Categorias.delete(idcategoria);
  res.redirect("/admin/categorias");
});
module.exports = router;
