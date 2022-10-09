import React, { useState } from "react";
import cartImg from "../../../assets/shopping-cart.png"
import cartAddedImg from "../../../assets/added.png"
import s from "../products.module.css"

export default function Item ({name,price,images,color,category}){
    const [cart, setCart] = useState(false)
    
    const handleCart = ()=>{
        if(cart)setCart(false)
        else setCart(true)
    }
    return(
        <div className={s.itemContainer}>
            <h2>{name}</h2>{
                cart
                ?
                <img className={s.cartImg} onClick={()=>handleCart()}alt="cart-added" src={cartAddedImg}/>
                :
                <img className={s.cartImg} onClick={()=>handleCart()}a alt="cart" src={cartImg}/>
            }
            <img className={s.productImg} src={images} alt={name}/>
            {/* Cuando arregle el db esto va a funcionar */}
            {/* {
            color.map(el=>{
                <input type="color" value={el}></input>
            })*/}
            <p>{price}</p>

        </div>
    )
}
