import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ProductsContext } from "../UseContext/UseContext";

export default function Products (){
    const {product,setProducts,getCategory} = useContext(ProductsContext)
    const [currentProduct, setCurrentProduct] = useState([])
    const {category} = useParams()

    useEffect(()=>{
        product.then(data=>setProducts(data))
    },[])
    
    useEffect(()=>{
        if(product.length && category !== "all") {
            setCurrentProduct(getCategory(category,product))
            console.log(category);    
        }else if(product.length && category === "all"){
            setCurrentProduct(product)
        }
    },[category])
    
    
    console.log(currentProduct);    
    return(
        <>
            <h1>Products</h1>
            {
                currentProduct.length 
                ?
                currentProduct.map(el=>(
                    <>
                        <h2>{el.name}</h2>
                        <h2>{el.price}</h2>
                    </>
                )):
                <h2>Cargando...</h2>
            }
        
        </>
    )
}