
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
    database:'prueba'
})


    app.get('/datos', (req, res) => {
        const sql = "SELECT * FROM registro";
        db.query(sql, (err, data) => {
            if (err) {
                return res.json(err);
            } else {
                return res.json(data);
            }
        })
    })
    
    // Crear un registro POST
    app.post ("/registrar", (req,res)=>{ 
    procesado=0;     
    id_fuente=10;
    const   instituto     = req.body.INSTITUTO; 
    const   mandato       = req.body.MANDATO;
    const   estatus       = req.body.ESTATUS;
    const   municipio     = req.body.MUNICIPIO;
    const   nombre        = req.body.NOMBRE;
    
    const   apaterno      = req.body.APATERNO;
    const   amaterno      = req.body.AMATERNO;
    const   alias         = req.body.ALIAS; 
    const   edad          = req.body.EDAD;
    const   sexo          = req.body.SEXO; 
    
    const   estatura      = req.body.ESTATURA;
    const   peso          = req.body.PESO;
    const   juzgado       = req.body.JUZGADO;
    const   oficio        = req.body.OFICIO;
    const   foficio       = req.body.FOFICIO;
    
    const   causa         = req.body.CAUSA;
    const   cuantia       = req.body.CUANTIA;
    const   nacionalidad  = req.body.NACIONALIDAD;
    const   anteojos      = req.body.ANTEOJOS;
    const   fecha         = req.body.FECHA;
    
    db.query("INSERT INTO registro (instituto, mandato, estatus, municipio, nombre, apaterno, amaterno, alias, edad, sexo, estatura, peso, juzgado, oficio, foficio, causa, cuantia, nacionalidad,anteojos,fecha   ) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)",
                                     [instituto,mandato,estatus,municipio,nombre,apaterno,amaterno,alias,edad,sexo,estatura,peso,juzgado,oficio,foficio,causa,cuantia,nacionalidad,anteojos,fecha],
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