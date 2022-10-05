import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ProductsContext } from "../UseContext/UseContext";
import Item from "./Item";

export default function Products (){
    const {product,getCategory,getAllProducts} = useContext(ProductsContext)
    const [currentProduct, setCurrentProduct] = useState([])
    const {category} = useParams()

    useEffect(()=>{
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
        <>
            <h1>Products</h1>
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
        </>
    )
}