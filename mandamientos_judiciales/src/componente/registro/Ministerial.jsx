import Menu from "../menu/MenuLateral"
import Titulo from "../menu/Titulo"
import "../../../src/index.css"

const Ministerial = () => {
  return (
    <>
    <Titulo></Titulo>
    <Menu></Menu>
    
    <div className="contenedor">
       <div className="contenedor_principal">

          <div className="mb-12 row"> 
              <h3>Ministerial</h3>
              

            <div className="col-sm-6">
            <label  className="form-label">Orden ministerial</label>
            <input type="text" className="form-control" name="ORDEN_MINISTERIAL" id="nombre"  placeholder=""></input>
            </div>

            <div className="col-sm-6">
            <label  className="form-label">Agencia</label>
            <input type="text" className="form-control" name="AGENCIA" id="nombre" placeholder=""></input>
            </div>
        
            <div className="col-sm-3">
            <label  className="form-label">Turno</label>
            <input type="text" className="form-control" name="TURNO" id="nombre" placeholder=""></input>
            </div>           
               
         </div>
   
         <div className="mb-12 row"> 
            <div className="col-sm-6">
            <label  className="form-label">N° Ministerio Publico</label>
            <input type="text" className="form-control" id="nombre" name="NO_MP" placeholder=""></input>
            </div>

            <div className="col-sm-6">
            <label  className="form-label">Nombre del ministerio publico</label>
            <input type="text" className="form-control" name="NOMBREMP" id="nombre" placeholder=""></input>
            </div>
        
            <div className="col-sm-3">
            <label  className="form-label">paterno </label>
            <input type="text" className="form-control" name="PATERNO_MP" id="nombre" placeholder=""></input>
            </div>
               
         </div>

         <div className="mb-3 row">
            <div className="col-sm-6">
            <label  className="form-label">Materno </label>
            <input type="text" className="form-control" id="nombre" name="MATERNO_MP" placeholder=""></input>
           </div>

            <div className="col-sm-6">
            <label  className="form-label">N° convalidacion de juez</label>
            <input type="text" className="form-control" name="NO_CONVALIDACION_JUEZ" id="nombre" placeholder=""></input>
           </div>
        
           <div className="col-sm-3">
            <label  className="form-label">Fecha inicio</label>
            <input type="text" className="form-control" name="FECHA_INICIO" id="nombre" placeholder=""></input>
           </div>
               
         </div>


         <div className="mb-3 row">   

         <div className="col-sm-6">
          <label  className="form-label">Fecha termino     </label>
          <input type="text" className="form-control" id="nombre" name="FECHA_TERMINO" placeholder=""></input>
        </div>

          <div className="col-sm-6">
           <label  className="form-label">Previa</label>
           <input type="text" className="form-control" name="AV_PREVIA" id="nombre" placeholder=""></input>
          </div>

         <div className="col-sm-3">
          <label  className="form-label">Carpeta de investigacion</label>
          <input type="text" className="form-control" name="CARPETA_INV" id="nombre" placeholder=""></input>
         </div>
      
          </div>

          <div className="mb-3 row">
          <div className="col-sm-6">
           <label  className="form-label">Hora inicio</label>
           <input type="text" className="form-control" id="nombre" name="HORA_INICIO" placeholder=""></input>
         </div>

           <div className="col-sm-6">
             <label  className="form-label">Hora fin</label>
             <input type="text" className="form-control" name="HORA_FIN" id="nombre" placeholder=""></input>
           </div>

           <div className="col-sm-3">
             <label  className="form-label">Fecha convalidacion</label>
             <input type="text" className="form-control" name=" FECHA_CONVALIDACION"  id="nombre" placeholder=""></input>
           </div>

           </div>

            
         <div className="mb-3 row">   

            <div className="col-sm-6">
            <label  className="form-label">Juzgado acreditacion</label>
            <input type="text" className="form-control" id="nombre" name="JUZGADO_ACREDITACION" placeholder=""></input>
            </div>

            <div className="col-sm-6">
            <label  className="form-label">Juez que acreditacion</label>
            <input type="text" className="form-control" name="JUEZ_ACREDITACION" id="nombre" placeholder=""></input>
            </div>

            <div className="col-sm-3">
            <label  className="form-label">Razon emision</label>
            <input type="text" className="form-control" name="RAZON_EMISION" id="nombre" placeholder=""></input>
            </div>

            </div>

            <div className="mb-3 row">
            <div className="col-sm-6">
            <label  className="form-label">Tipo delito </label>
            <input type="text" className="form-control" id="nombre" name="DELITO_TIPO" placeholder=""></input>
            </div>

            <div className="col-sm-6">
                <label  className="form-label">Gravedad</label>
                <input type="text" className="form-control" name="GRAVEDAD" id="nombre" placeholder=""></input>
            </div>

            

            </div>

        </div>         
    </div>
    
    
    
    </>
  )
}

export default Ministerial