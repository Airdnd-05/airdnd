import { createSlice } from '@reduxjs/toolkit'

interface CalendarState {
  startDate: string | null
  endDate: string | null
}

const initialState: CalendarState = {
  startDate: null,
  endDate: null,
}

const calendarSlice = createSlice({
  name: 'calendar',
  initialState,
  reducers: {
    setDates(state, action) {
      const { start, end } = action.payload
      state.startDate = start
      state.endDate = end
    },
    refreshDates(state) {
      state.startDate = null
      state.endDate = null
    },
  },
})

export const { setDates, refreshDates } = calendarSlice.actions
export default calendarSlice.reducer
