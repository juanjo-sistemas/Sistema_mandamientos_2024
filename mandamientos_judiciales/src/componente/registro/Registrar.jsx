import Menu from "../menu/MenuLateral";
import Titulo from "../menu/Titulo";
import axios from "axios"
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../../src/index.css";

const Registrar = () => {

    //objeto principal
    const [registro, setRegistro] = useState({
    INSTITUTO:"",
    MANDATO:"",
    ESTATUS:"",
    MUNICIPIO: "",
    NOMBRE: "",
    
    APATERNO: "",
    AMATERNO: "",
    ALIAS: "",
    EDAD: "",
    SEXO: "",

    ESTATURA: "",
    PESO: "",
    JUZGADO: "",
    OFICIO: "",
    FOFICIO: "",
    
    CAUSA: "",
    CUANTIA: "",
    NACIONALIDAD: "",
    ANTEOJOS: "",
    FECHA: ""   
    });

    const handleChange = (e)=>{
      formatoDia()  
      setUser((prev)=>({ ...prev, [e.target.name]: e.target.value }))
            
     };

     const handleClick = async (e)=>{
      e.preventDefault();
     try{
      await axios.post("http://localhost:8081/registrar", registro );
      console.log(create)
      alert("El nuevo registro ha sido guardado correctamente ")
      navigate("/")
  
     }catch(err) {
        console.log(err)
     }
  }




  return (
    <>
      <Titulo></Titulo>
      <Menu></Menu>

      <div className="contenedor">
        <div className="contenedor_principal">
        <div className="row">
          <div className="mb-12 row">
          
          <h3>Formulario principal para el registro</h3>
          <div className="col-sm-6">
              <label className="form-label">
                Instituto que remite la informacion
              </label>
              <input
                type="text"
                className="form-control"
                id="ID_ESTADO_EMISOR"
                name="ID_ESTADO_EMISOR"
                placeholder=""
                onChange={handleChange}
              ></input>
            </div>

            <div className="col-sm-6">
              <label className="form-label">N° de mandato</label>
              <input
                type="text"
                className="form-control"
                id="NO_MANDATO"
                name="NO_MANDATO"
                placeholder=""
                onChange={handleChange}
              ></input>
            </div>
          

          <div className="mb-3 row">
            <div className="col-sm-6">
              <label className="form-label">Estatus mandato</label>
              <input
                type="text"
                className="form-control"
                id="ESTATUS"
                name="ESTATUS"
                placeholder=""
                onChange={handleChange}
              ></input>
            </div>

            <div className="col-sm-6">
              <label className="form-label">municipio</label>
              <input
                type="text"
                className="form-control"
                name="ID_MUNICIPIO"
                id="ID_MUNICIPIO"
                placeholder=""
                onChange={handleChange}
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
                id="NOMBRE"
                placeholder=""
                onChange={handleChange}
              ></input>
            </div>

            <div className="col-sm-3">
              <label className="form-label">Apellido paterno</label>
              <input
                type="text"
                className="form-control"
                name="APATERNO"
                id="APATERNO"
                placeholder=""
                onChange={handleChange}
              ></input>
            </div>

            <div className="col-sm-3">
              <label className="form-label">apellido materno</label>
              <input
                type="text"
                className="form-control"
                name="AMATERNO"
                id="AMATERNO"
                placeholder=""
                onChange={handleChange}
              ></input>
            </div>

            <div className="col-sm-3">
              <label className="form-label">alias</label>
              <input
                type="text"
                className="form-control"
                name="ALIAS"
                id="ALIAS"
                placeholder=""
                onChange={handleChange}
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
                id="EDAD"
                placeholder=""
                onChange={handleChange}
              ></input>
            </div>

            <div className="col-sm-3">
              <label className="form-label">sexo</label>
              <input
                type="text"
                className="form-control"
                name="ID_SEXO"
                id="ID_SEXO"
                placeholder=""
                onChange={handleChange}
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
                onChange={handleChange}
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
                onChange={handleChange}
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
                onChange={handleChange}
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
                onChange={handleChange}
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
                onChange={handleChange}
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
                onChange={handleChange}
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
                onChange={handleChange}
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
                onChange={handleChange}
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
                onChange={handleChange}
              ></input>
            </div>
          </div>

          <div className="mb-3 row">
            <div className="col-sm-6">
            <button type="submit" className="btn btn-primary" onClick={handleClick}>Registrar</button>
            </div>
            <div className="col-sm-6">
            <Link to="/" className="btn btn-info"> Inicio</Link>
            </div>
          </div>
          

          </div>
          </div>
     


        </div>
      </div>
    </>
  );
};

export default Registrar;
