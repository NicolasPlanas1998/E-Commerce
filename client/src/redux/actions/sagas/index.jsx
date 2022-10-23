// Importo todos los watcher para que la app sea mas escalable
import product from "./productos";
import {all} from "redux-saga/effects"


export default function* rootSaga(){
    //All recibe un arreglo de los watchers
    yield all([
        product()
    ])
}