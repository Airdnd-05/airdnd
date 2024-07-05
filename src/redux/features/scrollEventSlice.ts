import { PayloadAction, createSlice } from '@reduxjs/toolkit'

interface ScrollState {
  isScrollNav: boolean
}

const initialState: ScrollState = {
  isScrollNav: false,
}

const scrollEventSlice = createSlice({
  name: 'ScrollNav',
  initialState,
  reducers: {
    setIsScrollNav(state, action: PayloadAction<boolean>) {
      state.isScrollNav = action.payload
    },
  },
})

export const { setIsScrollNav } = scrollEventSlice.actions
export default scrollEventSlice.reducer
