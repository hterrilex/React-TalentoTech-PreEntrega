# Carrito de Compras con React Pre Entrega

## 📝 Descripción del Proyecto

Este proyecto es una implementación de un **Carrito de Compras** desarrollado con **React.js**. 

## ✨ Características Principales

* **Estado Global Centralizado:** Uso de `createContext` y `useContext` para manejar el estado del carrito.
* **Gestión de Cantidades:** Al agregar un producto existente, se incrementa su `cantidad` en lugar de añadir una entrada duplicada.
* **Eliminación Unidad por Unidad:** Función para decrementar la cantidad de un ítem y eliminarlo completamente si la cantidad llega a cero.
* **Cálculos Dinámicos:** Muestra la cantidad total de productos en un contador (badge) del icono del carrito.
* **Notificaciones:** Sistema de alertas para confirmar al usuario cuando se agrega un producto.
* **Vaciar Carrito:** Función para vaciar el carrito a cero.

## 🛠️ Tecnologías Utilizadas

* **React:** Para la construcción de la interfaz de usuario y la gestión de componentes.
* **Context API & Hooks (`useState`, `useContext`):** Para el manejo del estado global del carrito.
* **JavaScript (ES6+):** Lógica de las funciones del carrito (`.map()`, `.find()`, `.filter()`).
* **CSS / Bootstrap:** (Si aplicaste clases como `btn btn-warning`).

## 🚀 Instalación y Ejecución

### Prerrequisitos

Instalar [Node.js](https://nodejs.org/) y [npm](https://www.npmjs.com/) (o yarn/pnpm).

### Pasos

1.  **Clonar el repositorio** (si está en Git):

    ```bash
    git clone [URL_DE_TU_REPOSITORIO]
    cd nombre-del-proyecto
    ```

2.  **Instalar dependencias:**

    ```bash
    npm install
    # o yarn install
    ```

3.  **Ejecutar la aplicación:**

    ```bash
    npm start
    # o yarn start
    ```

La aplicación se abrirá en tu navegador en [http://localhost:3000](http://localhost:3000) (o el puerto configurado).

## 📂 Estructura del Contexto

La lógica principal se encuentra encapsulada en un único archivo de Contexto:

### `src/context/CarritoContext.jsx`

| Elemento | Descripción |
| :--- | :--- |
| `CarritoContext` | Objeto Contexto creado con `createContext()`. |
| `CarritoProvider` | Componente que envuelve la aplicación y provee el estado. |
| `carrito` | Estado (`useState`) que almacena la lista de productos y sus cantidades. |
| `agregarAlCarrito(prod)` | Añade el producto o incrementa la cantidad. **Dispara la alerta.** |
| `eliminarUnaUnidad(id)` | Decrementa la cantidad o elimina el ítem si llega a 0. |
| `vaciarCarrito()` | Resetea el array `carrito` a `[]`. |
| `cantidadTotal` | Valor calculado que suma las cantidades para el contador del ícono. |
| `alertaMensaje` | Estado para mostrar notificaciones al usuario. |

## 💡 Uso en Componentes

Cualquier componente puede acceder al estado y funciones utilizando el hook `useContext`:

```javascript
import { useContext } from "react";
import { CarritoContext } from "./context/CarritoContext";

const { carrito, agregarAlCarrito, cantidadTotal } = useContext(CarritoContext);
