const pool = require("./../utils/bd");
const T_CATEGORIA = "categorias";

const GetCategoriaslist = () =>
  pool
    .query(
      `
            select 
              id_categoria , 
              txt_categoria,
              CASE WHEN sn_habilitado = 1 THEN 1 ELSE 0 END as sn_habilitado
            from ?? 
          `,
      [T_CATEGORIA]
    )
    .then((result) => result)
    .catch((e) => e);

module.exports = { GetCategoriaslist };
