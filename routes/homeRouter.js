const express = require("express");
const router = express.Router();

const Productos = require("../models/productos");

router.get("/", function (req, res) {
  const Especialidades =await Productos.GetEspecialidades();
  console.log(Especialidades);
  res.render("home", {
    Especialidades: Especialidades,
  });
});

module.exports = router;
