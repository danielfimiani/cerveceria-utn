const pool = require("./../utils/bd");
const T_CATEGORIA = "categorias";

const GetCategoriaslist = () =>
  pool
    .query("select txt_categoria, sn_habilitado from ?? ", [T_CATEGORIA])
    .then((result) => result)
    .catch((e) => e);

module.exports = { GetCategoriaslist };
