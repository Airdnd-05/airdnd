import { configureStore } from '@reduxjs/toolkit'
import filterModalReducer from '@/redux/filterModal/slice'

const store = configureStore({
  reducer: {
    filterModal: filterModalReducer,
  },
})

export default store
