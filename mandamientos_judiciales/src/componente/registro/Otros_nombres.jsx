import Menu from "../menu/MenuLateral"
import Titulo from "../menu/Titulo"
import "../../../src/index.css"

const Otros_nombres = () => {
  return (
    <>
    <Titulo></Titulo>
    <Menu></Menu>
    
    <div className="contenedor">
       <div className="contenedor_principal">

                <div className="mb-12 row"> 
              <h3>Otros nombre</h3>
              

           
        
           <div className="col-sm-6">
            <label  className="form-label">Nombre     </label>
            <input type="text" className="form-control" id="nombre" name="O_NOMBRE " placeholder=""></input>
           </div>

           
               
         </div>


         <div className="mb-3 row">   

         <div className="col-sm-6">
            <label  className="form-label">Paterno</label>
            <input type="text" className="form-control" id="nombre" name="O_PATERNO" placeholder=""></input>
           </div>

            <div className="col-sm-6">
            <label  className="form-label"> Materno</label>
            <input type="text" className="form-control" name="O_MATERNO" id="nombre" placeholder=""></input>
           </div>
        
           <div className="col-sm-3">
            <label  className="form-label">Alias</label>
            <input type="text" className="form-control" name="O_ALIAS" id="nombre" placeholder=""></input>
           </div>
               
         </div>
     
        </div>         
    </div>
    
    
    </>
  )
}

export default Otros_nombres