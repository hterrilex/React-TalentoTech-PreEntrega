import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header/Header'
import Nav from './components/Navbar/Nav'
import Productos from './components/Productos/Productos'
import ProductoDetalle from './components/ProductoDetalle/ProductoDetalle'
import Inicio from './components/Inicio/Inicio'
import Footer from './components/Footer/Footer'
import Carrito from './components/Carrito/Carrito'

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/productos/:id" element={<ProductoDetalle />} />
        <Route path="/carrito" element={<Carrito />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
