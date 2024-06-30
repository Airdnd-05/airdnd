import { PayloadAction, createSlice } from '@reduxjs/toolkit'

interface ProfileState {
  modal: boolean
  isOpen: boolean
}

const initialState: ProfileState = {
  modal: false,
  isOpen: false,
}

const profileModalSlice = createSlice({
  name: 'profileModal',
  initialState,
  reducers: {
    setModal(state) {
      state.modal = !state.modal
    },
    setIsOpen(state, action: PayloadAction<boolean>) {
      state.isOpen = action.payload
      if (action.payload) {
        state.modal = false
      }
    },
  },
})

export const { setModal, setIsOpen } = profileModalSlice.actions

export default profileModalSlice.reducer
