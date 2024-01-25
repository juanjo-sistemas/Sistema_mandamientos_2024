import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.css';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Alta from "./componente/registro/Registrar"
import Ver from "./componente/ver_registros/Ver_registro"

import Delitos from "./componente/registro/Delitos"
import Proceso from "./componente/registro/Proceso"
import Inicio from "./componente/registro/Inicio_registrar"
import Domicilio from "./componente/registro/Domicilio"
import Menu_inter from "./componente/registro/Menu_intermedio"
import Prueba from "./componente/registro/RegistroEj"
import Otro_nomb from "./componente/registro/Otros_nombres"
import Amparos from "./componente/registro/Amparos"
import Ministerial from "./componente/registro/Ministerial"
import Colaboracion from "./componente/registro/Colaboracion"
import Imagen from "./componente/registro/Imagen"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <BrowserRouter>
            <Routes>            
            <Route path="/" element={<Alta/>}></Route>
            <Route path="/Ver" element={<Ver/>}></Route>
            <Route path="/o_nombre" element={<Otro_nomb/>}></Route>
            <Route path="/Inicio" element={<Inicio/>}></Route>
            <Route path="/Delitos" element={<Delitos/>}></Route>
            <Route path="/Proceso" element={<Proceso/>}></Route>
            <Route path="/Domicilio" element={<Domicilio/>}></Route>
            <Route path="/Minter" element={<Menu_inter/>}></Route>
            <Route path="/amparos" element={<Amparos/>}></Route>
            <Route path="/ministerial" element={<Ministerial/>}></Route>
            <Route path="/colaboracion" element={<Colaboracion/>}></Route>
            <Route path="/Prueba" element={<Prueba/>}></Route>
            <Route path="/imagen" element={<Imagen/>}></Route>

          </Routes>
       </BrowserRouter>
     






    </>
  )
}

export default App
