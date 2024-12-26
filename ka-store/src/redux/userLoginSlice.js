import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    frontName:"",
    picture: ""
}

export const userLoginSlice = createSlice({
    name:"userLogin",
    initialState,
    reducers:{
        setUserLogin : (state, action) => {
            state.frontName = action.payload.frontName
            state.picture = action.payload.picture
        }
    }
})

export const {setUserLogin} = userLoginSlice.actions

export default userLoginSlice.reducer