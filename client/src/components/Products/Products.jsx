import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ProductsContext } from "../UseContext/UseContext";
import Item from "./Item";
import s from "./products.module.css"

export default function Products (){
    const {product,getCategory,getAllProducts,getAllCategories} = useContext(ProductsContext)
    const [currentProduct, setCurrentProduct] = useState([])
    const [allCategories, setAllCategories] = useState([])
    const {category} = useParams()

    useEffect(()=>{
        getAllProducts()
        setAllCategories(getAllCategories(product))
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
                {allCategories.length ?
                    allCategories.map(el=>(
                        <h4>{el}</h4>
                    )):
                <h2>Cargando</h2>
                }
            </div>

            <div className={s.containerProducts}>
                {
                    currentProduct.length 
                    ?
                    currentProduct.map(el=>(
                    <Item 
                            key={el.id}
                            category={el.category}
                            color={el.color}
                            images={el.images}
                            name={el.name}
                            price={el.price}
                            />
                    )):
                    <h2>Cargando...</h2>
                }
            </div>
        </div>
    )
}