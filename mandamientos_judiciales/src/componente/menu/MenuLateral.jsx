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
            <Link to="/Inicio">Inicio de registro</Link>            
            </div>               
          </div>

          <div className="mb-3 row">              
            <div className="col-sm-2">
            <Link to="/">Registrar</Link>            
            </div>               
          </div>

         <div className="mb-3 row">              
            <div className="col-sm-2">
            <Link to="/Delitos">Delitos</Link>
            
            </div>               
         </div> 

         <div className="mb-3 row">              
            <div className="col-sm-2">
            <Link to="/Proceso">Proceso</Link>
            
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