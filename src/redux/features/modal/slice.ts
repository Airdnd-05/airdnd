import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface ModalState {
  isOpen: boolean
  modalProps?: unknown
}

const initialState: ModalState = {
  isOpen: false,
  modalProps: {},
}

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal(state, action: PayloadAction<{ modalProps?: unknown }>) {
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
