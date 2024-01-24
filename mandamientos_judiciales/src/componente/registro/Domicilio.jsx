import Menu from "../menu/MenuLateral";
import Titulo from "../menu/Titulo";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../../src/index.css";

const Domicilio = () => {
  const navigate = useNavigate();
  const [domicilio, setDomicilio] = useState({
    ID_ESTADO_DOM: "",
    ID_MUNICIPIO_DOM: "",
    ID_PAIS_DOM: "",
    CALLE: "",
    COLONIA: "",
    CP: "",
    OBSERVACIONES: "",
    TELEFONO: "",
  });

  const handleChange = (e) => {
    //formatoDia()
    const { name, value } = e.target;
    setDomicilio((prev) => ({ ...prev, [name]: value.trim() }));
  };

  const handleClick = (e) => {
    e.preventDefault();
    try {
      axios.post("http://localhost:8081/domicilio", domicilio);
      alert("El nuevo registro ha sido guardado correctamente ");
      navigate("/Inicio");
    } catch (err) {
      console.error("Error al registrar:", err);
    }
  };

  /*
   **************************************************
   ESTADO = CATALOGO
   MUNICIPIO = CATOLOGO
   PAIS =  CATALOGO
   CALLE = INGRESADO
   CODIGO POSTAL = INGRESADO
   COLONIA = INGRESADO
   OBSERVACIONES = INGRESADO
   TELEFONO = INGRESADO
   **************************************************
 */

  return (
    <>
      <Titulo></Titulo>
      <Menu></Menu>

      <div className="contenedor">
        <div className="contenedor_principal">
          <div className="mb-12 row">
            <h3>Domicilio</h3>
            <form onSubmit={handleClick}>
              <div className="mb-3 row">
                <div className="col-sm-4">
                  <label className="form-label">Estado</label>
                  <input
                    type="text"
                    className="form-control"
                    id="ID_ESTADO_DOM"
                    name="ID_ESTADO_DOM"
                    placeholder=""
                    onChange={handleChange}
                  ></input>
                </div>

                <div className="col-sm-4">
                  <label className="form-label">Municipio</label>
                  <input
                    type="text"
                    className="form-control"
                    name="ID_MUNICIPIO_DOM"
                    id="ID_MUNICIPIO_DOM"
                    placeholder=""
                    onChange={handleChange}
                  ></input>
                </div>

                <div className="col-sm-4">
                  <label className="form-label">Pais</label>
                  <input
                    type="text"
                    className="form-control"
                    name="ID_PAIS_DOM"
                    id="ID_PAIS_DOM"
                    placeholder=""
                    onChange={handleChange}
                  ></input>
                </div>
              </div>
              <div className="mb-3 row">
                <div className="col-sm-3">
                  <label className="form-label">Calle</label>
                  <input
                    type="text"
                    className="form-control"
                    name="CALLE"
                    id="CALLE"
                    placeholder=""
                    onChange={handleChange}
                  ></input>
                </div>

                <div className="col-sm-3">
                  <label className="form-label">Colonia</label>
                  <input
                    type="text"
                    className="form-control"
                    name="COLONIA"
                    id="COLONIA"
                    placeholder=""
                    onChange={handleChange}
                  ></input>
                </div>

                <div className="col-sm-3">
                  <label className="form-label">Codigo Postal</label>
                  <input
                    type="text"
                    className="form-control"
                    name="CP"
                    id="CP"
                    placeholder=""
                    onChange={handleChange}
                  ></input>
                </div>
                <div className="col-sm-3">
                  <label className="form-label">Telefono</label>
                  <input
                    type="text"
                    className="form-control"
                    name="TELEFONO"
                    id="TELEFONO"
                    placeholder=""
                    onChange={handleChange}
                  ></input>
                </div>
                
              </div>



              <div className="mb-3 row">
                  <div className="col-sm-12">
                  <label className="form-label">Observaciones</label>
                  <input
                    type="text"
                    className="form-control"
                    name="OBSERVACIONES"
                    id="OBSERVACIONES"
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
    </>
  );
};

export default Domicilio;
