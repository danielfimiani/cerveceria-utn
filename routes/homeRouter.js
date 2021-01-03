const express = require("express");
const router = express.Router();

const Productos = require("../models/productos")

router.get("/", async function (req, res) {
  res.render("home", {
    Especialidades: await Productos.GetProductoHome(1),
  });
});

router.get("/", async function (req, res) {
  res.render("home", {
    menu: await Productos.GetProductoHome(0),
  });
});


module.exports = router;

 