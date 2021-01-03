// insertar en la tabla docentes
// subir imagen del docente
// insertar en la tabla docentes_imagenes
const productoMet = require("./../models/productos");
 
const { imgFile } = require("./../utils/fileHandler");

const createProducto = async (body,file) => {

  try {
    console.log(body);
     const { insertId } = await  productoMet.create(body ); // retorna el insertId
    console.log(file);
     const uid = imgFile(file); // retorna el name de la imagen
     const obj = { id_producto, uid };
     const { insertId: idFile } = await createImages(obj);    
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

  const updateProducto = async (id, body,file) => {

    try {   
      const uid = imgFile(file); // retorna el name de la imagen     
      const { insertId } = await  productoMet.update(id,body,uid);
     console.log(insertId);
     return insertId; // retorna el delete      
    } catch (e) {
      console.error(e);
    }
  };

 




module.exports = { createProducto, deleteProducto, updateProducto  };
           