import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../../UseContext/CartContext";

export function CartResume(){
    const [totalPrice, setTotalPrice] = useState(0)
    const {cart, totalItems} = useContext(CartContext)

    useEffect(()=>{
        setTotalPrice(totalItems())
    },[cart])

    
    return(
        <>
            <h3>Total {totalPrice}</h3>
            <button>Finish purchase</button>
        </>
    )
}