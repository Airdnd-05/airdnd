import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Filters } from '@/types/Filters'

const initialState: Partial<Filters> = {
  amenities: [],
  isExpanded: false,
}

const amenitiesFilterSlice = createSlice({
  name: 'amenitiesFilter',
  initialState,
  reducers: {
    setAmenitiesFilter: (state, action: PayloadAction<string[]>) => {
      state.amenities = action.payload
    },
    resetAmenitiesFilter: () => initialState,
    toggleAmenitiesVisibility: state => {
      state.isExpanded = !state.isExpanded
    },
  },
})

export const { setAmenitiesFilter, resetAmenitiesFilter, toggleAmenitiesVisibility } =
  amenitiesFilterSlice.actions
export default amenitiesFilterSlice.reducer
