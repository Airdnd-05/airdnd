import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isOpen: false,
  modalProps: {},
}

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal(state, action) {
      state.isOpen = true
      state.modalProps = action.payload.modalProps
    },
    closeModal(state) {
      state.isOpen = false
      state.modalProps = {}
    },
  },
})

export const { openModal, closeModal } = modalSlice.actions
export default modalSlice.reducer
