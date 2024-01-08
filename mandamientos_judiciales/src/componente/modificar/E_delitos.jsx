import React from 'react'
import "../../../src/index.css"


const E_delitos = () => {
  return (
    <>
    <div className="contenedor">
       <div className="contenedor_principal">

                <div className="mb-12 row"> 
              <h3>Edicion Delitos</h3>
              

            <div className="col-sm-6">
            <label  className="form-label">Estado emisor</label>
            <input type="text" className="form-control" id="nombre" name="ID_ESTADO_EMISOR" placeholder=""></input>
           </div>
        
           <div className="col-sm-6">
            <label  className="form-label">Emisor</label>
            <input type="text" className="form-control" id="nombre" name="ID_EMISOR" placeholder=""></input>
           </div>

           
               
         </div>


         <div className="mb-3 row">   

         <div className="col-sm-6">
            <label  className="form-label">Delito ext</label>
            <input type="text" className="form-control" id="nombre" name='ID_DELITO_EXT' placeholder=""></input>
           </div>

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

export default E_delitos