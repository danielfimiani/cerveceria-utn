const express = require("express");
const router = express.Router();
const Usuarios = require("../models/usuarios");
//Login
router.get("/login", function (req, res) {
  res.render("login", { bAgregaNavbar: false });
});

//Login
router.post("/login", function (req, res) {
  const { email, password } = req.body;
  if (email && password) {
    const user = Usuarios.find(
      (user) => user.txt_email === email && user.txt_password === password
    );
    if (user) {
      req.session.userId = user.id_usuario;
      return res.redirect("/");
    }
  }

  res.redirect("/login");
});

//LogOut
router.post("/logout", function (req, res) {
  req.session.destroy((err) => {
    if (err) {
      return res.redirect("/");
    }
    res.clearCookie("sid");
    res.redirect("/");
  });
});

//Registro
router.get("/registro", function (req, res) {
  res.render("registro", { bAgregaNavbar: false });
});

module.exports = router;
