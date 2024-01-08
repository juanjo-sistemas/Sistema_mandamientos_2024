import Menu from "../menu/MenuLateral";
import Titulo from "../menu/Titulo";
import "../../../src/index.css";

const Registrar = () => {
  return (
    <>
      <Titulo></Titulo>
      <Menu></Menu>

      <div className="contenedor">
        <div className="contenedor_principal">
          <div className="mb-12 row">
            <h3>Formulario principal para el registro</h3>

            <div className="col-sm-6">
              <label className="form-label">
                Instituto que remite la informacion
              </label>
              <input
                type="text"
                className="form-control"
                id="nombre"
                name="ID_ESTADO_EMISOR"
                placeholder=""
              ></input>
            </div>

            <div className="col-sm-6">
              <label className="form-label">N° de mandato</label>
              <input
                type="text"
                className="form-control"
                id="nombre"
                name="NO_MANDATO"
                placeholder=""
              ></input>
            </div>
          </div>

          <div className="mb-3 row">
            <div className="col-sm-6">
              <label className="form-label">Estatus mandato</label>
              <input
                type="text"
                className="form-control"
                id="nombre"
                placeholder=""
              ></input>
            </div>

            <div className="col-sm-6">
              <label className="form-label">municipio</label>
              <input
                type="text"
                className="form-control"
                name="ID_MUNICIPIO"
                id="nombre"
                placeholder=""
              ></input>
            </div>
          </div>

          <div className="mb-3 row">
            <h4>Datos General</h4>
            <div className="col-sm-3">
              <label className="form-label">Nombre</label>
              <input
                type="text"
                className="form-control"
                name="NOMBRE"
                id="nombre"
                placeholder=""
              ></input>
            </div>

            <div className="col-sm-3">
              <label className="form-label">Apellido paterno</label>
              <input
                type="text"
                className="form-control"
                name="APATERNO"
                id="nombre"
                placeholder=""
              ></input>
            </div>

            <div className="col-sm-3">
              <label className="form-label">apellido materno</label>
              <input
                type="text"
                className="form-control"
                name="AMATERNO"
                id="nombre"
                placeholder=""
              ></input>
            </div>

            <div className="col-sm-3">
              <label className="form-label">alias</label>
              <input
                type="text"
                className="form-control"
                name="ALIAS"
                id="nombre"
                placeholder=""
              ></input>
            </div>
          </div>

          <div className="mb-3 row">
            <div className="col-sm-3">
              <label className="form-label">edad</label>
              <input
                type="text"
                className="form-control"
                name="EDAD"
                id="nombre"
                placeholder=""
              ></input>
            </div>

            <div className="col-sm-3">
              <label className="form-label">sexo</label>
              <input
                type="text"
                className="form-control"
                name="ID_SEXO"
                id="nombre"
                placeholder=""
              ></input>
            </div>

            <div className="col-sm-3">
              <label className="form-label">estatura</label>
              <input
                type="text"
                className="form-control"
                name="ESTATURA"
                id="nombre"
                placeholder=""
              ></input>
            </div>

            <div className="col-sm-3">
              <label className="form-label">peso</label>
              <input
                type="text"
                className="form-control"
                name="PESO"
                id="nombre"
                placeholder=""
              ></input>
            </div>
          </div>

          <div className="mb-3 row">
            <h4>Juzgado</h4>
            <div className="col-sm-4">
              <label className="form-label">Juzgado</label>
              <input
                type="text"
                className="form-control"
                name="ID_JUZGADO"
                id="nombre"
                placeholder=""
              ></input>
            </div>

            <div className="col-sm-4">
              <label className="form-label">oficio</label>
              <input
                type="text"
                className="form-control"
                name="OFICIO_JUZGADO"
                id="nombre"
                placeholder=""
              ></input>
            </div>

            <div className="col-sm-4">
              <label className="form-label">Fecha de oficio</label>
              <input
                type="text"
                className="form-control"
                name="FECHA_OFICIO"
                id="nombre"
                placeholder=""
              ></input>
            </div>
          </div>

          <div className="mb-3 row">
            <div className="col-sm-4">
              <label className="form-label">N° causa</label>
              <input
                type="text"
                className="form-control"
                name="NO_CAUSA"
                id="nombre"
                placeholder=""
              ></input>
            </div>

            <div className="col-sm-4">
              <label className="form-label">Tipo cuantia</label>
              <input
                type="text"
                className="form-control"
                id="nombre"
                name="ID_TIPO_CUANTIA"
                placeholder=""
              ></input>
            </div>

            <div className="col-sm-4">
              <label className="form-label">Nacionalidad del individua</label>
              <input
                type="text"
                className="form-control"
                name="ID_NACIONALIDAD"
                id="nombre"
                placeholder=""
              ></input>
            </div>
          </div>

          <div className="mb-3 row">
            <div className="col-sm-4">
              <label className="form-label">Usa anteojos</label>
              <input
                type="text"
                className="form-control"
                name="ID_USO_ANTEOJOS"
                id="nombre"
                placeholder=""
              ></input>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Registrar;
