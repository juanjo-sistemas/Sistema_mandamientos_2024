import Menu from "../menu/MenuLateral"
import Titulo from "../menu/Titulo"
import "../../../src/index.css"

const Proceso = () => {
  return (
    <>
    <Titulo></Titulo>
    <Menu></Menu>
    
    <div className="contenedor">
       <div className="contenedor_principal">

       

         <div className="mb-12 row"> 
              <h3>Proceso. . .</h3>
                                
           <div className="col-sm-6">
            <label  className="form-label">fecha libramiento</label>
            <input type="text" className="form-control" id="nombre" name="FECHA_LIBRAMIENTO" placeholder=""></input>
           </div>

           
               
         </div>


         <div className="mb-3 row">   

           <div className="col-sm-6">
            <label  className="form-label">fuero</label>
            <input type="text" className="form-control" id="nombre" name="ID_FUERO_PROCESO"  placeholder=""></input>
           </div>

            <div className="col-sm-6">
            <label  className="form-label">tipo mandato</label>
            <input type="text" className="form-control" name="ID_TIPO_MANDATO" id="nombre" placeholder=""></input>
           </div>
        
           
               
         </div>
   
         <div className="mb-3 row"> 
            
            <div className="col-sm-3">
            <label  className="form-label">numero de proceso</label>
            <input type="text" className="form-control" name="NO_PROCESO" id="nombre" placeholder=""></input>
           </div>
        
           <div className="col-sm-3">
            <label  className="form-label">numero de averiguacion</label>
            <input type="text" className="form-control" name="NO_AVERIGUACION" id="nombre" placeholder=""></input>
           </div>

           <div className="col-sm-3">
            <label  className="form-label">fecha de captura</label>
            <input type="text" className="form-control" name="FECHA_CAPTURA" id="nombre" placeholder=""></input>
           </div>
               
           <div className="col-sm-3">
            <label  className="form-label">fecha de recepcion</label>
            <input type="text" className="form-control" name="FECHA_PREINSCRIPCION" id="nombre" placeholder=""></input>
           </div>
         </div>

         

         <div className="mb-3 row">        
           <div className="col-sm-3">
            <label  className="form-label">fecha de pre inscripcion</label>
            <input type="text" className="form-control" name="FECHA_PRESCRIPCION" id="nombre" placeholder=""></input>
           </div>

           <div className="col-sm-3">
            <label  className="form-label">fecha de cumplimiento</label>
            <input type="text" className="form-control" name="FECHA_CUMPLIMIENTO" id="nombre" placeholder=""></input>
           </div>
               
           <div className="col-sm-3">
            <label  className="form-label">oficio de cumplimiento</label>
            <input type="text" className="form-control" name="OFICIO_CUMPLE" id="nombre" placeholder=""></input>
           </div>
        
           <div className="col-sm-3">
            <label  className="form-label">fecha de cancelacion</label>
            <input type="text" className="form-control" name="FECHA_CANCELACION" id="nombre" placeholder=""></input>
           </div>
         </div>

         
           


         <div className="mb-3 row"> 
         
            <div className="col-sm-4">
            <label  className="form-label">motivo de cancelacion</label>
            <input type="text" className="form-control" name="ID_MOTIVO_CANCELACION" id="nombre" placeholder=""></input>
           </div>
        
           <div className="col-sm-4">
            <label  className="form-label">oficio de cancelacion</label>
            <input type="text" className="form-control" name="OFICIO_CANCELACION" id="nombre" placeholder=""></input>
           </div>

           <div className="col-sm-4">
            <label  className="form-label">observaciones</label>
            <input type="text" className="form-control" name="OBSERVACIONES" id="nombre" placeholder=""></input>
           </div>
               
         </div>

           <div className="mb-3 row"> 
            
            <div className="col-sm-4">
            <label  className="form-label">proceso extradicion</label>
            <input type="text" className="form-control" name="ID_PROCESO_EXTRADI" id="nombre" placeholder=""></input>
           </div>
        
           <div className="col-sm-4">
            <label  className="form-label">tipo de proceso</label>
            <input type="text" className="form-control" id="nombre" name="ID_TIPO_PROCESO"  placeholder=""></input>
           </div>

           <div className="col-sm-4">
            <label  className="form-label">carpeta inv</label>
            <input type="text" className="form-control" name="CARPETA_INV" id="nombre" placeholder=""></input>
           </div>
               
         </div>         
        </div>         
    </div>

    
    
    
    </>
  )
}

export default Proceso