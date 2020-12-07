const express = require("express");
const router = express.Router();

//HOME
router.use("/", require("./homeRouter"));
//Login
router.use("/", require("./loginRouter"));
//Usuarios
router.use("/usuarios", require("./usuariosRouter"));
//ADMIN PRODUCTOS
router.use("/admin", require("./adminRouter"));

module.exports = router;
