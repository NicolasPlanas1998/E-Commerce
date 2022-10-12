import React, { useContext, useState } from "react";
import { CartContext } from "../../UseContext/CartContext";
import s from "../products.module.css"

export function Quantity({stock}){
    const {setQuantity,quantity} = useContext(CartContext)
    const [itemQuantity, setItemQuantity]=useState(1)


    function handleQuntity(operation){
        if(operation === "+"){
            if(quantity < stock) setQuantity(quantity+1)
        }else{
            if(quantity !== 1) setQuantity(quantity-1)            
        }

    }
    return(
        <div className={s.containerQuantity}>
            <button className={s.btnQuantity} onClick={()=>handleQuntity("-")}><i className="fa-solid fa-minus"></i></button>
            <span className={s.quantityNumber}>{itemQuantity}</span>
            <button className={s.btnQuantity} onClick={()=>handleQuntity("+")}><i className="fa-sharp fa-solid fa-plus"></i></button>
        </div>
    )
}