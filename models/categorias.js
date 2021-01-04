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

const GetCategoriasProd = () =>
  pool
    .query(
      `
              select 
                id_categoria , 
                txt_categoria
              from ?? 
              Where 
                sn_habilitado = 1
            `,
      [T_CATEGORIA]
    )
    .then((result) => result)
    .catch((e) => e);

const create = (obj) =>
  pool
    .query("INSERT INTO ?? SET ?", [T_CATEGORIA, obj])
    .then((response) => response)
    .catch((e) => e);

const update = (id_categoria, { txt_categoria, sn_habilitado }) =>
  pool
    .query("UPDATE ??  SET txt_categoria= ? , sn_habilitado = ? Where id_categoria = ?", [
      T_CATEGORIA,
      txt_categoria,
      parseInt(sn_habilitado),
      id_categoria,
    ])
    .then((result) => result)
    .catch((e) => e);

const Delete = (id) =>
  pool
    .query("DELETE FROM ??  WHERE id_categoria = ?", [T_CATEGORIA, id])
    .then((result) => result)
    .catch((e) => e);

module.exports = { GetCategoriaslist, GetCategoriasProd, create, update, Delete };
