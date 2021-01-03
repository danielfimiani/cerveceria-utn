const pool = require("./../utils/bd");
const T_CATEGORIA = "categorias";

const GetCategoriaslist = () =>
  pool
    .query("select id_categoria , txt_categoria from ?? where sn_habilitado = 1", [T_CATEGORIA])
    .then((result) => result)
    .catch((e) => e);

module.exports = { GetCategoriaslist };
