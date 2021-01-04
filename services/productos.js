// insertar en la tabla docentes
// subir imagen del docente
// insertar en la tabla docentes_imagenes
const productoMet = require("./../models/productos");
const path = "public/images/";
var fs = require('fs'); 
 
const { imgFile } = require("./../utils/fileHandler");

const createProducto = async (body,file) => {

  try {
     const {  insertId } = await  productoMet.create(body ); // retorna el insertId
     if (insertId != 0) {    
     const uid = imgFile(file); // retorna el name de la imagen
     const { idFile } = await productoMet.createImages(insertId, uid);    
     }

    return insertId;
  } catch (e) {
    console.error(e);
  }
};

const deleteProducto = async (id) => {
  
    try {     
      
      const rpt  = await  productoMet.Getimagen(id);     
      var imgpath= __dirname.replace("services",path + rpt[0].image) ;
      imgpath= imgpath.replace("/" ,"\\") ;
    
      if (fs.existsSync(imgpath)) {
        fs.unlinkSync(imgpath);
      }
      const repuesta = await  productoMet.Delete(id);  
     return repuesta; // retorna el delete      
    } catch (e) {
      console.error(e);
    }
  };

  const updateProducto = async (id, body,file) => {
 

    if (file){

      const rpt  = await  productoMet.Getimagen(id);     
      var imgpath= __dirname.replace("services",path + rpt[0].image) ;
      imgpath= imgpath.replace("/" ,"\\") ;
 
      if (fs.existsSync(imgpath)) {
        fs.unlinkSync(imgpath);
      }

      const uid = imgFile(file); // retorna el name de la imagen   
      const { idFile } = await productoMet.createImages(id, uid);    
    } 
        
    const { insertId } = await  productoMet.update(id,body);
    try {       
    return insertId; // retorna el delete      
    } catch (e) {
      console.error(e);
    }
  };

 




module.exports = { createProducto, deleteProducto, updateProducto  };
           