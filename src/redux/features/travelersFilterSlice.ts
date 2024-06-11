import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Filters, TravelersType } from '@/types/Filters'

const initialState: Partial<Filters> = {
  guests: 0,
  adults: 0,
  children: 0,
  infants: 0,
  pets: 0,
}

const updateGuests = (state: Partial<Filters>) => {
  state.guests = (state.adults || 0) + (state.children || 0) + (state.infants || 0)
}

const travelersFilterSlice = createSlice({
  name: 'travelersFilter',
  initialState,
  reducers: {
    setAdults(state, action: PayloadAction<number>) {
      const newAdults = action.payload
      const totalGuests = newAdults + (state.children || 0) + (state.infants || 0)
      if (totalGuests <= 16) {
        state.adults = newAdults
        updateGuests(state)
      }
    },
    setChildren(state, action: PayloadAction<number>) {
      const newChildren = action.payload
      const totalGuests = (state.adults || 0) + newChildren + (state.infants || 0)
      if (totalGuests <= 16 && newChildren >= 0) {
        if (newChildren > 0 && (state.adults || 0) === 0) {
          state.adults = 1
        }
        state.children = newChildren
        updateGuests(state)
      }
    },
    setInfants(state, action: PayloadAction<number>) {
      const newInfants = action.payload
      const totalGuests = (state.adults || 0) + (state.children || 0) + newInfants
      if (totalGuests <= 16 && newInfants >= 0 && newInfants <= 5) {
        if (newInfants > 0 && (state.adults || 0) === 0) {
          state.adults = 1
        }
        state.infants = newInfants
        updateGuests(state)
      }
    },
    setPets(state, action: PayloadAction<number>) {
      const newPets = action.payload
      if (newPets >= 0 && newPets <= 5) {
        if (newPets > 0 && (state.adults || 0) === 0) {
          state.adults = 1
        }
        state.pets = newPets
      }
    },
    incrementGuests(state, action: PayloadAction<{ type: TravelersType }>) {
      switch (action.payload.type) {
        case '성인':
          travelersFilterSlice.caseReducers.setAdults(state, {
            payload: (state.adults || 0) + 1,
          } as PayloadAction<number>)
          break
        case '어린이':
          travelersFilterSlice.caseReducers.setChildren(state, {
            payload: (state.children || 0) + 1,
          } as PayloadAction<number>)
          break
        case '유아':
          travelersFilterSlice.caseReducers.setInfants(state, {
            payload: (state.infants || 0) + 1,
          } as PayloadAction<number>)
          break
        case '반려동물':
          travelersFilterSlice.caseReducers.setPets(state, {
            payload: (state.pets || 0) + 1,
          } as PayloadAction<number>)
          break
        default:
          break
      }
    },
    decrementGuests(state, action: PayloadAction<{ type: TravelersType }>) {
      switch (action.payload.type) {
        case '성인':
          travelersFilterSlice.caseReducers.setAdults(state, {
            payload: Math.max(0, (state.adults || 0) - 1),
          } as PayloadAction<number>)
          break
        case '어린이':
          travelersFilterSlice.caseReducers.setChildren(state, {
            payload: Math.max(0, (state.children || 0) - 1),
          } as PayloadAction<number>)
          break
        case '유아':
          travelersFilterSlice.caseReducers.setInfants(state, {
            payload: Math.max(0, (state.infants || 0) - 1),
          } as PayloadAction<number>)
          break
        case '반려동물':
          travelersFilterSlice.caseReducers.setPets(state, {
            payload: Math.max(0, (state.pets || 0) - 1),
          } as PayloadAction<number>)
          break
        default:
          break
      }
    },
    resetGuestFilter(state) {
      state.adults = initialState.adults
      state.children = initialState.children
      state.infants = initialState.infants
      state.pets = initialState.pets
      updateGuests(state)
    },
  },
})

export const {
  setAdults,
  setChildren,
  setInfants,
  setPets,
  incrementGuests,
  decrementGuests,
  resetGuestFilter,
} = travelersFilterSlice.actions
export default travelersFilterSlice.reducer
