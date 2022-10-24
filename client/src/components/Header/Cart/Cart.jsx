import React, { useRef, useState } from "react";
import cartIcon from "../../../assets/cartIcon.png"
import s from "../header.module.css"
import {useSelector} from "react-redux"
import { CartItem } from "./CartItem";
import { CartResume } from "./CartResume";

export default function Cart (){
    const [modalCart, setModalCart ] = useState(false)
    const cart = useSelector(state=>state.cart)
    const wrapperRef = useRef()

    function handleClose(e){
        if (e.target.contains(wrapperRef.current) ){
            //Clicking outside the div
            setModalCart(false)
        } else {
            //Clicking inside the div
            setModalCart(true)
          }
    }
    return( 
        <>
            <img  className={s.cartIcon} src={cartIcon} alt="cart Icon" onClick={()=> setModalCart(true)}/>
            <span>{cart.length}</span>
            {modalCart && 
            <div className={s.modalBg} ref={wrapperRef} onClick={(e)=>handleClose(e)} >
                <div className={s.modalCart} >
                    <h3>Cart</h3>
                        {cart.length
                        ?
                        cart.map(el=>(
                            <CartItem 
                                key={el.id}
                                id={el.id}    
                                price={el.price}
                                totalPrice= {el.totalPrice}
                                images={el.images}
                                name={el.name}
                                quantity={el.quantity}
                            />))
                        :
                        <h3>Empty cart</h3>
                        }
                <CartResume/>
                </div>
            </div>
            }
        </>
    )
}