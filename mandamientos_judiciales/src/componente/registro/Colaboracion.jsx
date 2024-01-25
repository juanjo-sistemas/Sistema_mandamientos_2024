import Menu from "../menu/MenuLateral";
import Titulo from "../menu/Titulo";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../../src/index.css";
const Colaboracion = () => {
  const navigate = useNavigate();
  const [colaboracion, setColaboracion] = useState({
    NUMERO_COLABORACION: "",
    NO_OFICIO: "",
    FECHA_OFICIO: "",
    FECHA_INICIO: "",
    FECHA_TERMINO: "",
    ID_ESTADO_COLABORA: "",
    ID_EMISOR_COLABORA: "",
    ACUERDO_CONVENIO: "",
    RAZON_COLABORACION: "",
    GRAVEDAD_CASO: "",
  });

  const handleChange = (e) => {
    //formatoDia()
    const { name, value } = e.target;
    setColaboracion((prev) => ({ ...prev, [name]: value.trim() }));
  };

  const handleClick = (e) => {
    e.preventDefault();
    try {
      axios.post("http://localhost:8081/colaboracion", colaboracion);
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
                <h3>Colaboracion</h3>

                <div className="col-sm-6">
                  <label className="form-label">Numero colaboracion </label>
                  <input
                    type="text"
                    className="form-control"
                    id="NUMERO_COLABORACION"
                    name="NUMERO_COLABORACION"
                    placeholder=""
                    onChange={handleChange}
                  ></input>
                </div>

                <div className="col-sm-6">
                  <label className="form-label">N° de oficio</label>
                  <input
                    type="text"
                    className="form-control"
                    id="NO_OFICIO"
                    name="NO_OFICIO"
                    placeholder=""
                    onChange={handleChange}
                  ></input>
                </div>

                <div className="mb-3 row">
                  <div className="col-sm-3">
                    <label className="form-label">Fecha oficio</label>
                    <input
                      type="text"
                      className="form-control"
                      id="FECHA_OFICIO"
                      name="FECHA_OFICIO"
                      placeholder=""
                      onChange={handleChange}
                    ></input>
                  </div>

                  <div className="col-sm-3">
                    <label className="form-label">Fecha inicio</label>
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
                    <label className="form-label">Fecha termino</label>
                    <input
                      type="text"
                      className="form-control"
                      name="FECHA_TERMINO"
                      id="FECHA_TERMINO"
                      placeholder=""
                      onChange={handleChange}
                    ></input>
                  </div>

                  <div className="col-sm-3">
                    <label className="form-label">
                      Estado con el que colabora
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="ID_ESTADO_COLABORA"
                      id="ID_ESTADO_COLABORA"
                      placeholder=""
                      onChange={handleChange}
                    ></input>
                  </div>
                </div>

                <div className="mb-3 row">
                  <div className="col-sm-3">
                    <label className="form-label">
                      Emisor con el que colabora
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="ID_EMISOR_COLABORA"
                      name="ID_EMISOR_COLABORA"
                      placeholder=""
                      onChange={handleChange}
                    ></input>
                  </div>

                  <div className="col-sm-3">
                    <label className="form-label">Acuerdo convenio</label>
                    <input
                      type="text"
                      className="form-control"
                      name="ACUERDO_CONVENIO"
                      id="ACUERDO_CONVENIO"
                      placeholder=""
                      onChange={handleChange}
                    ></input>
                  </div>

                  <div className="col-sm-3">
                    <label className="form-label">Razon de colaboracion</label>
                    <input
                      type="text"
                      className="form-control"
                      name="RAZON_COLABORACION"
                      id="RAZON_COLABORACION"
                      placeholder=""
                      onChange={handleChange}
                    ></input>
                  </div>

                  <div className="col-sm-3">
                    <label className="form-label">
                      Gravedad o peligrosidad
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="GRAVEDAD_CASO"
                      id="GRAVEDAD_CASO"
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

export default Colaboracion;
