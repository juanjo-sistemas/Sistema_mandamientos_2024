import { DataTypes } from "sequelize";
import db from "../database/db.js";

//TABLA DATOS_GENERALES
const datos_generales = db.define('datos_generales', {
    ID_ALTERNA: { type: DataTypes.INTEGER, primaryKey: true },
    ID_ESTADO_EMISOR: { type: DataTypes.INTEGER },
    ID_EMISOR: { type: DataTypes.INTEGER },
    ID_MUNICIPIO: { type: DataTypes.INTEGER},
    ID_PAIS: { type: DataTypes.INTEGER},
    NO_MANDATO: { type: DataTypes.STRING },
    NOMBRE: { type: DataTypes.STRING },
    APATERNO: { type: DataTypes.STRING },
    AMATERNO: { type: DataTypes.STRING },
    ALIAS: { type: DataTypes.STRING},
    EDAD: { type: DataTypes.INTEGER},
    ESTATURA: { type: DataTypes.INTEGER},
    PESO: { type: DataTypes.INTEGER},
    ID_SEXO: { type: DataTypes.STRING },
    ID_USO_ANTEOJOS: { type: DataTypes.STRING},
    ID_NACIONALIDAD: { type: DataTypes.INTEGER},
    ID_ESTADO_JUZGADO: { type: DataTypes.INTEGER},
    ID_JUZGADO: { type: DataTypes.STRING },
    NO_CAUSA: { type: DataTypes.STRING },
    OFICIO_JUZGADO: { type: DataTypes.STRING },
    FECHA_OFICIO: { type: DataTypes.DATE },
    ID_TIPO_CUANTIA: { type: DataTypes.STRING },
}, {
    timestamps: false,
    tableName: 'datos_generales', // Especifica el nombre de la tabla
});

//TABLA MOVIMIENTOS
const movimientos = db.define('movimientos', {
    ID_ALTERNA: { type: DataTypes.INTEGER, primaryKey: true },
    ID_ESTADO_EMISOR: { type: DataTypes.INTEGER },
    ID_EMISOR: { type: DataTypes.INTEGER },
    LLAVE: { type: DataTypes.STRING },
    OPERACION: { type: DataTypes.STRING },
    ESTATUS: { type: DataTypes.DECIMAL },
    FECHA_ACTUALIZACION: { type: DataTypes.DATE },
    HORA: { type: DataTypes.STRING },
    TIPO_INFORMACION: { type: DataTypes.INTEGER },
    PROCESADO: { type: DataTypes.INTEGER },
    ID_BLOQUE_FUNCIONAL: { type: DataTypes.DECIMAL },
    LLAVE_1: { type: DataTypes.DECIMAL },
    LLAVE_2: { type: DataTypes.DECIMAL },
}, {
    timestamps: false,   
    tableName: 'movimientos', // Especifica el nombre de la tabla
});

//TABLA DELITOS PARA INSERTAR

//TABLA EMISOR
const cat_emisor = db.define('cat_emisor', {
    ID_INSTITUCION: { type: DataTypes.INTEGER, primaryKey: true },
    ID_EMISOR: { type: DataTypes.INTEGER },
    TIPO: { type: DataTypes.STRING },
}, {
    timestamps: false,
    tableName: 'cat_emisor', // Especifica el nombre de la tabla
});


//TABLA ENTIDADES
const cat_entidades = db.define('cat_entidades', {
    ID_ESTADO: { type: DataTypes.INTEGER, primaryKey: true },
    ENTIDAD: { type: DataTypes.STRING },
}, {
    // Indicate that you don't want createdAt and updatedAt
    timestamps: false,
});

//TABLA ENTIDADES
const cat_municipios = db.define('cat_municipios', {
    CLAVE_EDO: { type: DataTypes.INTEGER },
    CLAVE_MPIO: { type: DataTypes.INTEGER, primaryKey: true }, 
    MUNICIPIO: { type: DataTypes.STRING },
}, {
    // Indicate that you don't want createdAt and updatedAt
    timestamps: false,
});

// Establecer la relación de clave foránea
cat_municipios.belongsTo(cat_entidades, {
    foreignKey: 'CLAVE_EDO', // Nombre de la columna en la tabla municipios que será la clave foránea
    targetKey: 'ID_ESTADO', // Nombre de la columna en la tabla entidades que será la clave primaria referenciada
});

// Opcionalmente, puedes establecer cat_entidades.hasMany(cat_municipios) si quieres también una relación en el otro sentido



//TABLA JUZGADOS
const cat_juzgados = db.define('cat_juzgados', {
    ID_JUZGADO: { type: DataTypes.INTEGER, primaryKey: true },
    ID_ESTADO: { type: DataTypes.INTEGER },
    CLAVE_JUZGADO: { type: DataTypes.INTEGER },
    SIGLA_JUZGADO: { type: DataTypes.STRING },
    DESCRIP_JUZGADO: { type: DataTypes.STRING },
}, {
    // Indicate that you don't want createdAt and updatedAt
    timestamps: false,
});

