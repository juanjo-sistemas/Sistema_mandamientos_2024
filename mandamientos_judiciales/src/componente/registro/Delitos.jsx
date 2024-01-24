import Menu from "../menu/MenuLateral";
import Titulo from "../menu/Titulo";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../../src/index.css";
const Delitos = () => {
  const navigate = useNavigate();



     const [delitos, setDelitos] = useState({
     ID_DELITO:"",
     ID_MODALIDAD:"",
     });





  const handleChange = (e) => {
    //formatoDia()
    const { name, value } = e.target;
    setDelitos((prev) => ({ ...prev, [name]: value.trim() }));
  };

  const handleClick = (e) => {
    e.preventDefault();
    try {
      axios.post("http://localhost:8081/delitos", delitos);
      alert("El nuevo registro ha sido guardado correctamente ");
      navigate("/Inicio");
    } catch (err) {
      console.error("Error al registrar:", err);
    }
  };

  return (
    /*          
    delitos  datos necesarios para este componente

    ID_ALTERNA           CREADA AL INICIO
    ID_ESTADO_EMISOR     INFORMACION DADA AL INICIO
    ID_EMISOR            INFORMACION DADA AL INICIO 
    ID_DELITO_EXT        ** PARESE SER UNA LLAVE
    ID_DELITO            TABLA DELITOS 
    ID_MODALIDAD         TABLA MODALIDAD

     sistema de esmirnna solo ahy 2 botones

     delito -- catalogo
     modalidad -- catalogo

     boton para agregar un nuevo delito...........
    
    
    */

    <>
      <Titulo></Titulo>
      <Menu></Menu>

      <Titulo></Titulo>
      <Menu></Menu>

      <div className="contenedor">
        <div className="contenedor_principal">
          <div className="row">
            <div className="mb-12 row">
              <form onSubmit={handleClick}>
                <h3>Formulario principal de los Delitos</h3>

                <div className="mb-3 row">
                  <div className="col-sm-6">
                    <label className="form-label">DELITO</label>
                    <input
                      type="text"
                      className="form-control"
                      name="ID_DELITO" 
                      id="ID_DELITO"
                      placeholder=""
                      onChange={handleChange}
                    ></input>
                  </div>

                  <div className="col-sm-6">
                    <label className="form-label">MODALIDAD</label>
                    <input
                      type="text"
                      className="form-control"
                      name="ID_MODALIDAD"
                      id="ID_MODALIDAD"
                      placeholder=""
                      onChange={handleChange}
                    ></input>
                  </div>
                </div>                  


                <div className="col-sm-6">
                  <div className="mb-3 row">
                    <div className="col-sm-6">
                      <button type="submit" className="btn btn-primary">
                        Registrar
                      </button>
                    </div>
                    <div className="col-sm-6">
                      <Link to="/Inicio" className="btn btn-info">
                        Siguiente
                      </Link>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Delitos;
