import { createSlice } from '@reduxjs/toolkit'
import { Filters } from '@/types/Filters'

const initialState: Partial<Filters> = {
  guestFavorite: false,
}

const guestFavoriteFilterSlice = createSlice({
  name: 'guestFavoriteFilter',
  initialState,
  reducers: {
    toggleGuestFavorite: state => {
      state.guestFavorite = !state.guestFavorite
    },
    resetGuestFavorite: state => {
      state.guestFavorite = initialState.guestFavorite
    },
  },
})

export const { toggleGuestFavorite, resetGuestFavorite } = guestFavoriteFilterSlice.actions
export default guestFavoriteFilterSlice.reducer
