import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Filters, TravelersType } from '@/types/Filters'

const initialState: Partial<Filters> = {
  // 초기 상태 필터 객체?
  guests: 0,
  adults: 0,
  children: 0,
  infants: 0,
  pets: 0,
}

const updateGuests = (state: Partial<Filters>) => {
  // 성인 + 어린이 + 유아의 총 손님 수 업데이트
  state.guests = (state.adults || 0) + (state.children || 0) + (state.infants || 0)
}

const travelersFilterSlice = createSlice({
  // travelerFilter를 만든다.
  name: 'travelersFilter',
  initialState,
  reducers: {
    setAdults(state, action: PayloadAction<number>) {
      // 성인 수를 설정하고 총 손님이 16명이하인 경우 손님 수 업데이트
      const newAdults = action.payload
      const totalGuests = newAdults + (state.children || 0) + (state.infants || 0)
      if (totalGuests <= 16) {
        state.adults = newAdults
        updateGuests(state)
      }
    },
    setChildren(state, action: PayloadAction<number>) {
      // 손님이 16명을 초과하지 않고 어린이가 음수가 되지 않게 한다. 어린이를 추가하는 경우 성인 한명이 동시에 추가
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
      // 손님이 16명을 초과하지 않고 유아가 0~5 사이인지 확인, 유아 수 설정 그리고 유아를 추가하는 경우 성인 한명이 동시에 추가
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
      // 애완동물의 수를 0~5 사이로 설정 애완둥물을 추가하는경우 성인 한명이 동시에 추가
      const newPets = action.payload
      if (newPets >= 0 && newPets <= 5) {
        if (newPets > 0 && (state.adults || 0) === 0) {
          state.adults = 1
        }
        state.pets = newPets
      }
    },
    incrementGuests(state, action: PayloadAction<{ type: TravelersType }>) {
      // 성인, 어린이, 유아, 반려동물 ++++++ 증가
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
      // 성인, 어린이, 유아, 반려동물 ------- 감소
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
      // 게스트 필터를 초기상태로 재설정하고 총 게스트 수를 업데이트
      state.adults = initialState.adults
      state.children = initialState.children
      state.infants = initialState.infants
      state.pets = initialState.pets
      updateGuests(state)
    },
  },
})

export const {
  // 액션과 리듀서를 내보냄
  setAdults,
  setChildren,
  setInfants,
  setPets,
  incrementGuests,
  decrementGuests,
  resetGuestFilter,
} = travelersFilterSlice.actions
export default travelersFilterSlice.reducer
