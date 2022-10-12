import React, { useContext } from "react";
import { CartContext } from "../../UseContext/CartContext";
import s from '../header.module.css'


export function CartItem ({id,price,name,images,quantity}) {

    const {removeItem} = useContext(CartContext)


    return (
        <>
            <div className={s.cartItemContainer}>
                <img src={images} alt="Product image"/>
                <div>
                    <p>{name} ({quantity})</p>
                </div>
                <p>{price}</p>
                {/* Remplazar por icono de tacho */}
                <button className={s.removeItem} onClick={()=>removeItem(id)}><i className="fa-solid fa-trash-can"></i></button>
            </div>
            <hr/>        
        </>
    )
}