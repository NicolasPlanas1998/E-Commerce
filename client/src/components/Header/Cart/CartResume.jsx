import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../../UseContext/CartContext";

export function CartResume(){
    const [total, setTotal] = useState(0)
    const {cart, totalItems} = useContext(CartContext)

    useEffect(()=>{
        setTotal(totalItems())
    },[cart])
    
    return(
        <>
            <h3>Total {total}</h3>
            <button>Finish purchase</button>
        </>
    )
}
// REEMPLAZAR ESTO POR CODIGO ARRIBA, 
// const totalItems = ()=>{
//     if(cart.length === 1 ) return cart[0].totalPrice

//     let total = cart.reduce((ac,el)=>{
//         if(ac.totalPrice === undefined) return ac+ el.totalPrice
//         return  ac.totalPrice + el.totalPrice 
//     },0)
//     return total
// }