import React from "react";
import {useDispatch,useSelector} from "react-redux"
import { setProductsByCategory } from "../../../redux/actions";


export default function Category (){
    const dispatch = useDispatch()
    const allCategories = useSelector(state=> state.allCategories)
    const allProducts = useSelector(state=> state.allProducts)
    
    const handleProducts = (el)=>{
        dispatch(setProductsByCategory(el,allProducts))
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