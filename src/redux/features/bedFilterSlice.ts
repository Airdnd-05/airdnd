import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Filters } from '@/types/Filters'

const initialState: Partial<Filters> = {
  bedRooms: null,
  beds: null,
  bathRooms: null,
}

const bedFilterSlice = createSlice({
  name: 'bedFilter',
  initialState,
  reducers: {
    setBedrooms: (state, action: PayloadAction<number | null>) => {
      state.bedRooms = action.payload
    },
    setBeds: (state, action: PayloadAction<number | null>) => {
      state.beds = action.payload
    },
    setBathrooms: (state, action: PayloadAction<number | null>) => {
      state.bathRooms = action.payload
    },
    resetBedFilter: () => initialState,
  },
})

export const { setBedrooms, setBeds, setBathrooms, resetBedFilter } = bedFilterSlice.actions
export default bedFilterSlice.reducer
