import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.css';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Alta from "./componente/registro/Registrar"
import Ver from "./componente/ver_registros/Ver_registro"
import Editar from "./componente/modificar/Editar"
import Delitos from "./componente/registro/Delitos"
import Proceso from "./componente/registro/Proceso"
import Inicio from "./componente/registro/Inicio_registrar"

import Menu_inter from "./componente/registro/Menu_intermedio"
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <BrowserRouter>
            <Routes>
            
            <Route path="/" element={<Alta/>}></Route>
            <Route path="/Ver" element={<Ver/>}></Route>
            <Route path="/Editar" element={<Editar/>}></Route>
            <Route path="/Inicio" element={<Inicio/>}></Route>
            <Route path="/Delitos" element={<Delitos/>}></Route>
            <Route path="/Proceso" element={<Proceso/>}></Route>
            <Route path="/Minter" element={<Menu_inter/>}></Route>
            
             

          </Routes>
       </BrowserRouter>
     






    </>
  )
}

export default App
