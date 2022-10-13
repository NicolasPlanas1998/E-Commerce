import React, { useContext, useState } from "react";

import s from "../products.module.css"

export function Quantity({stock,id}){
    // const {addItem} = useContext(CartContext)
    const [itemQuantity, setItemQuantity]=useState(1)

    function handleQuntity(operation){
        if(operation === "+"){
            if(itemQuantity < stock) {
                let quantity = itemQuantity+1
                localStorage.setItem(id, JSON.stringify(quantity));
                setItemQuantity(quantity)
            }
        }else{
            if(itemQuantity !== 1) {
                let quantity = itemQuantity-1
                localStorage.setItem(id, JSON.stringify(quantity));
                setItemQuantity(quantity)
            }    
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