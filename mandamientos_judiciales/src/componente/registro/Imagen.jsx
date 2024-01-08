import Menu from "../menu/MenuLateral"
import Titulo from "../menu/Titulo"
import "../../../src/index.css"

const Imagen = () => {
  return (
    <>
    
    <Titulo></Titulo>
    <Menu></Menu>
    
    <div className="contenedor">
       <div className="contenedor_principal">

            <div className="mb-12 row"> 
            <h3>Imagen</h3>
              

            <div className="col-sm-6">
            <label  className="form-label">Descripcion de la imagen</label>
            <input type="text" className="form-control" id="nombre" name="DESCRIP_IMAGEN" placeholder=""></input>
           </div>
        
           <div className="col-sm-6">
            <label  className="form-label">tipo imagen</label>
            <input type="text" className="form-control" id="nombre" name="TIPO_IMAGEN" placeholder=""></input>
           </div>

           
               
         </div>


         <div className="mb-3 row">   

         <div className="col-sm-6">
            <label  className="form-label">Grupo</label>
            <input type="text" className="form-control" id="nombre" name="GRUPO" placeholder=""></input>
           </div>

            <div className="col-sm-6">
            <label  className="form-label">Imagen</label>
            <input type="text" className="form-control" name="IMAGEN" id="nombre" placeholder=""></input>
           </div>
        
           <div className="col-sm-3">
            <label  className="form-label">imagen extra</label>
            <input type="text" className="form-control" name="ID_IMAGEN_EXT" id="nombre" placeholder=""></input>
           </div>
               
         </div>
     
        </div>         
    </div>
    

    </>
  )
}

export default Imagen