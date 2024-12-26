import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    username:""
}

export const userLoginSlice = createSlice({
    name:"userLogin",
    initialState,
    reducers:{
        setUserLogin : (state, action) => {
            state.username = action.payload
        }
    }
})

export const {setUserLogin} = userLoginSlice.actions

export default userLoginSlice.reducer