import React, { createContext, useState } from "react";


export const CartContext = createContext([])

export const CartProvider = ({children}) =>{
    const [cart,setCart] = useState([])

    const addItem =({...detail})=>{
         setCart([...cart,detail])
        
    }
    const removeItem = (id)=>{
        const newCart = cart.filter(el=> el.id !== id)
        setCart(newCart)
    }
    const totalItems = ()=>{
        if(cart.length === 1 ) return cart[0].totalPrice

        let total = cart.reduce((ac,el)=>{
            if(ac.totalPrice === undefined) return ac+ el.totalPrice
            return  ac.totalPrice + el.totalPrice 
        },0)
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