import { createContext, useState } from "react";

export const CarritoContext = createContext();

export const CarritoProvider = ({ children }) => {
    const [carrito, setCarrito] = useState([]);

    const agregarAlCarrito = (producto) => {
        const productoExistente = carrito.find(item => item.id === producto.id);

        if (productoExistente) {
            setCarrito(
                carrito.map(item =>
                    item.id === producto.id ? { ...item, cantidad: item.cantidad + 1 } : item
                )
            )
        }else{
            setCarrito([...carrito, { ...producto, cantidad: 1 }]);
        }
    }

    const vaciarCarrito = () => {setCarrito([]);}

    const eliminarDelCarrito = (productoId) => {
        setCarrito(carrito.filter(item => item.id !== productoId));
    }

    return(
        <CarritoContext.Provider value={{carrito, agregarAlCarrito, vaciarCarrito, eliminarDelCarrito}}>
            {children}
        </CarritoContext.Provider>
    );
}