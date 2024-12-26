import {configureStore} from "@reduxjs/toolkit"
import userLoginReducer from "./userLoginSlice"

//store digunakan untuk menampung semua slice redux
const store = configureStore({
    reducer:{
        userLogin: userLoginReducer
    },
})
export default store