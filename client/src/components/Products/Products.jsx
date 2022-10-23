import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {useDispatch,useSelector} from "react-redux"
import Category from "./Category/Category";
import Item from "./Item/Item"
import s from "./products.module.css"
import { getProducts } from "../../redux/actions";

export default function Products (){
    //! Case we replace redux with useContext()
    // const {product,getCategory,getAllProducts,setCurrentProduct,currentProduct} = useContext(ProductsContext)
    const [currentProduct, setCurrentProduct] = useState([])
    const {category} = useParams()
    const dispatch = useDispatch()
    const allProducts = useSelector(state=> state.allProducts)
    const productsByCategory = useSelector(state=> state.productsByCategory)

    useEffect( ()=>{
        // getAllProducts()
        dispatch(getProducts())
    },[])
    
    useEffect(()=>{
        if(allProducts.length && productsByCategory.length) {
            setCurrentProduct(productsByCategory)   
        }else if(allProducts.length && category === "all"){
            setCurrentProduct(allProducts)
        }
    },[productsByCategory,allProducts])

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