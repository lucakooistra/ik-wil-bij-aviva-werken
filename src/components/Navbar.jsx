import React from "react";
import logo from "../images/logo.png";

export default function Navbar() {
    return (
            <div className="navbar">
                <img className="navbar__img" src={logo} alt="logo" />
                <div className="navbar__menu">
                    <ul className="navbar__ul">
                        <li className="navbar__li"> <a className="navbar__href" href="#"> Menu Item #1</a></li>
                        <li className="navbar__li"> <a className="navbar__href" href="#"> Menu Item #2</a></li>
                        <li className="navbar__li"> <a className="navbar__href" href="#"> Menu Item #3</a></li>
                        <li className="navbar__li"> <a className="navbar__href" href="#"> Menu Item #4</a></li>                    </ul>
                    <button className="navbar__button">Shopping Cart</button>
                </div>
            </div>
    )
}