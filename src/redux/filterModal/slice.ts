import { createSlice } from '@reduxjs/toolkit'

export interface FilterModalState {
  isOpen: boolean
}

const initialState: FilterModalState = {
  isOpen: false,
}

const filterModalSlice = createSlice({
  name: 'filterModal',
  initialState,
  reducers: {
    openModal: state => {
      state.isOpen = true
    },
    closeModal: state => {
      state.isOpen = false
    },
  },
})

export const { openModal, closeModal } = filterModalSlice.actions

export default filterModalSlice.reducer
