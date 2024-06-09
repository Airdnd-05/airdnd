import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Filters } from '@/types/Filters'

const initialState: Partial<Filters> = {
  adults: 0,
  children: 0,
  infants: 0,
  pets: 0,
}

const guestFilterSlice = createSlice({
  name: 'guestFilter',
  initialState,
  reducers: {
    setAdults(state, action: PayloadAction<number>) {
      state.adults = action.payload
    },
    setChildren(state, action: PayloadAction<number>) {
      state.children = action.payload
    },
    setInfants(state, action: PayloadAction<number>) {
      state.infants = action.payload
    },
    setPets(state, action: PayloadAction<number>) {
      state.pets = action.payload
    },
    resetGuestFilter(state) {
      state.adults = initialState.adults
      state.children = initialState.children
      state.infants = initialState.infants
      state.pets = initialState.pets
    },
  },
})

export const { setAdults, setChildren, setInfants, setPets, resetGuestFilter } =
  guestFilterSlice.actions
export default guestFilterSlice.reducer
