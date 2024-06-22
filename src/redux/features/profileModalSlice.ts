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
    setModal(state, action: PayloadAction<boolean>) {
      state.modal = action.payload
    },
    setIsOpen(state, action: PayloadAction<boolean>) {
      state.isOpen = action.payload
    },
  },
})

export const { setModal, setIsOpen } = profileModalSlice.actions

export default profileModalSlice.reducer
