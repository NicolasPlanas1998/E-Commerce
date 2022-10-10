import React, { useContext, useState } from "react";
import cartImg from "../../../assets/shopping-cart.png"
import cartAddedImg from "../../../assets/added.png"
import s from "../products.module.css"
import { CartContext } from "../../UseContext/CartContext";

export default function Item ({name,price,images,color,category,id}){
    const {addItem,cart,removeItem} = useContext(CartContext)
    const [image, setImage] = useState(false)
    
    const handleCart = (product)=>{
        if(image){
            setImage(false)
            removeItem(product.id)
        }
        else {
            setImage(true)
            addItem(product)
        }
    }
    return(
        <div className={s.itemContainer}>
            <h2>{name}</h2>{
                image
                ?
                <img  
                    onClick={()=>handleCart({
                        id
                    })}   
                    alt="cart-added" src={cartAddedImg} className={s.cartImg}/>
                :
                <img 
                    onClick={()=>handleCart({
                        id,
                        name,
                        price,
                        images
                    })} 
                    alt="cart" src={cartImg} className={s.cartImg} />
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
