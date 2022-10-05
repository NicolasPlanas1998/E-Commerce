import React, {createContext, useEffect, useState} from "react";


export const ProductsContext = createContext([])

//! En verde TSC

// interface Api{
//     name:string,
//     price:number,
//     category:string,
//     description: string,
//     images:string,
//     color:string,
//     stock:number
// }
export const ProductProvider =  ({children}) =>{
    // const [product, setProducts] = useState<Array<Api>>([])
    const [product, setProducts] = useState([])

    const getAllProducts = async () =>{
        await fetch("http://localhost:3001/product")
            .then(res=> res.json()) 
            .then(data => setProducts(data))
    }

    const getCategory = (category,product)=>{
        const newProducts =  product.filter(el=> el[category] === category)
        return newProducts
    }
    
    
    return(
        <ProductsContext.Provider value={{
            product,
            setProducts,
            getAllProducts,
            setProducts,
            getCategory}}>
            {children}
        </ProductsContext.Provider>
    )
}

