import { configureStore } from '@reduxjs/toolkit'
import modalReducer from '@/redux/features/modalSlice'
import filterReducer from '@/redux/features/filterSlice'
import priceRangeFilterReducer from '@/redux/features/priceRangeFilterSlice'
import roomTypeFilterReducer from '@/redux/features/roomTypeFilterSlice'
import bedFilterReducer from '@/redux/features/bedFilterSlice'
import amenitiesFilterReducer from '@/redux/features/amenitiesFilterSlice'
import bookingOptionFilterReducer from '@/redux/features/bookingOptionFilterSlice'
import guestFavoriteReducer from '@/redux/features/guestFavoriteSlice'
import buildingTypeReducer from '@/redux/features/buildingTypeSlice'
import { apiSlice } from '@/redux/apiSlice'

const store = configureStore({
  reducer: {
    modal: modalReducer,
    filter: filterReducer,
    priceRangeFilter: priceRangeFilterReducer,
    roomTypeFilter: roomTypeFilterReducer,
    bedFilter: bedFilterReducer,
    amenitiesFilter: amenitiesFilterReducer,
    bookingOptionFilter: bookingOptionFilterReducer,
    guestFavorite: guestFavoriteReducer,
    buildingType: buildingTypeReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(apiSlice.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
