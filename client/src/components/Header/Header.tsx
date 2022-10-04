import React from "react";
import { Link } from "react-router-dom";

export default function Header(){
    return(
        <ul>
            <Link to={"/"}> <li>Home</li> </Link>
            <ul>
                <Link to={"/products/all"}> <li>Products</li> </Link>
                <ul>
                    <Link to={"/products/hoodie"}> <li>Hoodies</li>    </Link>
                    <Link to={"/products/jersey"}> <li>Jerseys</li>    </Link>
                    <Link to={"/products/jean"}>   <li>Jeans</li>      </Link>
                    <Link to={"/products/jacket"}> <li>Jackets</li>    </Link>
                </ul>
            </ul>
            <Link to={"/aboutUs"}> <li>About us</li> </Link>
            <Link to={"/contact"}> <li>Contact</li> </Link>
        </ul>
    )
}