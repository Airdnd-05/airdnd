import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  userInfo: {},
}

const signupSlice = createSlice({
  name: 'signup',
  initialState,
  reducers: {
    setUserInfo(state, action) {
      state.userInfo = action.payload
    },
    clearUserInfo(state) {
      state.userInfo = {}
    },
  },
})

export const { setUserInfo, clearUserInfo } = signupSlice.actions
export default signupSlice.reducer
