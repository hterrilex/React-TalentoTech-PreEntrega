import style from "./Inicio.module.css"
import { useEffect, useState } from "react"
import TarjetaProducto from "../TarjetaProducto/TarjetaProducto"

const Inicio = () => {

    const [productos, setProductos] = useState([]);

    useEffect(() => {
        fetch('http://fakestoreapi.com/products')
        .then(res => res.json())
        .then(data => setProductos(data))
    }, [])

    return (
        <>
            <section className={style.inicio}>
                <h1>Bienvenido</h1>
                
            </section>
        </>
    )
}

export default Inicio