import Menu from "../menu/MenuLateral";
import Titulo from "../menu/Titulo";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../../src/index.css";

const Ministerial = () => {
  const navigate = useNavigate();
  const [ministerial, setMinisterial] = useState({
    ORDEN_MINISTERIAL: "",
    AGENCIA: "",
    TURNO: "",
    NO_MP: "",
    NOMBREMP: "",
    PATERNO_MP: "",
    MATERNO_MP: "",
    NO_CONVALIDACION_JUEZ: "",
    AV_PREVIA: "",
    FECHA_INICIO: "",
    FECHA_TERMINO: "",
    CARPETA_INV: "",
    HORA_INICIO: "",
    HORA_FIN: "",
    FECHA_CONVALIDACION: "",
    JUZGADO_ACREDITACION: "",
    JUEZ_ACREDITACION: "",
    RAZON_EMISOR: "",
    DELITO_TIPO: "",
    GRAVEDAD: "",

  });

  const handleChange = (e) => {
    //formatoDia()
    const { name, value } = e.target;
    setMinisterial((prev) => ({ ...prev, [name]: value.trim() }));
  };

  const handleClick = (e) => {
    e.preventDefault();
    try {
      axios.post("http://localhost:8081/ministerial", ministerial);
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
                <h3>Ministerial</h3>

                <div className="mb-3 row">
                  <div className="col-sm-4">
                    <label className="form-label">ORDEN MINISTERIAL</label>
                    <input
                      type="text"
                      className="form-control"
                      id="ORDEN_MINISTERIAL"
                      name="ORDEN_MINISTERIAL"
                      placeholder=""
                      onChange={handleChange}
                    ></input>
                  </div>

                  <div className="col-sm-4">
                    <label className="form-label">AGENCIA</label>
                    <input
                      type="text"
                      className="form-control"
                      id="AGENCIA"
                      name="AGENCIA"
                      placeholder=""
                      onChange={handleChange}
                    ></input>
                  </div>

                  <div className="col-sm-4">
                    <label className="form-label">TURNO</label>
                    <input
                      type="text"
                      className="form-control"
                      id="TURNO"
                      name="TURNO"
                      placeholder=""
                      onChange={handleChange}
                    ></input>
                  </div>
                </div>

                <div className="mb-3 row">
                  <div className="col-sm-4">
                    <label className="form-label">N° MINISTERIO PUBLICO</label>
                    <input
                      type="text"
                      className="form-control"
                      name="NO_MP"
                      id="NO_MP"
                      placeholder=""
                      onChange={handleChange}
                    ></input>
                  </div>

                  <div className="col-sm-4">
                    <label className="form-label">
                      NOMBRE DEL MINISTERIO PUBLICO
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="NOMBREMP"
                      id="NOMBREMP"
                      placeholder=""
                      onChange={handleChange}
                    ></input>
                  </div>

                  <div className="col-sm-4">
                    <label className="form-label">
                      APELLIDO PATERNO DEL MINISTERIO PUBLICO
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="PATERNO_MP"
                      id="PATERNO_MP"
                      placeholder=""
                      onChange={handleChange}
                    ></input>
                  </div>
                </div>

                <div className="mb-3 row">
                  <div className="col-sm-4">
                    <label className="form-label">
                      APELLIDO MATERNO DEL MP
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="MATERNO_MP"
                      id="MATERNO_MP"
                      placeholder=""
                      onChange={handleChange}
                    ></input>
                  </div>

                  <div className="col-sm-4">
                    <label className="form-label">
                      N° CONVALIDACION DE JUEZ
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="NO_CONVALIDACION_JUEZ"
                      id="NO_CONVALIDACION_JUEZ"
                      placeholder=""
                      onChange={handleChange}
                    ></input>
                  </div>

                  <div className="col-sm-4">
                    <label className="form-label">AV. PREVIA</label>
                    <input
                      type="text"
                      className="form-control"
                      name="AV_PREVIA"
                      id="AV_PREVIA"
                      placeholder=""
                      onChange={handleChange}
                    ></input>
                  </div>
                </div>

                <div className="mb-3 row">
                  <div className="col-sm-4">
                    <label className="form-label">FECHA INICIO</label>
                    <input
                      type="text"
                      className="form-control"
                      name="FECHA_INICIO"
                      id="FECHA_INICIO"
                      placeholder=""
                      onChange={handleChange}
                    ></input>
                  </div>

                  <div className="col-sm-3">
                    <label className="form-label">FECHA TERMINO</label>
                    <input
                      type="text"
                      className="form-control"
                      name="FECHA_TERMINO"
                      id="FECHA_TERMINO"
                      placeholder=""
                      onChange={handleChange}
                    ></input>
                  </div>
                </div>

                <div className="mb-3 row">
                  <div className="col-sm-4">
                    <label className="form-label">
                      CARPETA DE INVESTIGACION
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="CARPETA_INV"
                      id="CARPETA_INV"
                      placeholder=""
                      onChange={handleChange}
                    ></input>
                  </div>

                  <div className="col-sm-4">
                    <label className="form-label">HORA INICIO</label>
                    <input
                      type="text"
                      className="form-control"
                      name="HORA_INICIO"
                      id="HORA_INICIO"
                      placeholder=""
                      onChange={handleChange}
                    ></input>
                  </div>

                  <div className="col-sm-4">
                    <label className="form-label">HORA FIN</label>
                    <input
                      type="text"
                      className="form-control"
                      name="HORA_FIN"
                      id="HORA_FIN"
                      placeholder=""
                      onChange={handleChange}
                    ></input>
                  </div>
                </div>

                <div className="mb-3 row">
                  <div className="col-sm-4">
                    <label className="form-label">FECHA DE CONVALIDACION</label>
                    <input
                      type="text"
                      className="form-control"
                      name="FECHA_CONVALIDACION"
                      id="FECHA_CONVALIDACION"
                      placeholder=""
                      onChange={handleChange}
                    ></input>
                  </div>

                  <div className="col-sm-4">
                    <label className="form-label">
                      JUZGADO DE ACREDITACION
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="JUZGADO_ACREDITACION"
                      id="JUZGADO_ACREDITACION"
                      placeholder=""
                      onChange={handleChange}
                    ></input>
                  </div>

                  <div className="col-sm-4">
                    <label className="form-label">
                      NOMBRE DEL JUEZ QUE ACREDITA
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="JUEZ_ACREDITACION"
                      name="JUEZ_ACREDITACION"
                      placeholder=""
                      onChange={handleChange}
                    ></input>
                  </div>
                </div>

                <div className="mb-3 row">
                  <div className="col-sm-4">
                    <label className="form-label">RAZON PARA LA EMISION</label>
                    <input
                      type="text"
                      className="form-control"
                      name="RAZON_EMISOR"
                      id="RAZON_EMISOR"
                      placeholder=""
                      onChange={handleChange}
                    ></input>
                  </div>

                  <div className="col-sm-4">
                    <label className="form-label">TIPO DELITO</label>
                    <input
                      type="text"
                      className="form-control"
                      id="DELITO_TIPO"
                      name="DELITO_TIPO"
                      placeholder=""
                      onChange={handleChange}
                    ></input>
                  </div>

                  <div className="col-sm-4">
                    <label className="form-label">GRAVEDAD</label>
                    <input
                      type="text"
                      className="form-control"
                      id="GRAVEDAD"
                      name="GRAVEDAD"
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

export default Ministerial;
