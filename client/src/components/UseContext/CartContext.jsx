import React, { createContext, useState } from "react";


export const CartContext = createContext([])

export const CartProvider = ({children}) =>{
    const [cart,setCart] = useState([])

    const addItem =(product)=>{
        //arrglar tema cantidad
        setCart([...cart,product])
    }
    const removeItem = (id)=>{
        const newCart = cart.filter(el=> el.id !== id)
        setCart(newCart)
    }
    const totalItems = ()=>{
        if(cart.length === 1 ) return cart[0].price

        let total = cart.reduce((ac,el)=>{
            if(ac.price === undefined) return ac+ el.price
            return  ac.price + el.price 
        })
        return total
    }

    return (
        <CartContext.Provider value={{
            cart,
            addItem,
            removeItem,
            totalItems
        }}>
            {children}
        </CartContext.Provider>
    )
}