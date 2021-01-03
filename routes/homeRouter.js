const express = require("express");
const router = express.Router();

const Productos = require("../models/productos");

router.get("/", async function (req, res) {
  res.render("home", {
    Especialidades: await Productos.GetEspecialidades(),
  });
});

module.exports = router;
