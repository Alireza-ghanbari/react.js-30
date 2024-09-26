import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    token: null,
    loading: false,
    error: null,
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        signInStart: (state)=>{
            state.loading = true;
            state.error = null
        },
        signInSuccess: (state, action)=>{
            state.loading = false;
            state.error = null
            state.token = action.payload
        },
        signInFail: (state, action)=>{
            state.loading = false;
            state.error = action.payload
        },
        signOut: (state)=>{
            state.token = null
        }
    }
})

export const {signInStart, signInSuccess, signInFail, signOut} = userSlice.actions
export default userSlice.reducer