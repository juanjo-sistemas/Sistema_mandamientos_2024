import Menu from "../menu/MenuLateral";
import Titulo from "../menu/Titulo";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../../src/index.css";

const Proceso = () => {
  const navigate = useNavigate();
  /*

************************************************************************************************************
        const  FECHA_LIBRAMIENTO     //seleccion de fecha
        const  ID_FUERO_PROCESO      //catalogo ***
        const  ID_TIPO_MANDATO       //catalogo ***
        const  NO_PROCESO           //ingresado
        const  NO_AVERIGUACION      //ingresado
        const  FECHA_CAPTURA        //ingresado
        const  FECHA_RECEPCION      //ingresado
        const  FECHA_PRESCRIPCION   //ingresado
        const  FECHA_CUMPLIMIENTO   //ingresado
        const  OFICIO_CUMPLE        //ingresado
        const  FECHA_CANCELACION     //ingresado
        const  ID_MOTIVO_CANCELACION        //-- S=SI N=NO
        const  OFICIO_CANCELACION          //ingresado
        const  OBSERVACIONES              //ingresado
        const  ID_PROCESO_EXTRADI          //CATALOGO ***
        const  ID_TIPO_PROCESO        //catalogo ***
        const  CARPETA_INV         //ingresado
************************************************************************************************************

*/
  const [proceso, setProceso] = useState({
    ID_ESTADO_EMISOR: "",
    ID_EMISOR: "",

    FECHA_LIBRAMIENTO: "",
    ID_FUERO_PROCESO: "",
    ID_TIPO_MANDATO: "",
    NO_PROCESO: "",
    NO_AVERIGUACION: "",
    FECHA_CAPTURA: "",
    FECHA_RECEPCION: "",
    FECHA_PRESCRIPCION: "",
    FECHA_CUMPLIMIENTO: "",
    OFICIO_CUMPLE: "",
    FECHA_CANCELACION: "",
    ID_MOTIVO_CANCELACION: "",
    OFICIO_CANCELACION: "",
    OBSERVACIONES: "",
    ID_PROCESO_EXTRADI: "",
    ID_TIPO_PROCESO: "",
    CARPETA_INV: "",
  });

  const handleChange = (e) => {
    //formatoDia()
    const { name, value } = e.target;
    setProceso((prev) => ({ ...prev, [name]: value.trim() }));
  };

  const handleClick = (e) => {
    e.preventDefault();
    try {
      axios.post("http://localhost:8081/proceso", proceso);
      alert("El nuevo registro ha sido guardado correctamente ");
      navigate("/Inicio");
    } catch (err) {
      console.error("Error al registrar:", err);
    }
  };

  return (
    <>
      <Titulo></Titulo>
      <Menu></Menu>

      <div className="contenedor">
        <div className="contenedor_principal">
          <div className="row">
            <div className="mb-12 row">
              <form onSubmit={handleClick}>
                <h3>Formulario Proceso.</h3>

                <div className="mb-3 row">
                  <div className="col-sm-6">
                    <label className="form-label">FECHA LIBRAMIENTO</label>
                    <input
                      type="text"
                      className="form-control"
                      id="FECHA_LIBRAMIENTO"
                      name="FECHA_LIBRAMIENTO"
                      placeholder=""
                      onChange={handleChange}
                    ></input>
                  </div>

                  <div className="col-sm-6">
                    <label className="form-label">FUERON</label>
                    <input
                      type="text"
                      className="form-control"
                      id="ID_FUERO_PROCESO"
                      name="ID_FUERO_PROCESO"
                      placeholder=""
                      onChange={handleChange}
                    ></input>
                  </div>
                </div>

                <div className="mb-3 row">
                  <div className="col-sm-6">
                    <label className="form-label">TIPO MANDATO</label>
                    <input
                      type="text"
                      className="form-control"
                      id="ID_TIPO_MANDATO"
                      name="ID_TIPO_MANDATO"
                      placeholder=""
                      onChange={handleChange}
                    ></input>
                  </div>

                  <div className="col-sm-6">
                    <label className="form-label">NUMERO DE PROCESO</label>
                    <input
                      type="text"
                      className="form-control"
                      name="NO_PROCESO"
                      id="NO_PROCESO"
                      placeholder=""
                      onChange={handleChange}
                    ></input>
                  </div>
                </div>

                <div className="mb-3 row">
                  <div className="col-sm-3">
                    <label className="form-label">ALIAS</label>
                    <input
                      type="text"
                      className="form-control"
                      name="NO_AVERIGUACION"
                      id="NO_AVERIGUACION"
                      placeholder=""
                      onChange={handleChange}
                    ></input>
                  </div>

                  <div className="col-sm-3">
                    <label className="form-label">FECHA DE CAPTURA</label>
                    <input
                      type="text"
                      className="form-control"
                      name="FECHA_CAPTURA"
                      id="FECHA_CAPTURA"
                      placeholder=""
                      onChange={handleChange}
                    ></input>
                  </div>

                  <div className="col-sm-3">
                    <label className="form-label">FECHA DE RECEPCION</label>
                    <input
                      type="text"
                      className="form-control"
                      name="FECHA_RECEPCION"
                      id="FECHA_RECEPCION"
                      placeholder=""
                      onChange={handleChange}
                    ></input>
                  </div>

                  <div className="col-sm-3">
                    <label className="form-label">
                      FECHA DE PRE INSCRIPCION
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="FECHA_PRESCRIPCION"
                      id="FECHA_PRESCRIPCION"
                      placeholder=""
                      onChange={handleChange}
                    ></input>
                  </div>
                </div>

                <div className="mb-3 row">
                  <div className="col-sm-3">
                    <label className="form-label">FECHA DE CUMPLIMIENTO</label>
                    <input
                      type="text"
                      className="form-control"
                      name="FECHA_CUMPLIMIENTO"
                      id="FECHA_CUMPLIMIENTO"
                      placeholder=""
                      onChange={handleChange}
                    ></input>
                  </div>

                  <div className="col-sm-3">
                    <label className="form-label">OFICIO DE CUMPLIMIENTO</label>
                    <input
                      type="text"
                      className="form-control"
                      name="OFICIO_CUMPLE"
                      id="OFICIO_CUMPLE"
                      placeholder=""
                      onChange={handleChange}
                    ></input>
                  </div>

                  <div className="col-sm-3">
                    <label className="form-label">FECHA DE CANCELACION</label>
                    <input
                      type="text"
                      className="form-control"
                      name="FECHA_CANCELACION"
                      id="FECHA_CANCELACION"
                      placeholder=""
                      onChange={handleChange}
                    ></input>
                  </div>

                  <div className="col-sm-3">
                    <label className="form-label">MOTIVO DE CANCELACION</label>
                    <input
                      type="text"
                      className="form-control"
                      name="ID_MOTIVO_CANCELACION"
                      id="ID_MOTIVO_CANCELACION"
                      placeholder=""
                      onChange={handleChange}
                    ></input>
                  </div>
                </div>

                <div className="mb-3 row">
                  <div className="col-sm-4">
                    <label className="form-label">OFICIO DE CANCELACION</label>
                    <input
                      type="text"
                      className="form-control"
                      name="OFICIO_CANCELACION"
                      id="OFICIO_CANCELACION"
                      placeholder=""
                      onChange={handleChange}
                    ></input>
                  </div>

                  <div className="col-sm-4">
                    <label className="form-label">OBSERVACIONES</label>
                    <input
                      type="text"
                      className="form-control"
                      name="OBSERVACIONES"
                      id="OBSERVACIONES"
                      placeholder=""
                      onChange={handleChange}
                    ></input>
                  </div>

                  <div className="col-sm-4">
                    <label className="form-label">PROCESO EXTRADICION</label>
                    <input
                      type="text"
                      className="form-control"
                      name="ID_PROCESO_EXTRADI"
                      id="ID_PROCESO_EXTRADI"
                      placeholder=""
                      onChange={handleChange}
                    ></input>
                  </div>
                </div>

                <div className="mb-3 row">
                  <div className="col-sm-4">
                    <label className="form-label">TIPO DE PROCESO</label>
                    <input
                      type="text"
                      className="form-control"
                      name="ID_TIPO_PROCESO"
                      id="ID_TIPO_PROCESO"
                      placeholder=""
                      onChange={handleChange}
                    ></input>
                  </div>

                  <div className="col-sm-4">
                    <label className="form-label">
                      NUMERO DE CARPETA INVESTIGACION
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="CARPETA_INV"
                      name="CARPETA_INV"
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

export default Proceso;
