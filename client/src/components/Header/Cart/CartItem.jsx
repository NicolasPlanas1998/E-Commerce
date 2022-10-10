import React, { useContext } from "react";
import { CartContext } from "../../UseContext/CartContext";
import s from '../header.module.css'


export function CartItem ({id,price,name,images}) {

    const {removeItem} = useContext(CartContext)


    return (
        <>
            <div className={s.cartItemContainer}>
                <img src={images} alt="Product image"/>
                <p>{name} </p>
                <p>{price}</p>
                {/* Remplazar por icono de tacho */}
                <button onClick={()=>removeItem(id)}>X</button>
            </div>
            <hr/>        
        </>
    )
}