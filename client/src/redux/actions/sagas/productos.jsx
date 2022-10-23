import {put, call, takeLatest } from "redux-saga/effects"
import { GET_ALL_PRODUCTS,SUCCESS_ALL_PRODUCTS } from "../index"

function* getAllProducts(){
    const  callApi = (url) => fetch(url).then(res=>res.json())
    try {
        const payload = yield call(callApi,"http://localhost:3001/product")
        yield put({type:SUCCESS_ALL_PRODUCTS, payload})
    } catch (error) {
        console.log(error);
    }
}

//----Watcher----- 
//-> Es indispensable
//-> Funcion que espera a que se ejecute el action.type para poder ejecutarse

export default function* product(){
    yield takeLatest(GET_ALL_PRODUCTS, getAllProducts)
}

