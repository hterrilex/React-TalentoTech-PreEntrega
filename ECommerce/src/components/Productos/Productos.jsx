import { useEffect, useState } from 'react'
import TarjetaProducto from '../TarjetaProducto/TarjetaProducto'
import style from "./Productos.module.css"
const Productos = () => {

    const [productos, setProductos] = useState([]);

    useEffect(() => {
        fetch('http://fakestoreapi.com/products')
        .then(res => res.json())
        .then(data => setProductos(data))
        .catch(error => console.log(error))
    }, [])

    if (!productos) {
        return <p>Cargando productos...</p>;
    }
    
    return (
        <div className={style.productos}>
            {
                productos.map(producto => (
                    <div key={producto.id}><TarjetaProducto id={producto.id} nombre={producto.title} precio={producto.price} img={producto.image} /></div>
                ))
            }
        </div>
    )
}

export default Productos