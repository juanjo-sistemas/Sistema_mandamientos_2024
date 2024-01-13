
const express = require ('express');
const mysql = require ('mysql');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json())

const db = mysql.createConnection({
    host:"localhost",
    user: 'root',
    password: '',
    database:'mandbus'
})

//app.get('/', (re, res)=>{
//    return res.json("servidor corriendo"); 
//});

// Crear un registro de prueba           ************************************************************
app.post ("/prueba", (req,res)=>{ 
procesado=0;     
id_fuente=10;
const   nombre   = req.body.nombre; 
const   apellido = req.body.apellido;
const   edad     = req.body.edad;

db.query("INSERT INTO registro (nombre, apellido, edad) VALUES (?,?,?)",
                                 [nombre, apellido, edad],
    (err,result) =>{
        if(err){
            console.log(err);
        }else{   
          //  db.query("INSERT INTO control_alterna (id_alterna, id_fuente, fecha, hora, procesado ) VALUES (?,?,?,?,?)",[ id_alterna, id_fuente, fe, hora, procesado ])
          //  res.send("registrado")   
        }
    }
)

})

// termino de registro de prueba  *******************************************************************


//traer registros  GET

    app.get('/paises', (req, res)=>{
    const sql = "SELECT * FROM paises";
    db.query(sql, (err, data)=>{
        if(err) return res.json(err);
        return res.json(data);
    })
    })


    // cat sexo
    app.get('/sexo_cat', (req, res) => {
        const sql = "SELECT * FROM cat_sexo";
        db.query(sql, (err, data) => {
            if (err) {
                return res.json(err);
            } else {
                return res.json(data);
            }
        })
    })

    // cat nacionalidad
    app.get('/nacionalidad_cat', (req, res) => {
        const sql = "SELECT CLAVE, NACIONALIDAD FROM cat_nacionalidad";
        db.query(sql, (err, data) => {
            if (err) {
                return res.json(err);
            } else {
                return res.json(data);
            }
        })
    })

    // cat juzgados
    app.get('/juzgados_cat', (req, res) => {
        const sql = "SELECT ID_JUZGADO, DESCRIP_JUZGADO FROM cat_juzgados";
        db.query(sql, (err, data) => {
            if (err) {
                return res.json(err);
            } else {
                return res.json(data);
            }
        })
    })


    // cat_tipo_cuantia
    app.get('/cuantia', (req, res) => {
        const sql = "SELECT * FROM cat_tipo_cuantia";
        db.query(sql, (err, data) => {
            if (err) {
                return res.json(err);
            } else {
                return res.json(data);
            }
        })
    })


    //  Crear un registro POST
    //  objeto principal----------------------------------
    //  ID_ALTERNA          
    //  ID_ESTADO_EMISOR    ---
    //  ID_EMISOR           ---CATALOGO
    //  ID_MUNICIPIO        ---CATALOGO
    //  ID_PAIS             ---CATALOGO -- MEXICO
    //  NO_MANDATO
    //  NOMBRE APATERNO AMATERNO ALIAS EDAD ESTATURA PESO
    //  ID_SEXO     ---CATALOGO
    //  ID_USO_ANTEOJOS     -- S=SI N=NO
    //  ID_NACIONALIDAD     ---CATALOGO
    //  ID_ESTADO_JUZGADO
    //  ID_JUZGADO           ---CATALOGO
    //  NO_CAUSA
    //  OFICIO_JUZGADO
    //  FECHA_OFICIO
    //  ID_TIPO_CUANTIA        ---CATALOGO


    app.post ("/registrar", (req,res)=>{ 
    procesado=0;     
    id_fuente=10;


    //  variables completas
    const  ID_ALTERNA        =""; 
    const  ID_ESTADO_EMISOR  ="";
    const  ID_EMISOR         ="";             //CATALOGO
    const  ID_MUNICIPIO      ="";              //CATALOGO
    const  ID_PAIS           ="";              //CATALOGO
    const  NO_MANDATO        = req.body.NO_MANDATO;
    const  NOMBRE            = req.body.NOMBRE ;
    const  APATERNO          = req.body.APATERNO;
    const  AMATERNO          = req.body.AMATERNO;
    const  ALIAS             = req.body.ALIAS;
    const  EDAD              = req.body.EDAD;
    const  ESTATURA          = req.body.ESTATURA;
    const  PESO              = req.body.PESO;
    const  ID_SEXO           = req.body.ID_SEXO;
    const  ID_USO_ANTEOJOS   = req.body.ID_USO_ANTEOJOS;      //-- S=SI N=NO
    const  ID_NACIONALIDAD   = req.body.ID_NACIONALIDAD;       //CATALOGO
    const  ID_ESTADO_JUZGADO = req.body.ID_ESTADO_JUZGADO;
    const  ID_JUZGADO        = req.body.ID_JUZGADO;            //CATALOGO
    const  NO_CAUSA          = req.body.NO_CAUSA;
    const  OFICIO_JUZGADO    = req.body.OFICIO_JUZGADO;
    const  FECHA_OFICIO      = req.body.FECHA_OFICIO;
    const  ID_TIPO_CUANTIA   = req.body.ID_TIPO_CUANTIA;         //CATALOGO

   
    
    db.query("INSERT INTO registro   (ID_ESTADO_EMISOR, ID_EMISOR, ID_MUNICIPIO, ID_PAIS, NO_MANDATO, NOMBRE, APATERNO, AMATERNO, ALIAS, EDAD, ESTATURA, PESO, ID_SEXO, ID_USO_ANTEOJOS, ID_NACIONALIDAD, ID_ESTADO_JUZGADO, ID_JUZGADO, NO_CAUSA, OFICIO_JUZGADO, FECHA_OFICIO, ID_TIPO_CUANTIA ) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)",
                                     [ID_ESTADO_EMISOR, ID_EMISOR, ID_MUNICIPIO, ID_PAIS, NO_MANDATO, NOMBRE, APATERNO, AMATERNO, ALIAS, EDAD, ESTATURA, PESO, ID_SEXO, ID_USO_ANTEOJOS, ID_NACIONALIDAD, ID_ESTADO_JUZGADO, ID_JUZGADO, NO_CAUSA, OFICIO_JUZGADO, FECHA_OFICIO, ID_TIPO_CUANTIA ],
        (err,result) =>{
            if(err){
                console.log(err);
            }else{   
              //  db.query("INSERT INTO control_alterna (id_alterna, id_fuente, fecha, hora, procesado ) VALUES (?,?,?,?,?)",[ id_alterna, id_fuente, fe, hora, procesado ])
              //  res.send("registrado")   
            }
        }
    )
    
    })


app.listen(8081,()=>{
    console.log("escuchando");
})