import React, {createContext, useEffect, useState} from "react";


export const ProductsContext = createContext([])

const init = async () =>{
    let prodPromise = await fetch("http://localhost:3001/product")
    .then(res=> res.json())
    .then(data=> [...data])  

    return prodPromise
}


export const ProductProvider = ({children}) =>{
    const [product, setProducts] = useState(init)

    const getCategory = (category,product)=>{
        const newProducts =  product.filter(el=> el.category === category)
        return newProducts
    }
    
    
    return(
        <ProductsContext.Provider value={{
            product,
            setProducts,
            getCategory}}>
            {children}
        </ProductsContext.Provider>
    )
}

