const express = require("express");
const router = express.Router();
const Usuarios = require("../models/usuarios");

router.get("/profile", function (req, res) {
  let Usuario = Usuarios.find(
    (Usuario) => Usuario.id_usuario == req.session.userId
  );
  if (Usuario) {
    res.render("usuarios", {
      bAgregaNavbar: true,
      bUsuario: true,
      bAdmin: Usuario.sn_admin == 1 ? true : false,
      Usuario: Usuario,
    });
  } else {
    res.redirect("/login");
  }
});

module.exports = router;
