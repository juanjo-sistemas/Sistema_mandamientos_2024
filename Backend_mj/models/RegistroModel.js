import { DataTypes } from "sequelize";
import db from "../database/db.js";


const  RegistrarModel = db.define('registro', {
     instituto: {type: DataTypes.STRING},
     mandato: {type: DataTypes.STRING},
     estatus: {type: DataTypes.STRING},
     nombre: {type: DataTypes.STRING},
     apaterno: {type: DataTypes.STRING},
     alias: {type: DataTypes.STRING},
     edad: {type: DataTypes.STRING},
     sexo: {type: DataTypes.STRING},
     estatura: {type: DataTypes.STRING},
     pepso: {type: DataTypes.STRING},
     juzgado: {type: DataTypes.STRING},
     oficio: {type: DataTypes.STRING},
     foficio: {type: DataTypes.STRING},
     causa: {type: DataTypes.STRING},



})

export default RegistrarModel

