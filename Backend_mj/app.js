import express from 'express'
import cors from 'cors'
//Importamos conexion a bd
import db from './database/db.js'
//Importamos enrutador
import router from './routes/routes.js'

const app = express()

app.use(cors())
app.use(express.json())
app.use('/mandamiento', router)

try {
    await db.authenticate()
    console.log('Conexion exitosa a la base de datos')
} catch (error) {
    console.log(`Error en conexion a bd: ${error}`)
}

app.get('/', (req, res) => {
    res.send('Servidor corriendo ')
})

app.listen(8000, () => {
    console.log('Server running in http://localhost:8000/')
})