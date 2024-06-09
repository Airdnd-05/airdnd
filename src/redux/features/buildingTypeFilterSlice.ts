import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Filters } from '@/types/Filters'

const initialState: Partial<Filters> = {
  buildingTypes: [],
}

const buildingTypeFilterSlice = createSlice({
  name: 'buildingTypeFilter',
  initialState,
  reducers: {
    setBuildingType: (state, action: PayloadAction<string[]>) => {
      state.buildingTypes = action.payload
    },
    resetBuildingType: () => initialState,
  },
})

export const { setBuildingType, resetBuildingType } = buildingTypeFilterSlice.actions
export default buildingTypeFilterSlice.reducer
