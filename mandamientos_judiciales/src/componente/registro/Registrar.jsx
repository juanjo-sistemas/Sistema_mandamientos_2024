import Menu from "../menu/MenuLateral";
import Titulo from "../menu/Titulo";
import axios from "axios"
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../../src/index.css";

const Registrar = () => {
  const navigate = useNavigate();
    //objeto principal                                                 sistema smirna
    //  ID_ALTERNA      --------------------------------------------  numero consecutivo
    //  ID_ESTADO_EMISOR            ---------------- por default ---  durando  ************************
    //  ID_EMISOR      instituto que remite la informacion       ---  catalogo emisor ****   
    //  ID_MUNICIPIO                                             ---  catalogo
    //  ID_PAIS                     ---------------- por default ---  mexico  ************************                             ---  mexico
    //  NO_MANDATO     ----------------------------------------- ---  ingresado 
   
    //  NOMBRE APATERNO AMATERNO ALIAS EDAD  ESTATURA PESO   ------  INGRESADOS   
    //  ID_SEXO                                                  --- catalogo
    //  ID_USO_ANTEOJOS                                          --- S=SI N=NO
    
    //  ID_NACIONALIDAD                                          --- catalogo
    //  ID_ESTADO_JUZGADO                                        --- durango = 10
    //  ID_JUZGADO     --------------------------------------------- catalogo 
    //  NO_CAUSA       --------------------------------------------- ingresado
    //  OFICIO_JUZGADO --------------------------------------------- ingresado
    //  FECHA_OFICIO    -------------   --------    ---------  ----- seleccion de fecha
    //  ID_TIPO_CUANTIA  ------------------------------------------- catalogo 
    // ****************************************
    //  ***************************************
                //  variables completas      *****
                //  const  ID_ALTERNA        || = req.body.ID_ALTERNA; 
                //  const  ID_ESTADO_EMISOR  || = req.body.ID_ESTADO_EMISOR;
                //  const  ID_EMISOR         || = req.body.ID_EMISOR;
                //  const  ID_MUNICIPIO      || = req.body.ID_MUNICIPIO;
                //  const  ID_PAIS           || = req.body.ID_PAIS; 
                //  const  NO_MANDATO        = req.body.NO_MANDATO;
                //  const  NOMBRE            = req.body.NOMBRE ;
                //  const  APATERNO          = req.body.APATERNO;
                //  const  AMATERNO          = req.body.AMATERNO;
                //  const  ALIAS             = req.body.ALIAS;
                //  const  EDAD              = req.body.EDAD;
                //  const  ESTATURA          = req.body.ESTATURA;
                //  const  PESO              = req.body.PESO;
                //  const  ID_SEXO           = req.body.ID_SEXO;
                //  const  ID_USO_ANTEOJOS   = req.body.ID_USO_ANTEOJOS;      //-- S=S= req.body.INSTITUTO;I N=NO
                //  const  ID_NACIONALIDAD   = req.body.ID_NACIONALIDAD; 
                //  const  ID_ESTADO_JUZGADO = req.body.ID_ESTADO_JUZGADO;
                //  const  ID_JUZGADO        = req.body.ID_JUZGADO;
                //  const  NO_CAUSA          = req.body.NO_CAUSA;
                //  const  OFICIO_JUZGADO    = req.body.OFICIO_JUZGADO;
                //  const  FECHA_OFICIO      = req.body.FECHA_OFICIO;
                //  const  ID_TIPO_CUANTIA   = req.body.ID_TIPO_CUANTIA;
    //  ***************************************
    // ****************************************
   

   // cat_sexo  traer datos

   const [cat_sexo, setCat_sexo]                 = useState([])
   const [cat_nacionalidad, setCat_nacionalidad] = useState([])
   const [cat_juz, setCat_juz] = useState([])
   const [cat_cuantia, setCat_cuantia] = useState([])

      useEffect (()=>{
       fetch("http://localhost:8081/sexo_cat")
      .then((data)=>data.json())
      .then((val)=>setCat_sexo(val))
      },[])
 
      useEffect (()=>{
        fetch("http://localhost:8081/nacionalidad_cat")
        .then((data)=>data.json())
        .then((val)=>setCat_nacionalidad(val))
        },[])            
        
        console.log(cat_nacionalidad)

        useEffect (()=>{
          fetch("http://localhost:8081/juzgados_cat")
          .then((data)=>data.json())
          .then((val)=>setCat_juz(val))
          },[])
  
          
          useEffect (()=>{
            fetch("http://localhost:8081/cuantia")
            .then((data)=>data.json())
            .then((val)=>setCat_cuantia(val))
            },[])    


    const [registro, setRegistro] = useState({
        NO_MANDATO:"",
        NOMBRE:"",
        APATERNO:"",
        AMATERNO: "",
        ALIAS: "",
        
        EDAD: "",
        ESTATURA: "",
        PESO: "",
        ID_SEXO: "",    
        ID_USO_ANTEOJOS: "",
      
        ID_NACIONALIDAD: "",
        ID_ESTADO_JUZGADO: "",
        ID_JUZGADO:"",
        NO_CAUSA: "",
        OFICIO_JUZGADO: "",
      
        FECHA_OFICIO: "",   
        ID_TIPO_CUANTIA: "",   
    });

   





    const handleChange = (e)=>{
      //formatoDia()  
      const { name, value } = e.target;
      setRegistro((prev) => ({...prev,[name]: value.trim()}));
            
     };

     const handleClick =  (e)=>{      
      e.preventDefault();
     try{
       axios.post("http://localhost:8081/registrar", registro );
      alert("El nuevo registro ha sido guardado correctamente ");
      navigate("/Inicio")
     }catch(err) {
      console.error("Error al registrar:", err);
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
          
          <form onSubmit={handleClick}>
          <h3>Formulario principal para el registro ACTUALIZADO</h3>         

          <div className="mb-3 row">
          <div className="col-sm-6">
              <label className="form-label">
                NUMERO DE MANDATO
              </label>
              <input
                type="text"
                className="form-control"
                id="NO_MANDATO"
                name="NO_MANDATO"
                placeholder=""
                onChange={handleChange}
              ></input>
            </div>

            <div className="col-sm-6">
              <label className="form-label">NOMBRE</label>
              <input
                type="text"
                className="form-control"
                id="NOMBRE"
                name="NOMBRE"
                placeholder=""
                onChange={handleChange}
              ></input>
            </div>
            </div>

          <div className="mb-3 row">
            <div className="col-sm-6">
              <label className="form-label">APELLIDO PATERNO</label>
              <input
                type="text"
                className="form-control"
                id="APATERNO"
                name="APATERNO"
                placeholder=""
                onChange={handleChange}
              ></input>
            </div>

            <div className="col-sm-6">
              <label className="form-label">APELLIDO MATERNO</label>
              <input
                type="text"
                className="form-control"
                name="AMATERNO"
                id="AMATERNO"
                placeholder=""
                onChange={handleChange}
              ></input>
            </div>
          </div>

          <div className="mb-3 row">
            <h4>Datos General</h4>
            <div className="col-sm-3">
              <label className="form-label">ALIAS</label>
              <input
                type="text"
                className="form-control"
                name="ALIAS"
                id="ALIAS"
                placeholder=""
                onChange={handleChange}
              ></input>
            </div>

            <div className="col-sm-3">
              <label className="form-label">EDAD</label>
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
              <label className="form-label">ESTATURA</label>
              <input
                type="text"
                className="form-control"
                name="ESTATURA"
                id="ESTATURA"
                placeholder=""
                onChange={handleChange}
              ></input>
            </div>

            <div className="col-sm-3">
              <label className="form-label">PESO</label>
              <input
                type="text"
                className="form-control"
                name="PESO"
                id="PESO"
                placeholder=""
                onChange={handleChange}
              ></input>
            </div>
          </div>

          <div className="mb-3 row">
            <div className="col-sm-3">
              <label className="form-label">SEXO</label>
              <select
                type="text"
                className="form-control"
                name="ID_SEXO"
                id="ID_SEXO"
                placeholder=""
                onChange={handleChange}>

                  <option  disabled value=" ">Sexo de la persona</option>
                  {cat_sexo.map((sex) => (
                    <option key={sex.TIPO} value={sex.CLAVE}>
                    {sex.TIPO}
                  </option>
                ))}
                </select>

            </div>

            <div className="col-sm-3">
              <label className="form-label">USO DE ANTEOJOS</label>
              <input
                type="text"
                className="form-control"
                name="ID_USO_ANTEOJOS"
                id="ID_USO_ANTEOJOS"
                placeholder=""
                onChange={handleChange}
              ></input>
            </div>

            <div className="col-sm-3">
              <label className="form-label">NACIONALIDAD</label>
              <select
                type="text"
                className="form-control"
                name="ID_NACIONALIDAD"
                id="ID_NACIONALIDAD"
                placeholder=""                
                onChange={handleChange}>

                <option  disabled >Nacionalidad de la persona</option>
                  {cat_nacionalidad.map((naci, index) => (
                    <option key={index} value={naci.NACIONALIDAD}>
                    {naci.NACIONALIDAD} 
                  </option>
                ))}


                </select>
            </div>

            <div className="col-sm-3">
              <label className="form-label">ESTADO JUZGADO</label>
              <input
                type="text"
                className="form-control"
                name="ID_ESTADO_JUZGADO"
                id="ID_ESTADO_JUZGADO"
                placeholder=""
                onChange={handleChange}
              ></input>
            </div>
          </div>

          <div className="mb-3 row">
            <h4>Juzgado</h4>
            <div className="col-sm-4">
              <label className="form-label">JUZGADO</label>
              <select
                type="text"
                className="form-control"
                name="ID_JUZGADO"
                id="ID_JUZGADO"
                placeholder=""
                onChange={handleChange}>

                  <option  disabled >Seleccione un juzgado </option>
                  {cat_juz.map((j) => (
                    <option key={j.ID_JUZGADO} value={j.DESCRIP_JUZGADO	}>
                    {j.DESCRIP_JUZGADO	} 
                  </option>
                ))}
       

              </select>
            </div>

            <div className="col-sm-4">
              <label className="form-label">NUMERO DE CAUSA</label>
              <input
                type="text"
                className="form-control"
                name="NO_CAUSA"
                id="NO_CAUSA"
                placeholder=""
                onChange={handleChange}
              ></input>
            </div>

            <div className="col-sm-4">
              <label className="form-label">OFICIO DE JUZGADO MEDIANTE EL CUAL SE SOLICITA LA EJECUCION DEL MANDATO</label>
              <input
                type="text"
                className="form-control"
                name="OFICIO_JUZGADO"
                id="OFICIO_JUZGADO"
                placeholder=""
                onChange={handleChange}
              ></input>
            </div>
          </div>

          <div className="mb-3 row">
            <div className="col-sm-4">
              <label className="form-label">FECHA DE OFICIO</label>
              <input
                type="text"
                className="form-control"
                name="FECHA_OFICIO"
                id="FECHA_OFICIO"
                placeholder=""
                onChange={handleChange}
              ></input>
            </div>

            <div className="col-sm-4">
              <label className="form-label">TIPO DE CUANTIA</label>
              <select
                type="text"
                className="form-control"
                id="ID_TIPO_CUANTIA"
                name="ID_TIPO_CUANTIA"
                placeholder=""
                onChange={handleChange}
              >
                <option  disabled >Seleccione un cuantia</option>
                  {cat_cuantia.map((naci, index) => (
                    <option key={index} value={naci.TIPO}>
                    {naci.TIPO} 
                  </option>
                  ))}


              </select>
            </div>    
            
            </div>
                    
              <div className="col-sm-6">
                <div className="mb-3 row">
                  <div className="col-sm-6">
                  <button type="submit" className="btn btn-primary" >Registrar</button>
                  </div>
                  <div className="col-sm-6">
                  <Link to="/Inicio" className="btn btn-info">Siguiente</Link>
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

export default Registrar;
