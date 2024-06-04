import { configureStore } from '@reduxjs/toolkit'
import modalReducer from '@/redux/features/modal/slice'
import filterReducer from '@/redux/features/filter/slice'
import signupReducer from '@/redux/features/signup/slice'
import reviewReducer from '@/redux/features/review/slice'

const store = configureStore({
  reducer: {
    modal: modalReducer,
    filter: filterReducer,
    signup: signupReducer,
    review: reviewReducer,
  },
})

export default store
