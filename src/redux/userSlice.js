import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  
    username:null,
    password:null,
    isLoading:false,
    isAuth: false,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUsername: (state, action) => {
        state.username= action.payload
      },

    setPassword: (state, action) => {
        state.password= action.payload
      },
    setIsLoading: (state, action) => {
        state.isLoading= action.payload
      },
    setLogin: (state) => {

        state.isAuth= true
    },
   
  },
})


export const { setUsername, setPassword, setIsLoading, setLogin } = userSlice.actions

export default userSlice.reducer