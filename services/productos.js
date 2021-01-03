// insertar en la tabla docentes
// subir imagen del docente
// insertar en la tabla docentes_imagenes
const productoMet = require("./../models/productos");
 
const { imgFile } = require("./../utils/fileHandler");

const createProducto = async (body,file) => {

  try {
    console.log(body);
    // const { insertId } = await  productoMet.create(body ); // retorna el insertId
    console.log(file);
    // const uid = imgFile(file); // retorna el name de la imagen
    // const obj = { id_producto, uid };
    // const { insertId: idFile } = await createImages(obj);    
    return insertId;
  } catch (e) {
    console.error(e);
  }
};

const deleteProducto = async (id) => {

    try {   
    
     const repuesta = await  productoMet.Delete(id);
     console.log(repuesta);
     return repuesta; // retorna el delete      
    } catch (e) {
      console.error(e);
    }
  };

  const updateProducto = async (id, body) => {

    try {   
    // const {idproducto} = id;     
    // const {id_categoria,txt_nombre,txt_desc,imp_precio,sn_especial,image,sn_habilitado} = body;     
     const { insertId } = await  productoMet.update(id,body);
     console.log(insertId);
     return insertId; // retorna el delete      
    } catch (e) {
      console.error(e);
    }
  };
  const GetEspecialidades = async () => {

    try {   
   
     const repuesta = await  productoMet.GetEspecialidad();
     return repuesta; // retorna el delete      
    } catch (e) {
      console.error(e);
    }
  };


module.exports = { createProducto, deleteProducto, updateProducto,GetEspecialidades };
