import { createSlice } from '@reduxjs/toolkit'
import { Filters } from '@/types/Filters'

const initialState: Partial<Filters> = {
  guestFavorite: false,
}

const guestFavoriteSlice = createSlice({
  name: 'guestFavorite',
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

export const { toggleGuestFavorite, resetGuestFavorite } = guestFavoriteSlice.actions
export default guestFavoriteSlice.reducer
