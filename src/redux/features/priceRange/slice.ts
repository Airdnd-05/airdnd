import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface PriceRangeState {
  min: number
  max: number
}

const initialState: PriceRangeState = {
  min: 14000,
  max: 779850,
}

const priceRangeSlice = createSlice({
  name: 'priceRange',
  initialState,
  reducers: {
    setMinPrice(state, action: PayloadAction<number>) {
      state.min = action.payload
    },
    setMaxPrice(state, action: PayloadAction<number>) {
      state.max = action.payload
    },
    resetPriceRange(state) {
      state.min = initialState.min
      state.max = initialState.max
    },
  },
})

export const { setMinPrice, setMaxPrice, resetPriceRange } = priceRangeSlice.actions
export default priceRangeSlice.reducer
