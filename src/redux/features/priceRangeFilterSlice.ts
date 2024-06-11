import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Filters } from '@/types/Filters'

const initialState: Partial<Filters> = {
  priceMin: 14000,
  priceMax: 800000,
}

const priceRangeFilterSlice = createSlice({
  name: 'priceFilter',
  initialState,
  reducers: {
    setMinPrice(state, action: PayloadAction<number>) {
      state.priceMin = action.payload
    },
    setMaxPrice(state, action: PayloadAction<number>) {
      state.priceMax = action.payload
    },
    resetPriceRangeFilter(state) {
      state.priceMin = initialState.priceMin
      state.priceMax = initialState.priceMax
    },
  },
})

export const { setMinPrice, setMaxPrice, resetPriceRangeFilter } = priceRangeFilterSlice.actions
export default priceRangeFilterSlice.reducer
