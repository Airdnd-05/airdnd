import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  filters: {},
}

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setFilters(state, action) {
      state.filters = action.payload
    },
    clearFilters(state) {
      state.filters = {}
    },
  },
})

export const { setFilters, clearFilters } = filterSlice.actions
export default filterSlice.reducer
