import React from 'react'
import "../../../src/index.css"


const E_media_filiacion = () => {
  return (
    <>
    
    
           <div className="contenedor">
             <div className="contenedor_principal">

              <div className="mb-12 row"> 
              <h3>Edicion Media filiacion</h3>
              

            <div className="col-sm-6">
            <label  className="form-label">Media filacion</label>
            <input type="text" className="form-control" id="nombre" name="ID_MEDIA_EXT " placeholder=""></input>
           </div>
        
           <div className="col-sm-6">
            <label  className="form-label">Filacion    </label>
            <input type="text" className="form-control" id="nombre" name="ID_FILACION" placeholder=""></input>
           </div>

           
               
         </div>


         <div className="mb-3 row">   

         <div className="col-sm-6">
            <label  className="form-label">Valor filacion</label>
            <input type="text" className="form-control" id="nombre" name="ID_VALOR_FILIACION" placeholder=""></input>
           </div>

            <div className="col-sm-6">
            <label  className="form-label">N° consecutivo    </label>
            <input type="text" className="form-control" name="NO_CONSECUTIVO" id="nombre" placeholder=""></input>
           </div>
        
           
               
         </div>
     
        </div>         
    </div>
    
    
    </>
  )
}

export default E_media_filiacion