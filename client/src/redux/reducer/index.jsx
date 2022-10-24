import { SUCCESS_ALL_PRODUCTS,SET_PRODUCTS_CATEGORY, UPDATE_CART } from "../actions"

const initialState = {
    allProducts: [],
    allCategories: [],
    productsByCategory:[],
    cart:[]
}

export const rootReducer = (state= initialState, action) => {
    switch(action.type){
        case SUCCESS_ALL_PRODUCTS:
            const allCategories = []
            action.payload.forEach(element => {
                if(!allCategories.includes(element.category)) allCategories.push(element.category)
            });
            return {...state, allProducts: action.payload, allCategories: allCategories}
        case SET_PRODUCTS_CATEGORY:
            return {...state, productsByCategory:action.payload}
        case UPDATE_CART:
            let updateCart = state.cart
            if(action.operation === "delete") updateCart = state.cart.filter(el=> el.id !== action.id) 
            else updateCart = [...state.cart,action.payload]
            return {...state, cart: [...updateCart]}
        default: return state
        }

}