const express = require("express");
const router = express.Router();

const Productos = require("../models/productos")

router.get("/", function (req, res) {
  res.render("home", {
    Especialidades: Productos.GetProducto(1),
  });
});


router.get("/", function (req, res) {
  res.render("home", {
    menu: Productos.GetProducto(0),
  });
});

module.exports = router;
