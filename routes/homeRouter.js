const express = require("express");
const router = express.Router();

const Productos = require("../models/productos");

router.get("/", function (req, res) {
  res.render("home", {
    Especialidades: Productos.GetEspecialidades(),
  });
});

module.exports = router;
