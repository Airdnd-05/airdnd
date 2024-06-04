import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface FilterState {
  filters: unknown
}

const initialState: FilterState = {
  filters: {},
}

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setFilters(state, action: PayloadAction<unknown>) {
      state.filters = action.payload
    },
    clearFilters(state) {
      state.filters = {}
    },
  },
})

export const { setFilters, clearFilters } = filterSlice.actions
export default filterSlice.reducer
