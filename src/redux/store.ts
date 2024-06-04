import { configureStore } from '@reduxjs/toolkit'
import modalReducer from '@/redux/features/modal/slice'
import filterReducer from '@/redux/features/filter/slice'
import signupReducer from '@/redux/features/signup/slice'
import reviewReducer from '@/redux/features/review/slice'
import priceRangeReducer from '@/redux/features/priceRange/slice'

const store = configureStore({
  reducer: {
    modal: modalReducer,
    filter: filterReducer,
    signup: signupReducer,
    review: reviewReducer,
    priceRange: priceRangeReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
