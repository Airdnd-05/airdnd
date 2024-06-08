// redux/features/buildingTypeSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Filters } from '@/types/Filters'

const initialState: Partial<Filters> = {
  buildingTypes: [],
}

const buildingTypeSlice = createSlice({
  name: 'buildingType',
  initialState,
  reducers: {
    setBuildingType: (state, action: PayloadAction<string[]>) => {
      state.buildingTypes = action.payload
    },
    resetBuildingType: () => initialState,
  },
})

export const { setBuildingType, resetBuildingType } = buildingTypeSlice.actions
export default buildingTypeSlice.reducer
