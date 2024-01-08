import React from 'react'
import "../../../src/index.css"


const E_domicilio = () => {
  return (
    <>
    
    <div className="contenedor">
       <div className="contenedor_principal">

       

         <div className="mb-12 row"> 
              <h3>Edicion Domicilio</h3>
              

            <div className="col-sm-6">
            <label  className="form-label">Domicilio</label>
            <input type="text" className="form-control" id="nombre"name="ID_DOMICILIO_EXT" placeholder=""></input>
           </div>
        
           <div className="col-sm-6">
            <label  className="form-label">Estado</label>
            <input type="text" className="form-control" id="nombre" name="ID_ESTADO_DOM" placeholder=""></input>
           </div>

           
               
         </div>


         <div className="mb-3 row">   

         <div className="col-sm-6">
            <label  className="form-label">Municipio</label>
            <input type="text" className="form-control" name="ID_MUNICIPIO_DOM" id="nombre"  placeholder=""></input>
           </div>

            <div className="col-sm-6">
            <label  className="form-label">Pais</label>
            <input type="text" className="form-control" name="ID_PAIS_DOM" id="nombre" placeholder=""></input>
           </div>
        
           
               
         </div>
   
         <div className="mb-3 row"> 
            <h4>Datos General</h4>
            <div className="col-sm-3">
            <label  className="form-label">Calle</label>
            <input type="text" className="form-control" name="CALLE" id="nombre" placeholder=""></input>
           </div>
        
           <div className="col-sm-3">
            <label  className="form-label">Colonia</label>
            <input type="text" className="form-control" name="COLONIA" id="nombre" placeholder=""></input>
           </div>

           <div className="col-sm-3">
            <label  className="form-label">Codigo Postal</label>
            <input type="text" className="form-control" name="CP" id="nombre" placeholder=""></input>
           </div>
               
           <div className="col-sm-3">
            <label  className="form-label">Observaciones</label>
            <input type="text" className="form-control" name="OBSERVACIONES" id="nombre" placeholder=""></input>
           </div>
 



         </div>

         <div className="mb-3 row"> 
            
            
        
           <div className="col-sm-3">
            <label  className="form-label">Telefono</label>
            <input type="text" className="form-control" name="TELEFONO" id="nombre" placeholder=""></input>
           </div>

           </div>

                    
            <div className="mb-3 row"> 
            <div className="col-sm-4">
            <label  className="form-label">Boton</label>
            </div>
        
           
               
         </div>  
        </div>         
    </div>
    
    
    </>
  )
}

export default E_domicilio