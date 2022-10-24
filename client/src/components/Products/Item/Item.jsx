import React, { useContext, useState } from "react";
import s from "../products.module.css"
import {useDispatch} from "react-redux"
import { Quantity } from "./Quantity";
import { updateCart } from "../../../redux/actions";

export default function Item ({name,price,images,color,category,id,stock}){
    const [itemInCart, setItemInCart] = useState(false)
    const dispatch = useDispatch()
    
    const handleCart = (id,detail)=>{
        if(itemInCart){
            // Remplazar por que me abra el carrito y me muestre todo
        }
        else {
            setItemInCart(true)
            let quantity = JSON.parse(localStorage.getItem(id)) || 1
            let totalPrice = quantity*price
            let detailProduct = {...detail,quantity,totalPrice }
            // addItem(detailProduct)
            dispatch(updateCart(detailProduct))
            localStorage.removeItem(id);
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
                <Quantity id={id} stock={stock}/>
                    {
                        itemInCart 
                        ?
                        <button className={`${s.btnAddToCart} ${s.added}`}>
                            Added
                        </button> 
                        :
                        <button onClick={()=>handleCart(id, {id,name,price,images, quantity:1})} className={`${s.btnAddToCart} ${s.toAdd}`}>
                            Add To Cart
                        </button> 
                    }
            </div>

        </div>
    )
}
