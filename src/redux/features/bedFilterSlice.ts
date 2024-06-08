import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Filters } from '@/types/Filters'

const initialState: Partial<Filters> = {
  bedrooms: null,
  beds: null,
  bathrooms: null,
}

const bedFilterSlice = createSlice({
  name: 'bedFilter',
  initialState,
  reducers: {
    setBedrooms: (state, action: PayloadAction<number | null>) => {
      state.bedrooms = action.payload
    },
    setBeds: (state, action: PayloadAction<number | null>) => {
      state.beds = action.payload
    },
    setBathrooms: (state, action: PayloadAction<number | null>) => {
      state.bathrooms = action.payload
    },
    resetBedFilter: () => initialState,
  },
})

export const { setBedrooms, setBeds, setBathrooms, resetBedFilter } =
  bedFilterSlice.actions
export default bedFilterSlice.reducer
