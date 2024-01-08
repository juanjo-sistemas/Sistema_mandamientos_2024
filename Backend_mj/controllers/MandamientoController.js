
//Importamos el modelo
import { datos_generales, cat_emisor, cat_entidades, cat_juzgados, cat_sexo, cat_tipo_cuantia, cat_delitos, cat_fuero, cat_tipo_mandato, cat_mot_cancelacion, cat_proc_extradicion, cat_tipo_proceso, cat_municipios, cat_modalidad_durango, movimientos } from "../models/MandamientoModel.js"
// Modifica tu controlador para convertir la fecha antes de crear el registro
import { Op } from 'sequelize';
// ** METODOS PARA EL CRUD ** //

//CARGAR EMISOR
export const getAllEmisor = async (req, res) => {
    try {
        const cat_emisores = await cat_emisor.findAll()
        res.json(cat_emisores)
    } catch (error) {
        res.json( {message: error.message} )
    }
}

//CARGAR ENTIDADES
export const getAllEntidades = async (req, res) => {
    try {
        const entidad = await cat_entidades.findAll()
        res.json(entidad)
    } catch (error) {
        res.json( {message: error.message} )
    }
}

//CARGAR MUNICIPIOS
export const getAllMunicipios = async (req, res) => {
    try {
        const municipios = await cat_municipios.findAll()
        res.json(municipios)
    } catch (error) {
        res.json( {message: error.message} )
    }
}

//CARGAR MUNICIPIOS EN BASE AL ID
export const getAllMunicipiosId = async (req, res) => {
    try {
        const estadoId = req.params;

        // Consulta modificada para filtrar por el estado con ID 1
        const municipios = await cat_municipios.findAll({
            include: [{
                model: cat_entidades,
                where: { ID_ESTADO: req.params.id }
            }],
        });

        res.json(municipios);
    } catch (error) {
        res.json({ message: error.message });
    }
}

//CARGAR JUZGADOS
export const getAllJuzgados = async (req, res) => {
    try {
        const juzgados = await cat_juzgados.findAll()
        res.json(juzgados)
    } catch (error) {
        res.json( {message: error.message} )
    }
}

//CARGAR SEXO
export const getAllSexo = async (req, res) => {
    try {
        const sexo = await cat_sexo.findAll()
        res.json(sexo)
    } catch (error) {
        res.json( {message: error.message} )
    }
}

//CARGAR TIPO_CUANTIA
export const getAllCuantia = async (req, res) => {
    try {
        const tipo_cuantia = await cat_tipo_cuantia.findAll()
        res.json(tipo_cuantia)
    } catch (error) {
        res.json( {message: error.message} )
    }
}

//CARGAR DELITOS
export const getAllDelitos = async (req, res) => {
    try {
        const delitos = await cat_delitos.findAll()
        res.json(delitos)
    } catch (error) {
        res.json( {message: error.message} )
    }
}

//CARGAR FUERO
export const getAllFuero = async (req, res) => {
    try {
        const fuero = await cat_fuero.findAll()
        res.json(fuero)
    } catch (error) {
        res.json( {message: error.message} )
    }
}

//CARGAR TIPO_MANDATO
export const getAllMandato = async (req, res) => {
    try {
        const mandato = await cat_tipo_mandato.findAll()
        res.json(mandato)
    } catch (error) {
        res.json( {message: error.message} )
    }
}

//CARGAR MOT_CANCELACION
export const getAllMotCancelacion = async (req, res) => {
    try {
        const mot_cancelacion = await cat_mot_cancelacion.findAll()
        res.json(mot_cancelacion)
    } catch (error) {
        res.json( {message: error.message} )
    }
}

//CARGAR PROC_EXTRAORDINARIO
export const getAllProcExtradicion = async (req, res) => {
    try {
        const proc_extradicion = await cat_proc_extradicion.findAll()
        res.json(proc_extradicion)
    } catch (error) {
        res.json( {message: error.message} )
    }
}

//CARGAR TIPO_PROCESO
export const getAllTipoProceso = async (req, res) => {
    try {
        const tipo_proceso = await cat_tipo_proceso.findAll()
        res.json(tipo_proceso)
    } catch (error) {
        res.json( {message: error.message} )
    }
}

//CARGAR MODALIDAD_DURANGO
export const getAllModalidadDurango = async (req, res) => {
    try {
        const modalidad_durango = await cat_modalidad_durango.findAll()
        res.json(modalidad_durango)
    } catch (error) {
        res.json( {message: error.message} )
    }
}

//CREAR DATOS_GENERALES
export const createDatosGenerales = async (req, res) => {
    try {
        // Convierte la fecha al formato ISO 8601
        req.body.FECHA_OFICIO = new Date(req.body.FECHA_OFICIO);

        await datos_generales.create(req.body);
        res.json({
            "message": "Registro creado con éxito!"
        });
    } catch (error) {
        res.json({ message: error.message });
    }
};

//CREAR MOVIMIENTOS
export const createMovimientos = async (req, res) => {
    try {
        // Convierte la fecha al formato ISO 8601
        req.body.FECHA_ACTUALIZACION = new Date(req.body.FECHA_ACTUALIZACION);

        await movimientos.create(req.body);
        res.json({
            "message": "Registro creado con éxito!"
        });
    } catch (error) {
        res.json({ message: error.message });
    }
};