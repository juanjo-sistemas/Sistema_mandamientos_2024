import Menu from "../menu/MenuLateral"
import Titulo from "../menu/Titulo"
import "../../../src/index.css"

const Amparos = () => {
  return (
    <>
    <Titulo></Titulo>
    <Menu></Menu>
    
    <div className="contenedor">
       <div className="contenedor_principal">


         <div className="mb-3 row">
         <h3>Amparos</h3>
         <div className="col-sm-6">
            <label  className="form-label">N° Amparo     </label>
            <input type="text" className="form-control" id="nombre" name="NO_AMPARO" placeholder=""></input>
           </div>

            <div className="col-sm-6">
            <label  className="form-label">Fecha Amparo    </label>
            <input type="text" className="form-control" name="FECHA_AMPARO" id="nombre" placeholder=""></input>
           </div>
        
           <div className="col-sm-3">
            <label  className="form-label">Estado juzgado</label>
            <input type="text" className="form-control" name="ID_ESTADO_JUZ" id="nombre" placeholder=""></input>
           </div>
               
         </div>
     
         <div className="mb-3 row">
         <div className="col-sm-6">
            <label  className="form-label">Juzgado     </label>
            <input type="text" className="form-control" id="nombre" name="ID_JUZGADO" placeholder=""></input>
           </div>

            <div className="col-sm-6">
            <label  className="form-label"> Resolucion</label>
            <input type="text" className="form-control" name="ID_RESOLUCION" id="nombre" placeholder=""></input>
           </div>
        
                         
         </div>

         <div className="mb-12 row"> 
           
            
        
           <div className="col-sm-6">
            <label  className="form-label">Tipo de amparo</label>
            <input type="text" className="form-control" id="nombre" name="ID_TIPO_AMPARO" placeholder=""></input>
           </div>          
               

           <div className="col-sm-6">
            <label  className="form-label">Observaciones del amparo</label>
            <input type="text" className="form-control" id="nombre" name="ID_AMPARO_EXT " placeholder=""></input>
           </div>



           </div>
        


        </div>         
    </div>
    
    
    
    </>
  )
}

export default Amparos