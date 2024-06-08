import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@/redux/store'
import { setBuildingType } from '@/redux/features/buildingTypeSlice'

const buildingTypes = ['단독 또는 다세대 주택', '아파트', '게스트용 별채', '호텔']

const BuildingTypeFilter = () => {
  const dispatch = useDispatch()
  const selectedTypes = useSelector((state: RootState) => state.buildingType.buildingTypes)

  const handleToggle = (type: string) => {
    const updatedTypes = selectedTypes.includes(type)
      ? selectedTypes.filter(t => t !== type)
      : [...selectedTypes, type]
    dispatch(setBuildingType(updatedTypes))
  }

  return (
    <div className='p-4 border-b border-gray-300'>
      <h2 className='mb-2 text-lg font-semibold'>건물 유형</h2>
      <div className='grid grid-cols-2 gap-2'>
        {buildingTypes.map(type => (
          <div
            key={type}
            className={`flex aspect-square cursor-pointer items-center justify-center rounded-lg border p-4 ${selectedTypes.includes(type) ? 'border-2 border-black' : 'border border-gray-300'}`}
            onClick={() => handleToggle(type)}>
            <div>
              <p className='font-semibold text-center'>{type}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default BuildingTypeFilter
