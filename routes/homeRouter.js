const express = require("express");
const router = express.Router();
const Mailer = require("../services/mailer");
const Productos = require("../models/productos");

router.get("/", async function (req, res) {
  res.render("home", {
    Especialidades: await Productos.GetProductoHome(1),
    MenuHome: await Productos.GetProductoHome(0),
  });
});

router.post("/reservas", async function (req, res) {
  const ObjMail = req.body;
  Mailer.EnviarMail(ObjMail);
  res.redirect("/");
});

module.exports = router;
