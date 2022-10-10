import React from "react";
import s from './header.module.css'
import { Link } from "react-router-dom";
import Cart from "./Cart/Cart";

export default function Header(){
    return(
        <div className={s.header}>
            <ul className={s.navBar}>
                <Link className={s.Link} to={"/"}> <li>Home</li> </Link>
                <ul className={s.submenu}>
                    <Link className={s.Link} to={"/products/all"}> <li>Products</li> </Link>
                    <ul className={s.submenuDeploy}>
                        <Link className={s.Link} to={"/products/hoodie"}> <li>Hoodies</li>    </Link>
                        <Link className={s.Link} to={"/products/shirt"}> <li>T-shirts</li>    </Link>
                        <Link className={s.Link} to={"/products/jean"}>   <li>Jeans</li>      </Link>
                        <Link className={s.Link} to={"/products/jacket"}> <li>Jackets</li>    </Link>
                    </ul>
                </ul>
                <Link className={s.Link} to={"/aboutUs"}> <li>About us</li> </Link>
                <Link className={s.Link} to={"/contact"}> <li>Contact</li> </Link>
            </ul> 
            <div className={s.cart}>
                <Cart/>
            </div>
        </div>
    )
}