//TABLA SEXO
const cat_sexo = db.define('cat_sexo', {
    CLAVE: { type: DataTypes.STRING, primaryKey: true },
    TIPO: { type: DataTypes.STRING },
}, {
    // Indicate that you don't want createdAt and updatedAt
    timestamps: false,
    tableName: 'cat_sexo', // Especifica el nombre de la tabla
});

//TABLA TIPO_CUANTIA
const cat_tipo_cuantia = db.define('cat_tipo_cuantia', {
    CLAVE: { type: DataTypes.INTEGER, primaryKey: true },
    TIPO: { type: DataTypes.STRING },
}, {
    // Indicate that you don't want createdAt and updatedAt
    timestamps: false,
    tableName: 'cat_tipo_cuantia', // Especifica el nombre de la tabla
});

//TABLA DELITOS
const cat_delitos = db.define('cat_delitos_durango', {
    ID_DELITO: { type: DataTypes.INTEGER },
    ID_ESTADO: { type: DataTypes.INTEGER },
    FUERO: { type: DataTypes.STRING },
    CLAVE_DELITO: { type: DataTypes.INTEGER, primaryKey: true},
    SIGLA_DELITO: { type: DataTypes.INTEGER},
    DESCRIP_DELITO: { type: DataTypes.STRING},
}, {
    // Indicate that you don't want createdAt and updatedAt
    timestamps: false,
    tableName: 'cat_delitos_durango', // Especifica el nombre de la tabla
});

//TABLA FUERO
const cat_fuero = db.define('cat_fuero', {
    CLAVE: { type: DataTypes.INTEGER, primaryKey: true },
    TIPO: { type: DataTypes.STRING }
}, {
    // Indicate that you don't want createdAt and updatedAt
    timestamps: false,
    tableName: 'cat_fuero', // Especifica el nombre de la tabla
});

//TABLA TIPO_MANDATO
const cat_tipo_mandato = db.define('cat_tipo_mandato', {
    CLAVE: { type: DataTypes.INTEGER, primaryKey: true },
    TIPO: { type: DataTypes.STRING }
}, {
    // Indicate that you don't want createdAt and updatedAt
    timestamps: false,
    tableName: 'cat_tipo_mandato', // Especifica el nombre de la tabla
});

//TABLA MOT_CANCELACION
const cat_mot_cancelacion = db.define('cat_mot_cancelacion', {
    CLAVE: { type: DataTypes.INTEGER, primaryKey: true },
    TIPO: { type: DataTypes.STRING }
}, {
    // Indicate that you don't want createdAt and updatedAt
    timestamps: false,
    tableName: 'cat_mot_cancelacion', // Especifica el nombre de la tabla sfdfgdfgdfgdg
});

//TABLA PROC_EXTRAORDINARIO
const cat_proc_extradicion = db.define('cat_proc_extradicion', {
    CLAVE: { type: DataTypes.INTEGER, primaryKey: true },
    TIPO: { type: DataTypes.STRING }
}, {
    // Indicate that you don't want createdAt and updatedAt
    timestamps: false,
    tableName: 'cat_proc_extradicion', // Especifica el nombre de la tabla
});

//TABLA TIPO_PROCESO
const cat_tipo_proceso = db.define('cat_tipo_proceso', {
    CLAVE: { type: DataTypes.INTEGER, primaryKey: true },
    TIPO: { type: DataTypes.STRING }
}, {
    // Indicate that you don't want createdAt and updatedAt. SOY JUANJO
    timestamps: false,
    tableName: 'cat_tipo_proceso', // Especifica el nombre de la tabla
});

//TABLA MODALIDAD_DURANGO
const cat_modalidad_durango = db.define('cat_modalidad_durango', {
    ID_MODALIDAD: { type: DataTypes.INTEGER, primaryKey: true },
    ID_DELITO: { type: DataTypes.INTEGER },
    SIGLA_MODALIDAD: { type: DataTypes.INTEGER},
    DESCRIP_MODALIDAD: { type: DataTypes.STRING},
    ID_ESTADO: { type: DataTypes.INTEGER}
}, {
    // Indicate that you don't want createdAt and updatedAt. SOY JUANJO
    timestamps: false,
    tableName: 'cat_modalidad_durango', // Especifica el nombre de la tabla
});




export { datos_generales, movimientos, cat_emisor, cat_modalidad_durango, cat_entidades, cat_juzgados, cat_sexo, cat_tipo_cuantia, cat_delitos, cat_fuero, cat_tipo_mandato, cat_mot_cancelacion, cat_proc_extradicion, cat_tipo_proceso, cat_municipios }