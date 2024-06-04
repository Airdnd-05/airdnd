import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface ModalState {
  isOpen: boolean
  modalProps?: unknown
  scrollPosition: number
}

const initialState: ModalState = {
  isOpen: false,
  modalProps: {},
  scrollPosition: 0,
}

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal(state, action: PayloadAction<{ modalProps?: unknown }>) {
      state.isOpen = true
      state.modalProps = action.payload.modalProps
      state.scrollPosition = window.pageYOffset
      document.body.style.overflow = 'hidden'
      document.body.style.position = 'fixed'
      document.body.style.top = `-${state.scrollPosition}px`
      document.body.style.right = `${window.innerWidth - document.documentElement.clientWidth}px`
    },
    closeModal(state) {
      state.isOpen = false
      state.modalProps = {}
      document.body.style.removeProperty('overflow')
      document.body.style.removeProperty('position')
      document.body.style.removeProperty('top')
      document.body.style.removeProperty('right')
      window.scrollTo(0, state.scrollPosition)
    },
  },
})

export const { openModal, closeModal } = modalSlice.actions
export default modalSlice.reducer
