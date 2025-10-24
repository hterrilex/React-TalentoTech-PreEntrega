import React from "react";
import { Link } from "react-router-dom";
import style from "./Header.module.css";
import Nav from "../../components/Navbar/Nav";

const Header = () => {
    return (
        <>
            <header className={style.header}>
                <Link to = "/"><img src="../src/assets/img/logo.png" alt="Logo"/></Link>
            </header>
            <Nav />
        </>
    );
};

export default Header;