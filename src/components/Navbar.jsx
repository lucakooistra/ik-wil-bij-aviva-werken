import React from "react";
import logo from "../images/logo.png";

export default function Navbar() {
    return (
            <div className="home-navbar">
                <img className="home-navbar__img" src={logo} alt="logo" />
                <div className="home-navbar__menu">
                    <ul className="home-navbar__ul">
                        <li className="home-navbar__li"> <a className="home-navbar__href" href="#"> Menu Item #1</a></li>
                        <li className="home-navbar__li"> <a className="home-navbar__href" href="#"> Menu Item #2</a></li>
                        <li className="home-navbar__li"> <a className="home-navbar__href" href="#"> Menu Item #3</a></li>
                        <li className="home-navbar__li"> <a className="home-navbar__href" href="#"> Menu Item #4</a></li>                    </ul>
                    <button className="home-navbar__button">Shopping Cart</button>
                </div>
            </div>
    )
}