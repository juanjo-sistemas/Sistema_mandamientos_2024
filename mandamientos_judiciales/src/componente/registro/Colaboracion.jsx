import Menu from "../menu/MenuLateral"
import Titulo from "../menu/Titulo"
import "../../../src/index.css"
const Colaboracion = () => {
  return (
    <>
    
    <Titulo></Titulo>
    <Menu></Menu>
    
    <div className="contenedor">
       <div className="contenedor_principal">

                <div className="mb-12 row"> 
              <h3>Colaboracion</h3>
              

            <div className="col-sm-6">
            <label  className="form-label">Numero colaboracion    </label>
            <input type="text" className="form-control" id="nombre" name="NUMERO_COLABORACION" placeholder=""></input>
           </div>
        
           <div className="col-sm-6">
            <label  className="form-label">N° de oficio</label>
            <input type="text" className="form-control" id="nombre" name="NO_OFICIO" placeholder=""></input>
           </div>

           
               
         </div>


         <div className="mb-3 row">   

         <div className="col-sm-3">
            <label  className="form-label">Fecha oficio</label>
            <input type="text" className="form-control" id="nombre" name="FECHA_OFICIO" placeholder=""></input>
           </div>
             
           <div className="col-sm-3">
            <label  className="form-label">Fecha inicio</label>
            <input type="text" className="form-control" name="FECHA_INICIO" id="nombre" placeholder=""></input>
           </div>

            <div className="col-sm-3">
            <label  className="form-label">Fecha termino</label>
            <input type="text" className="form-control" name="FECHA_TERMINO" id="nombre" placeholder=""></input>
           </div>
        
           <div className="col-sm-3">
            <label  className="form-label">Estado con el que colabora</label>
            <input type="text" className="form-control" name="ID_ESTADO_COLABORA" id="nombre" placeholder=""></input>
           </div>
               
         </div>
     
         <div className="mb-3 row">   

            <div className="col-sm-3">
            <label  className="form-label">Emisor con el que colabora</label>
            <input type="text" className="form-control" id="nombre" name="ID_EMISOR_COLABORA" placeholder=""></input>
            </div>

            <div className="col-sm-3">
            <label  className="form-label">Acuerdo convenio</label>
            <input type="text" className="form-control" name="ACUERDO_CONVENIO" id="nombre" placeholder=""></input>
            </div>

            <div className="col-sm-3">
            <label  className="form-label">Razon de colaboracion</label>
            <input type="text" className="form-control" name="RAZON_COLABORACION" id="nombre" placeholder=""></input>
            </div>

            <div className="col-sm-3">
            <label  className="form-label">Gravedad o peligrosidad</label>
            <input type="text" className="form-control" name="GRAVEDAD_CASO" id="nombre" placeholder=""></input>
            </div>
                
            </div>



        </div>         
    </div>
    
    
    
    </>
  )
}

export default Colaboracion