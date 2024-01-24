
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
    const  ID_ESTADO_EMISOR  ="1";
    const  ID_EMISOR         ="10";             //CATALOGO
    const  ID_MUNICIPIO      ="12";              //CATALOGO
    const  ID_PAIS           ="82";              //CATALOGO
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

   
    
    db.query("INSERT INTO registro_temporal   (ID_ESTADO_EMISOR, ID_EMISOR, ID_MUNICIPIO, ID_PAIS, NO_MANDATO, NOMBRE, APATERNO, AMATERNO, ALIAS, EDAD, ESTATURA, PESO, ID_SEXO, ID_USO_ANTEOJOS, ID_NACIONALIDAD, ID_ESTADO_JUZGADO, ID_JUZGADO, NO_CAUSA, OFICIO_JUZGADO, FECHA_OFICIO, ID_TIPO_CUANTIA ) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)",
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




    // proceso    
    app.post ("/proceso", (req,res)=>{ 
        procesado=0;     
        id_fuente=10;
    
    
        //  variables completas
        const  ID_ALTERNA           ="1"; 
        const  ID_ESTADO_EMISOR     ="1";
        const  ID_EMISOR            ="10";             //CATALOGO

        const  FECHA_LIBRAMIENTO    = req.body.FECHA_LIBRAMIENTO;              //CATALOGO
        const  ID_FUERO_PROCESO     = req.body.ID_FUERO_PROCESO;              //CATALOGO
        const  ID_TIPO_MANDATO      = req.body.ID_TIPO_MANDATO;
        const  NO_PROCESO           = req.body.NO_PROCESO;
        const  NO_AVERIGUACION      = req.body.NO_AVERIGUACION;
        const  FECHA_CAPTURA        = req.body.FECHA_CAPTURA;
        const  FECHA_RECEPCION      = req.body.FECHA_RECEPCION;
        const  FECHA_PRESCRIPCION   = req.body.FECHA_PRESCRIPCION;
        const  FECHA_CUMPLIMIENTO   = req.body.FECHA_CUMPLIMIENTO;
        const  OFICIO_CUMPLE        = req.body.OFICIO_CUMPLE;
        const  FECHA_CANCELACION    = req.body.FECHA_CANCELACION;
        const  ID_MOTIVO_CANCELACION= req.body.ID_MOTIVO_CANCELACION;      //-- S=SI N=NO
        const  OFICIO_CANCELACION   = req.body.OFICIO_CANCELACION;       //CATALOGO
        const  OBSERVACIONES        = req.body.OBSERVACIONES;
        const  ID_PROCESO_EXTRADI   = req.body.ID_PROCESO_EXTRADI;            //CATALOGO
        const  ID_TIPO_PROCESO      = req.body.ID_TIPO_PROCESO;
        const  CARPETA_INV          = req.body.CARPETA_INV;
        
       
        
        db.query("INSERT INTO reg_proceso_temporal   (ID_ALTERNA,ID_ESTADO_EMISOR,ID_EMISOR, FECHA_LIBRAMIENTO, ID_FUERO_PROCESO, ID_TIPO_MANDATO, NO_PROCESO, NO_AVERIGUACION, FECHA_CAPTURA, FECHA_RECEPCION, FECHA_PRESCRIPCION, FECHA_CUMPLIMIENTO, OFICIO_CUMPLE, FECHA_CANCELACION, ID_MOTIVO_CANCELACION, OFICIO_CANCELACION, OBSERVACIONES, ID_PROCESO_EXTRADI, ID_TIPO_PROCESO, CARPETA_INV ) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)",
                                                     [ID_ALTERNA,ID_ESTADO_EMISOR,ID_EMISOR, FECHA_LIBRAMIENTO, ID_FUERO_PROCESO, ID_TIPO_MANDATO, NO_PROCESO, NO_AVERIGUACION, FECHA_CAPTURA, FECHA_RECEPCION, FECHA_PRESCRIPCION, FECHA_CUMPLIMIENTO, OFICIO_CUMPLE, FECHA_CANCELACION, ID_MOTIVO_CANCELACION, OFICIO_CANCELACION, OBSERVACIONES, ID_PROCESO_EXTRADI, ID_TIPO_PROCESO, CARPETA_INV ],
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


         // delitos    
    app.post ("/delitos", (req,res)=>{ 
        procesado=0;     
        id_fuente=10;
    
    
        //  variables completas
        const  ID_ALTERNA           ="1"; 
        const  ID_ESTADO_EMISOR     ="1";
        const  ID_EMISOR            ="10";             //CATALOGO

        const  ID_DELITO    = req.body.ID_DELITO;              //CATALOGO
        const  ID_MODALIDAD     = req.body.ID_MODALIDAD;              //CATALOGO
               
        db.query("INSERT INTO reg_delitos_temporal   (ID_ALTERNA,ID_ESTADO_EMISOR,ID_EMISOR, ID_DELITO,ID_MODALIDAD ) VALUES (?,?,?,?,?)",
                                                     [ID_ALTERNA,ID_ESTADO_EMISOR,ID_EMISOR, ID_DELITO,ID_MODALIDAD],
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






      // domicilio


      /* 
        **************
            ESTADO = CATALOGO
            MUNICIPIO = CATOLOGO
            PAIS =  CATALOGO
            CALLE = INGRESADO
            CODIGO POSTAL = INGRESADO
            COLONIA = INGRESADO
            OBSERVACIONES = INGRESADO
            TELEFONO = INGRESADO
        **************

      */
      app.post ("/domicilio", (req,res)=>{ 
        procesado=0;     
        id_fuente=10;
    
    
        //  variables completas
        const  ID_ALTERNA           ="1"; 
        const  ID_ESTADO_EMISOR     ="1";
        const  ID_EMISOR            ="10";             //CATALOGO
        const  ID_DOMICILIO_EXT     ="";

        const ID_ESTADO_DOM = req.body.ID_ESTADO_DOM;
        const ID_MUNICIPIO_DOM = req.body.ID_MUNICIPIO_DOM;
        const ID_PAIS_DOM =  req.body.ID_PAIS_DOM;
        const CALLE = req.body.CALLE;
        const CP = req.body.CP;
        const COLONIA = req.body.COLONIA;
        const OBSERVACIONES = req.body.OBSERVACIONES;
        const TELEFONO = req.body.TELEFONO;
               
        db.query("INSERT INTO reg_domicilio_temporal   (ID_ALTERNA, ID_ESTADO_EMISOR, ID_EMISOR, ID_DOMICILIO_EXT, ID_ESTADO_DOM, ID_MUNICIPIO_DOM, ID_PAIS_DOM, CALLE, CP, COLONIA, OBSERVACIONES, TELEFONO ) VALUES (?,?,?,?,?,?,?,?,?,?,?,?)",
                                                       [ID_ALTERNA, ID_ESTADO_EMISOR, ID_EMISOR, ID_DOMICILIO_EXT, ID_ESTADO_DOM, ID_MUNICIPIO_DOM, ID_PAIS_DOM, CALLE, CP, COLONIA, OBSERVACIONES, TELEFONO],
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

      
 
 
 //********************************************** */
 

      // otros nombres


      
        app.post ("/otros_nom", (req,res)=>{ 
            procesado=0;     
            id_fuente=10;        
        
            //  variables completas
            const  ID_ALTERNA             ="1"; 
            const  ID_ESTADO_EMISOR       ="1";
            const  ID_EMISOR              ="10";             //CATALOGO
            const  ID_OTRO_NOMBRE_EXT     ="";
    
            const O_NOMBRE           = req.body.O_NOMBRE;
            const O_APATERNO         = req.body.O_APATERNO;
            const O_AMATERNO         = req.body.O_AMATERNO;
            const O_ALIAS            = req.body.O_ALIAS;
            
                   
            db.query("INSERT INTO reg_otros_nom_temp   (ID_ALTERNA, ID_ESTADO_EMISOR, ID_EMISOR, ID_OTRO_NOMBRE_EXT, O_NOMBRE, O_PATERNO, O_MATERNO, O_ALIAS ) VALUES (?,?,?,?,?,?,?,?)",
                                                           [ID_ALTERNA, ID_ESTADO_EMISOR, ID_EMISOR, ID_OTRO_NOMBRE_EXT, O_NOMBRE, O_APATERNO, O_AMATERNO, O_ALIAS],
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
    
          
             // amparos


      
        app.post ("/amparo", (req,res)=>{ 
            procesado=0;     
            id_fuente=10;        
        
            //  variables completas
            const  ID_ALTERNA             ="1"; 
            const  ID_ESTADO_EMISOR       ="1";
            const  ID_EMISOR              ="10";             //CATALOGO
            const  ID_AMPARO_EXT          ="";
           
            ID_TIPO_AMPARO = req.body.ID_TIPO_AMPARO;
            ID_ESTADO_JUZ = req.body.ID_ESTADO_JUZ;
            ID_JUZGADO = req.body.ID_JUZGADO;
            ID_RESOLUCION = req.body.ID_RESOLUCION;
            NO_AMPARO = req.body.NO_AMPARO; 
            FECHA_AMPARO= req.body.FECHA_AMPARO;
                        
                   
            db.query("INSERT INTO reg_amparos_temporal   (ID_ALTERNA, ID_ESTADO_EMISOR, ID_EMISOR, ID_AMPARO_EXT, ID_TIPO_AMPARO, ID_ESTADO_JUZ, ID_JUZGADO, ID_RESOLUCION, NO_AMPARO, FECHA_AMPARO) VALUES (?,?,?,?,?,?,?,?,?,?)",
                                                       [ID_ALTERNA, ID_ESTADO_EMISOR, ID_EMISOR, ID_AMPARO_EXT, ID_TIPO_AMPARO, ID_ESTADO_JUZ, ID_JUZGADO, ID_RESOLUCION, NO_AMPARO, FECHA_AMPARO],
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
    
          



            // ministerial


      
        app.post ("/ministerial", (req,res)=>{ 
            procesado=0;     
            id_fuente=10;        
        
            //  variables completas
            const  ID_ALTERNA             ="1"; 
            const  ID_ESTADO_EMISOR       ="1";
            const  ID_EMISOR              ="10";             //CATALOGO
            ORDEN_MINISTERIAL = req.body.ORDEN_MINISTERIAL;
            AGENCIA = req.body.AGENCIA;
            TURNO = req.body.TURNO;
            NO_MP = req.body.NO_MP;
            NOMBREMP = req.body.NOMBREMP;
            PATERNO_MP = req.body.PATERNO_MP;
            MATERNO_MP = req.body. MATERNO_MP;
            NO_CONVALIDACION_JUEZ = req.body.NO_CONVALIDACION_JUEZ;
            AV_PREVIA = req.body.AV_PREVIA;
            FECHA_INICIO  = req.body.FECHA_INICIO;
            FECHA_TERMINO = req.body.FECHA_TERMINO;
            CARPETA_INV = req.body.CARPETA_INV;
            HORA_INICIO = req.body.HORA_INICIO;
            HORA_FIN = req.body.HORA_FIN;
            FECHA_CONVALIDACION = req.body.FECHA_CONVALIDACION;
            JUZGADO_ACREDITACION = req.body.JUZGADO_ACREDITACION;
            JUEZ_ACREDITACION = req.body.JUEZ_ACREDITACION;
            RAZON_EMISOR = req.body.RAZON_EMISOR;
            DELITO_TIPO = req.body.DELITO_TIPO;
            GRAVEDAD = req.body.GRAVEDAD;
           
                                   
                   
            db.query("INSERT INTO reg_ministerial_temporal   (ID_ALTERNA, ID_ESTADO_EMISOR, ID_EMISOR, ORDEN_MINISTERIAL,AGENCIA, TURNO, NO_MP, NOMBREMP, PATERNO_MP, MATERNO_MP, NO_CONVALIDACION_JUEZ, AV_PREVIA, FECHA_INICIO, FECHA_TERMINO, CARPETA_INV, HORA_INICIO, HORA_FIN, FECHA_CONVALIDACION, JUZGADO_ACREDITACION, JUEZ_ACREDITACION, RAZON_EMISOR, DELITO_TIPO, GRAVEDAD) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)",
                                                             [ID_ALTERNA, ID_ESTADO_EMISOR, ID_EMISOR, ORDEN_MINISTERIAL,AGENCIA, TURNO, NO_MP, NOMBREMP, PATERNO_MP, MATERNO_MP, NO_CONVALIDACION_JUEZ, AV_PREVIA, FECHA_INICIO, FECHA_TERMINO, CARPETA_INV, HORA_INICIO, HORA_FIN, FECHA_CONVALIDACION, JUZGADO_ACREDITACION, JUEZ_ACREDITACION, RAZON_EMISOR, DELITO_TIPO, GRAVEDAD],
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
     


             // colaboracion


      
        app.post ("/colaboracion", (req,res)=>{ 
            procesado=0;     
            id_fuente=10;        
        
            //  variables completas
            const  ID_ALTERNA             ="1"; 
            const  ID_ESTADO_EMISOR       ="1";
            const  ID_EMISOR              ="10";             //CATALOGO
                       
            NUMERO_COLABORACION= req.body.NUMERO_COLABORACION;
            NO_OFICIO= req.body.NO_OFICIO;
            FECHA_OFICIO= req.body.FECHA_OFICIO;
            FECHA_INICIO= req.body.FECHA_INICIO;
            FECHA_TERMINO= req.body.FECHA_TERMINO;
            ID_ESTADO_COLABORA= req.body.ID_ESTADO_COLABORA;
            ID_EMISOR_COLABORA= req.body.ID_EMISOR_COLABORA;
            ACUERDO_CONVENIO= req.body.ACUERDO_CONVENIO;
            RAZON_COLABORACION= req.body.RAZON_COLABORACION;
            GRAVEDAD_CASO= req.body.GRAVEDAD_CASO;
           
                                   
                   
            db.query("INSERT INTO reg_colaboracion_temporal   (ID_ALTERNA, ID_ESTADO_EMISOR, ID_EMISOR, NUMERO_COLABORACION, NO_OFICIO, FECHA_OFICIO, FECHA_INICIO, FECHA_TERMINO, ID_ESTADO_COLABORA, ID_EMISOR_COLABORA, ACUERDO_CONVENIO, RAZON_COLABORACION, GRAVEDAD_CASO) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?)",
                                                              [ID_ALTERNA, ID_ESTADO_EMISOR, ID_EMISOR, NUMERO_COLABORACION, NO_OFICIO, FECHA_OFICIO, FECHA_INICIO, FECHA_TERMINO, ID_ESTADO_COLABORA, ID_EMISOR_COLABORA, ACUERDO_CONVENIO, RAZON_COLABORACION, GRAVEDAD_CASO],
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