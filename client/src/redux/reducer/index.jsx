import { SUCCESS_ALL_PRODUCTS,SET_PRODUCTS_CATEGORY } from "../actions"

const initialState = {
    allProducts: [],
    allCategories: [],
    productsByCategory:[]
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
        default: return state
        }

}