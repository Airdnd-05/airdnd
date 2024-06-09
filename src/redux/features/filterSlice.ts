import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Filters, FilterKeyValue } from '@/types/Filters'

interface FilterState {
  selectedFilters: Record<string, Filters>
}

const initialState: FilterState = {
  selectedFilters: {},
}

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setFilters(state, action: PayloadAction<FilterKeyValue>) {
      state.selectedFilters[action.payload.key] = action.payload.value
    },
    clearFilters(state) {
      state.selectedFilters = {}
    },
  },
})

export const { setFilters, clearFilters } = filterSlice.actions
export default filterSlice.reducer
