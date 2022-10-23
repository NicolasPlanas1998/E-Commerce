export const GET_ALL_PRODUCTS = "GET_ALL_PRODUCTS"
export const SUCCESS_ALL_PRODUCTS = "SUCCESS_ALL_PRODUCTS"
export const SET_PRODUCTS_CATEGORY = "GET_PRODUCTS_CATEGORY"

export const getProducts = payload =>{
    return {
        type: GET_ALL_PRODUCTS,
        payload
    }
}
export const successGetProducts = payload =>{
    return {
        type: SUCCESS_ALL_PRODUCTS,
        payload
    }
}
export const setProductsByCategory = (category,product)=>{
    const categoryProducts =  product.filter(el=> el.category === category)
    return {
        type:SET_PRODUCTS_CATEGORY,
        payload: categoryProducts
    }
} 
