import React from "react";
import { useContext } from "react";
import { CarritoContext } from "../../context/CarritoContext";
import { Button } from "react-bootstrap";
import style from "./Carrito.module.css"

const Carrito = () => {

    const { carrito } = useContext(CarritoContext);
    const { vaciarCarrito } = useContext(CarritoContext);
    const { eliminarDelCarrito } = useContext(CarritoContext);

    if (carrito.length === 0) {
        return <p className={style.sinProductos}>No hay productos en el carrito</p>;
    }

    return (
        <div>
            <h1>Carrito</h1>
            <tr className={style.tabla}>
                <th className={style.cantidad}>Cantidad</th>
                <th className={style.producto}>Producto</th>
                <th className={style.precio}>Precio</th>
                <th className={style.accion}>Accion</th>
            </tr>
            {carrito.map((producto) => (
                <tr key={producto.id} className={style.tabla}>
                    <td className={style.cantidad}>{producto.cantidad}</td>
                    <td className={style.producto}>{producto.nombre}</td>
                    <td className={style.precio}>${((producto.precio)*producto.cantidad).toFixed(2)}</td>
                    <td><Button variant="danger" onClick={() => eliminarDelCarrito(producto.id)}>Eliminar</Button></td>
                </tr>
            ))}
            <h3>Total: ${carrito.reduce((total, producto) => total + (producto.precio * producto.cantidad), 0).toFixed(2)}</h3>
            <section className={style.botonesCompra}>
                <Button variant="danger" onClick={vaciarCarrito}>Vaciar Carrito</Button>
                <Button variant="success" onClick={() => {alert("Compra realizada con exito"); vaciarCarrito()} }>Comprar</Button>
            </section>
        </div>
    );
};

export default Carrito;