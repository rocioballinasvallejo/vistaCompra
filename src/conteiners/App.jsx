import { BrowserRouter, Routes, Route } from "react-router-dom";
import FiltrarPorPrecio from "../pages/FiltrarPorPrecio";
import Carrito from "../pages/Carrito"

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<FiltrarPorPrecio />} />
                <Route path="/Carrito" element={<Carrito/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;