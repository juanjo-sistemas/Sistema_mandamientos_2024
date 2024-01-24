import Menu from "../menu/MenuLateral";
import Titulo from "../menu/Titulo";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../../src/index.css";

const Amparos = () => {
  const navigate = useNavigate();
  const [amparo, setAmparo] = useState({
    ID_TIPO_AMPARO: "",
    ID_ESTADO_JUZ: "",
    ID_JUZGADO:"",
    ID_RESOLUCION:"",
    NO_AMPARO:"",
    FECHA_AMPARO:""

  });

  const handleChange = (e) => {
    //formatoDia()
    const { name, value } = e.target;
    setAmparo((prev) => ({ ...prev, [name]: value.trim() }));
  };

  const handleClick = (e) => {
    e.preventDefault();
    try {
      axios.post("http://localhost:8081/amparo", amparo);
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
          <div className="mb-12 row">
            <h3>Amparos</h3>
            <form onSubmit={handleClick}>
              <div className="mb-3 row">
                <div className="col-sm-4">
                  <label className="form-label">NO. DE AMPARO</label>
                  <input
                    type="text"
                    className="form-control"
                    id="NO_AMPARO"
                    name="NO_AMPARO"
                    placeholder=""
                    onChange={handleChange}
                  ></input>
                </div>

                <div className="col-sm-4">
                  <label className="form-label">FECHA DE AMPARO</label>
                  <input
                    type="text"
                    className="form-control"
                    name="FECHA_AMPARO"
                    id="FECHA_AMPARO"
                    placeholder=""
                    onChange={handleChange}
                  ></input>
                </div>

                <div className="col-sm-4">
                  <label className="form-label">ESTADO JUZGADO</label>
                  <input
                    type="text"
                    className="form-control"
                    name="ID_ESTADO_JUZ"
                    id="ID_ESTADO_JUZ"
                    placeholder=""
                    onChange={handleChange}
                  ></input>
                </div>
              </div>
              <div className="mb-3 row">
               
                <div className="col-sm-3">
                  <label className="form-label">JUZGADO</label>
                  <input
                    type="text"
                    className="form-control"
                    name="ID_JUZGADO"
                    id="ID_JUZGADO"
                    placeholder=""
                    onChange={handleChange}
                  ></input>
                </div>

                <div className="col-sm-3">
                  <label className="form-label">RESOLUCION</label>
                  <input
                    type="text"
                    className="form-control"
                    name="ID_RESOLUCION"
                    id="ID_RESOLUCION"
                    placeholder=""
                    onChange={handleChange}
                  ></input>
                </div>

                <div className="col-sm-3">
                  <label className="form-label">TIPO DE AMPARO</label>
                  <input
                    type="text"
                    className="form-control"
                    name="ID_TIPO_AMPARO"
                    id="ID_TIPO_AMPARO"
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

export default Amparos;
