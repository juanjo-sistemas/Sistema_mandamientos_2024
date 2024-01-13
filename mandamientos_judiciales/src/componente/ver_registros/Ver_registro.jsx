import React, { useEffect, useState } from 'react'
import Menu from "../menu/MenuLateral"
import Titulo from "../menu/Titulo"
import axios from 'axios'

const Ver_registro = () => {
 
   const [datos, setDatos] = useState ([])
   
   useEffect(()=>{
    axios.get('http://localhost:8081/')
    .then(res  => setDatos(res.data))
    .catch(err => console.log(err));
   },[])
 

 




  return (
    <>
    <Titulo></Titulo>
    <Menu></Menu>
    
    <div className="contenedor">
       <div className="contenedor_principal">
         <div className="mb-12 row"> 
         <h3>Ver registros</h3>
            
           <table className='table'>
           <thead>
              <tr>
                <th>Instituto</th>
                <th>mandato</th>
                <th>estatus</th>
                <th>municipio</th>
                <th>nombre</th>
                <th>apellido paterno</th>
                <th>Accion</th>
                </tr> 
            </thead>

            <tbody>
              {datos.map((info, index)=>{
               return
               <tr key={index}>                  
                  <td>{info.instituto}</td>
                  <td>{info.mandato}</td>
                  <td>{info.estatus}</td>
                  <td>{info.municipio}</td>
                  <td>{info.nombre}</td>
                  <td>{info.apaterno}</td>
                  <td> </td>
               </tr>

              }
              )}
            </tbody>
           </table>
           
               
         </div>  
        </div>         
    </div>




    </>
  )
}

export default Ver_registro