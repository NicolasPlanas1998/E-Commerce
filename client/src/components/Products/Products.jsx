import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ProductsContext } from "../UseContext/ProductContext";
import Category from "./Category/Category";
import Item from "./Item/Item"
import s from "./products.module.css"

export default function Products (){
    const {product,getCategory,getAllProducts,setCurrentProduct,currentProduct} = useContext(ProductsContext)
    const {category} = useParams()

    useEffect( ()=>{
        getAllProducts()
    },[])
    
    useEffect(()=>{
        if(product.length && category !== "all") {
            setCurrentProduct(getCategory(category,product))   
        }else if(product.length && category === "all"){
            setCurrentProduct(product)
        }
    },[category,product])

    return(
        <div className={s.containerSection}>
            <h1>Products</h1>

            <div className={s.containerCategories}>
                <Category/>
            </div>

            <div className={s.containerProducts}>
                {currentProduct.length 
                    ?
                    currentProduct.map(el=>(
                    <Item 
                            key={el.id}
                            id={el.id}
                            category={el.category}
                            color={el.color}
                            images={el.images}
                            name={el.name}
                            price={el.price}
                            stock={el.stock}
                            />))
                    :
                    <h2>Cargando...</h2>
                }
            </div>
        </div>
    )
}