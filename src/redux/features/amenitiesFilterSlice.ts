import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Filters } from '@/types/Filters'

const initialState: Partial<Filters> = {
  amenities: [],
}

const amenitiesFilterSlice = createSlice({
  name: 'amenitiesFilter',
  initialState,
  reducers: {
    setAmenitiesFilter: (state, action: PayloadAction<string[]>) => {
      state.amenities = action.payload
    },
    resetAmenitiesFilter: () => initialState,
  },
})

export const { setAmenitiesFilter, resetAmenitiesFilter } =
  amenitiesFilterSlice.actions
export default amenitiesFilterSlice.reducer
