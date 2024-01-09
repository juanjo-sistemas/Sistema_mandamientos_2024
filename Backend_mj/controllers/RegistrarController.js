import RegistrarModel from "../models/RegistroModel.js"


//** metodos del crud   */


// Mostrar registros
// findAll es una funcion para traerse todos los registros
export const getAllRegistros = async (req, res)=> { 
  try {
     
       const registros = await RegistrarModel.findAll()
       res.json(registros)
  } catch (error) {
    res.json( {message: error.message} )
  }
}




//mostrar un registro
// traerse todos los registros mientras el id sea?... 
export const getRegistro = async(req, res)=> {
try {
    const registro = RegistrarModel.findAll({ where:{ id:req.params.id }  })
    
    res.json(registro)
} catch (error) {
    res.json( {message: error.message} )
}
}


//crear un registro
export const createRegistro = async(req, res)=>{
try {
    await RegistrarModel.create(req.body)
    res.json({
        "message":"Registro creado correctamente"
    })
    
} catch (error) {
    res.json( {message: error.message} )
}


}

//actualizar un registro

export const updateRegistro = async (req, res)=>{
try {
    await RegistrarModel.update(req.body, {
        where: {id: req.params.id}
    })    
    res.json({
        "message":"Registro actualizado correctamente"
    })
} catch (error) {
    res.json( {message: error.message} )
}
}


//eliminar un registro

export const deleteRegistro = async (req, res)=>{
   try { await RegistrarModel.destroy({ where: {id : req.params.id} })
   
   res.json({ "message" : "Registro eliminado correctamente"})
   
    
   } catch (error) {
     res.json( {message: error.message} )
   }


}