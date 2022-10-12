import React, { useContext, useState } from "react";
import s from "../products.module.css"
import { CartContext } from "../../UseContext/CartContext";
import { Quantity } from "./Quantity";

export default function Item ({name,price,images,color,category,id,stock}){
    const {addItem,quantity,removeItem} = useContext(CartContext)
    const [itemInCart, setItemInCart] = useState(false)
    
    const handleCart = (product)=>{
        if(itemInCart){
            setItemInCart(false)
            removeItem(product.id)
        }
        else {
            setItemInCart(true)
            addItem(product)
        }
    }
    return(
        <div className={s.itemContainer}>
            <img className={s.productImg} src={images} alt={name}/>
            <div className={s.infoContainer}>
                <h4>{name}</h4>
                
                {/* Cuando arregle el db esto va a funcionar */}
                {/* {
                    color.map(el=>{
                        <input type="color" value={el}></input>
                    })*/}
                <p className={s.price}>$ {price}</p> 
                <Quantity stock={stock}/>
                    {
                        itemInCart 
                        ?
                        <button onClick={()=>handleCart({ id,name,price,images})} className={`${s.btnAddToCart} ${s.added}`}>
                            Added
                        </button> 
                        :
                        <button onClick={()=>handleCart({ id,name,price,images,quantity})} className={`${s.btnAddToCart} ${s.toAdd}`}>
                            Add To Cart
                        </button> 
                    }
            </div>

        </div>
    )
}
