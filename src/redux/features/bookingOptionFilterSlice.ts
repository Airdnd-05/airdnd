import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Filters } from '@/types/Filters'

const initialState: Partial<Filters> = {
  bookingOptions: [],
}

const bookingOptionFilterSlice = createSlice({
  name: 'bookingOptionFilter',
  initialState,
  reducers: {
    setBookingOptionFilter: (state, action: PayloadAction<string[]>) => {
      state.bookingOptions = action.payload
    },
    resetBookingOptionFilter: () => initialState,
  },
})

export const { setBookingOptionFilter, resetBookingOptionFilter } = bookingOptionFilterSlice.actions
export default bookingOptionFilterSlice.reducer
