import { PayloadAction, createSlice } from '@reduxjs/toolkit'

interface SearchState {
  selected: string
  searchTerm: string
  activeIndex: number | null
}

const initialState: SearchState = {
  selected: '',
  searchTerm: '',
  activeIndex: null,
}

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearchTerm(state, action: PayloadAction<string>) {
      state.searchTerm = action.payload
    },
    setActiveIndex(state, action: PayloadAction<number | null>) {
      state.activeIndex = action.payload
    },
    setSelected(state, action: PayloadAction<string>) {
      state.selected = action.payload
    },
  },
})

export const { setSearchTerm, setActiveIndex, setSelected } = searchSlice.actions

export default searchSlice.reducer
