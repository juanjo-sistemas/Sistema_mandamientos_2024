import Menu from "../menu/MenuLateral"
import Titulo from "../menu/Titulo"
import "../../../src/index.css"

const Delitos = () => {
  return (
    <>
    <Titulo></Titulo>
    <Menu></Menu>
    
    <div className="contenedor">
       <div className="contenedor_principal">

                <div className="mb-12 row"> 
              <h3>Delitos</h3>
                        
         </div>


         <div className="mb-3 row">   

            <div className="col-sm-6">
            <label  className="form-label">Delito</label>
            <input type="text" className="form-control" name="ID_DELITO" id="nombre" placeholder=""></input>
            </div>
        
            <div className="col-sm-3">
            <label  className="form-label">Modalidad</label>
            <input type="text" className="form-control" name="ID_MODLIDAD" id="nombre" placeholder=""></input>
            </div>
               
         </div>     
        </div>         
    </div>




    </>
    
    
    
   
  )
}

export default Delitos