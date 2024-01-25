import Menu from "../menu/MenuLateral";
import Titulo from "../menu/Titulo";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../../src/index.css";

const Imagen = () => {
  const navigate = useNavigate();
  const [imagen, setImagen] = useState({
    DESCRIP_IMAGEN: "",
    TIPO_IMAGEN: "",
    GRUPO: "",
    IMAGEN: "",
  });

  const handleChange = (e) => {
    //formatoDia()
    const { name, value } = e.target;
    setImagen((prev) => ({ ...prev, [name]: value.trim() }));
  };

  const handleClick = (e) => {
    e.preventDefault();
    try {
      axios.post("http://localhost:8081/imagen", imagen);
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
                <h3>Imagen</h3>

                <div className="col-sm-6">
                  <label className="form-label">Descripcion de la imagen</label>
                  <input
                    type="text"
                    className="form-control"
                    id="nombre"
                    name="DESCRIP_IMAGEN"
                    placeholder=""
                    onChange={handleChange}
                  ></input>
                </div>

                <div className="col-sm-6">
                  <label className="form-label">
                    tipo imagen (selecionar foto o documento)
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="nombre"
                    name="TIPO_IMAGEN"
                    placeholder=""
                    onChange={handleChange}
                  ></input>
                </div>

                <div className="mb-3 row">
                  <div className="col-sm-6">
                    <label className="form-label">Grupo (select)</label>
                    <input
                      type="text"
                      className="form-control"
                      id="nombre"
                      name="GRUPO"
                      placeholder=""
                      onChange={handleChange}
                    ></input>
                  </div>

                  <div className="col-sm-6">
                    <label className="form-label">
                      Imagen (selecionar imagen)
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="IMAGEN"
                      id="nombre"
                      placeholder=""
                      onChange={handleChange}
                    ></input>
                  </div>

                  <div className="col-sm-3">
                    <label className="form-label">
                      imagen extra (guardar otra imagen)
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="ID_IMAGEN_EXT"
                      id="nombre"
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

export default Imagen;
