import React from "react";
import style from "./Navbar.module.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

const Nav = () => {
    return (
            <ul className="nav nav-tabs">
                <li className="nav-item">
                    <Link to = "/" className="nav-link">Inicio</Link>
                </li>
                <li className="nav-item">
                    <Link to = "/Productos" className="nav-link">Productos</Link>
                </li>
                <li className="nav-item">
                    <Link to = "/Carrito" className="nav-link"><FontAwesomeIcon icon={faCartShopping} style={{color: "#4c76ffff",}} className={style.iconCarrito}/></Link>
                </li>
            </ul>
    );
}

export default Nav