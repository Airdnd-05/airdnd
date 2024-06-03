import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  reviews: [],
}

const reviewSlice = createSlice({
  name: 'review',
  initialState,
  reducers: {
    addReview(state, action) {
      state.reviews.push(action.payload)
    },
    clearReviews(state) {
      state.reviews = []
    },
  },
})

export const { addReview, clearReviews } = reviewSlice.actions
export default reviewSlice.reducer
