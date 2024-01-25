import React from 'react'
import { Link } from "react-router-dom"
import "../../../src/index.css"


const MenuLateral = () => {
  return (
    <>
    
    <div className='contenedor-menu'>
    <div className='menu'>
        

          <div className="mb-3 row">              
            <div className="col-sm-2">
            <Link to="/Inicio">Inicio registro</Link>            
            </div>               
          </div>

          <div className="mb-3 row">              
            <div className="col-sm-2">
            <Link to="/">1Registrar</Link>            
            </div>               
          </div>     

          <div className="mb-3 row">              
            <div className="col-sm-2">
            <Link to="/Proceso">2Proceso_reg</Link>
            
            </div>               
         </div> 

         <div className="mb-3 row">              
            <div className="col-sm-2">
            <Link to="/Delitos">3Delitos_reg</Link>
            
            </div>               
         </div>         

         <div className="mb-3 row">              
            <div className="col-sm-2">
            <Link to="/Domicilio">4Domicilio_reg</Link>
            
            </div>               
         </div> 
         <div className="mb-3 row">              
            <div className="col-sm-2">
            <Link to="/o_nombre">5O_nombres_reg</Link>
            
            </div>               
         </div> 
         <div className="mb-3 row">              
            <div className="col-sm-2">
            <Link to="/amparos">6Amparos_reg</Link>
            
            </div>               
         </div> 
         <div className="mb-3 row">              
            <div className="col-sm-2">
            <Link to="/ministerial">7ministerial_reg</Link>
            
            </div>               
         </div> 

         <div className="mb-3 row">              
            <div className="col-sm-2">
            <Link to="/colaboracion">8Colaboracion_reg</Link>
            
            </div>               
         </div> 

         <div className="mb-3 row">              
            <div className="col-sm-2">
            <Link to="/imagen">9Imagen_reg</Link>
            
            </div>               
         </div> 

         <div className="mb-3 row">              
            <div className="col-sm-2">
            <Link to="/Ver">Ver Registros</Link>
            </div>               
         </div>

         <div className="mb-3 row">              
            <div className="col-sm-2">
            <Link to="/Editar">Modiificar</Link>
            </div>               
         </div>

         <div className="mb-3 row">              
            <div className="col-sm-2">
            <a className="nav-item" >Baja</a>
            </div>               
         </div>
   
         <div className="mb-3 row">              
            <div className="col-sm-2">
            <a className="nav-item" >Verificacion</a>
            </div>               
         </div>
         <div className="mb-3 row">              
            <div className="col-sm-2">
            <a className="nav-item" >estatus</a>
            </div>               
         </div>

    </div>    
    </div>
    
    
    
    
    
    </>
  )
}

export default MenuLateral