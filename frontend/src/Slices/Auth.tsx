import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    isLogin: false,
    user: {},

}

const userSlicer = createSlice({
    initialState,
    name: 'user',
    reducers: {
        signin(state, action) {
            state.isLogin = true;
            state.user = action.payload
        }
    }
})

export const { signin } = userSlicer.actions
export default userSlicer.reducer