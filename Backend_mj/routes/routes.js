import express from 'express'
import { createDatosGenerales, createMovimientos, getAllCuantia, getAllDelitos, getAllEmisor, getAllEntidades, getAllFuero, getAllJuzgados, getAllMandato, getAllModalidadDurango, getAllMotCancelacion, getAllMunicipios, getAllMunicipiosId, getAllProcExtradicion, getAllSexo, getAllTipoProceso } from '../controllers/MandamientoController.js'

const router = express.Router()

//RUTAS PARA MOSTRAR
router.get('/emisores', getAllEmisor)
router.get('/entidades', getAllEntidades)
router.get('/municipios', getAllMunicipios)
router.get('/municipiosId/:id', getAllMunicipiosId)
router.get('/juzgados', getAllJuzgados)
router.get('/sexo', getAllSexo)
router.get('/cuantia', getAllCuantia)
router.get('/delitos', getAllDelitos)
router.get('/fuero', getAllFuero)
router.get('/mandato', getAllMandato)
router.get('/motcancelacion', getAllMotCancelacion)
router.get('/procextradicion', getAllProcExtradicion)
router.get('/tipoproceso', getAllTipoProceso)
router.get('/modalidad', getAllModalidadDurango)

//RUTAS PARA CREAR
router.post('/generales', createDatosGenerales)
router.post('/movimientos', createMovimientos)


export default router