import Menu from "../menu/MenuLateral";
import Titulo from "../menu/Titulo";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../../src/index.css";
const Otros_nombres = () => {
  const navigate = useNavigate();

  const [otros_nom, setOtros_nom] = useState({
    O_NOMBRE: "",
    O_APATERNO: "",
    O_AMATERNO: "",
    O_ALIAS: "",
  });

  const handleChange = (e) => {
    //formatoDia()
    const { name, value } = e.target;
    setOtros_nom((prev) => ({ ...prev, [name]: value.trim() }));
  };

  const handleClick = (e) => {
    e.preventDefault();
    try {
      axios.post("http://localhost:8081/otros_nom", otros_nom);
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
            <h3>OTROS NOMBRES</h3>
            <form onSubmit={handleClick}>
              <div className="mb-3 row">
                <div className="col-sm-4">
                  <label className="form-label">NOMBRE (s)</label>
                  <input
                    type="text"
                    className="form-control"
                    id="O_NOMBRE"
                    name="O_NOMBRE"
                    placeholder=""
                    onChange={handleChange}
                  ></input>
                </div>

                <div className="col-sm-4">
                  <label className="form-label">APELLIDO PATERNO</label>
                  <input
                    type="text"
                    className="form-control"
                    name="O_APATERNO"
                    id="O_APATERNO"
                    placeholder=""
                    onChange={handleChange}
                  ></input>
                </div>
              </div>

              <div className="mb-3 row">
                <div className="col-sm-4">
                  <label className="form-label">APELLIDO MATERNO</label>
                  <input
                    type="text"
                    className="form-control"
                    id="O_AMATERNO"
                    name="O_AMATERNO"
                    placeholder=""
                    onChange={handleChange}
                  ></input>
                </div>

                <div className="col-sm-4">
                  <label className="form-label">ALIAS</label>
                  <input
                    type="text"
                    className="form-control"
                    name="O_ALIAS"
                    id="O_ALIAS"
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

export default Otros_nombres;
