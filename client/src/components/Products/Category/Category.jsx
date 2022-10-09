import React, { useContext, useEffect, useState } from "react";
import { ProductsContext } from "../../UseContext/ProductContext";


export default function Category (){
    const [allCategories, setAllCategories] = useState([])
    

    const {product,getCategory,getAllCategories,setCurrentProduct} = useContext(ProductsContext)

    useEffect(()=>{
        setAllCategories(getAllCategories(product))
    },[product])

    const handleProducts = (el)=>{
        setCurrentProduct(getCategory(el,product))
    }

    return(
        <>
            {allCategories.length ?
                allCategories.map(el=>(
                    <button key={el} onClick={() => handleProducts(el)}>{el}</button>
                )):
            <h2 >Cargando</h2>
            }
        </>
    )
}