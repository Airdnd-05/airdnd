import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Filters } from '@/types/Filters'

const initialState: Partial<Filters> = {
  city: null,
}

const cityFilterSlice = createSlice({
  name: 'cityFilter',
  initialState,
  reducers: {
    setCity(state, action: PayloadAction<string | null>) {
      state.city = action.payload
    },
    resetCityFilter(state) {
      state.city = initialState.city
    },
  },
})

export const { setCity, resetCityFilter } = cityFilterSlice.actions
export default cityFilterSlice.reducer
