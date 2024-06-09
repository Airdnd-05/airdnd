import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Filters } from '@/types/Filters'

const initialState: Partial<Filters> = {
  checkInDate: null,
  checkOutDate: null,
}

const dateFilterSlice = createSlice({
  name: 'dateFilter',
  initialState,
  reducers: {
    setCheckInDate(state, action: PayloadAction<string | null>) {
      state.checkInDate = action.payload
    },
    setCheckOutDate(state, action: PayloadAction<string | null>) {
      state.checkOutDate = action.payload
    },
    resetDateFilter(state) {
      state.checkInDate = initialState.checkInDate
      state.checkOutDate = initialState.checkOutDate
    },
  },
})

export const { setCheckInDate, setCheckOutDate, resetDateFilter } = dateFilterSlice.actions
export default dateFilterSlice.reducer
