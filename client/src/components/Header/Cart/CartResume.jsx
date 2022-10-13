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