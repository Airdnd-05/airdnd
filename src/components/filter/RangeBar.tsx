import React, { useEffect, useState, useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Range, getTrackBackground } from 'react-range'
import _ from 'lodash'
import { RootState } from '@/redux/store'
import { setMinPrice, setMaxPrice } from '@/redux/features/priceRange/slice'

const MIN = 14000
const MAX = 779850
const STEP = 1000
const GAP = 10000

function Heading() {
  return (
    <div className='flex flex-col'>
      <span className='text-2xl font-semibold'>가격 범위</span>
      <span className='pt-2 text-sm text-gray-500'>1박 요금(수수료 및 세금 포함)</span>
    </div>
  )
}

function RangeBar({ min, max, handleChange }) {
  return (
    <div className='flex flex-col items-center'>
      <Range
        step={STEP}
        min={MIN}
        max={MAX}
        values={[min, max]}
        onChange={handleChange}
        renderTrack={({ props, children }) => (
          <div
            {...props}
            className='flex h-2 w-full rounded bg-gray-300'
            style={{
              background: getTrackBackground({
                values: [min, max],
                colors: ['#ccc', '#000', '#ccc'],
                min: MIN,
                max: MAX,
              }),
            }}>
            {children}
          </div>
        )}
        renderThumb={({ props }) => (
          <div
            {...props}
            className='h-8 w-8 rounded-full border border-solid border-gray-200 bg-white shadow'
          />
        )}
      />
    </div>
  )
}

function InputBox({ label, value, onChange, onBlur, currencySymbol }) {
  return (
    <div className='relative flex flex-col items-center'>
      <div className='relative h-16 w-40'>
        {currencySymbol && (
          <span className='absolute left-2 top-1/2 -translate-y-1/2 transform text-lg'>₩</span>
        )}
        <input
          type='text'
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          className='h-full w-full rounded border pl-8 text-left text-lg'
          min={MIN}
          max={MAX}
          style={{ paddingLeft: currencySymbol ? '2rem' : '0.5rem' }}
        />
      </div>
      <label className='absolute left-3 top-1 text-sm text-gray-500'>{label}</label>
    </div>
  )
}

function PriceRange() {
  const dispatch = useDispatch()
  const { min, max } = useSelector((state: RootState) => state.priceRange)
  const [localMin, setLocalMin] = useState(min)
  const [localMax, setLocalMax] = useState(max)

  useEffect(() => {
    setLocalMin(min)
    setLocalMax(max)
  }, [min, max])

  const throttledPriceChange = _.throttle((values: number[], dispatch) => {
    let [newMin, newMax] = values

    if (newMin >= newMax) {
      if (newMin === newMax) {
        newMin = Math.max(MIN, newMin - GAP)
        newMax = Math.min(MAX, newMax + GAP)
      } else {
        ;[newMin, newMax] = [newMax, newMin]
      }
    }

    dispatch(setMinPrice(newMin))
    dispatch(setMaxPrice(newMax))
  }, 200)

  const handlePriceChange = useCallback(
    (values: number[]) => {
      throttledPriceChange(values, dispatch)
    },
    [dispatch, throttledPriceChange],
  )

  const handleLeftChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLocalMin(Number(e.target.value))
  }

  const handleRightChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLocalMax(Number(e.target.value))
  }

  const handleLeftBlur = () => {
    let value = Number(localMin)
    if (Number.isNaN(value) || value < MIN || value >= localMax) {
      setLocalMin(min)
    } else {
      if (value > max - GAP) value = max - GAP
      dispatch(setMinPrice(value))
    }
  }

  const handleRightBlur = () => {
    let value = Number(localMax)
    if (Number.isNaN(value) || value > MAX || value <= localMin) {
      setLocalMax(max)
    } else {
      if (value < min + GAP) value = min + GAP
      dispatch(setMaxPrice(value))
    }
  }

  return (
    <div className='flex flex-col space-y-4 border-b border-solid border-slate-300 px-6 py-8'>
      <Heading />
      <RangeBar min={min} max={max} handleChange={handlePriceChange} />
      <div className='flex justify-between space-x-4'>
        <InputBox
          label='최저'
          value={localMin}
          onChange={handleLeftChange}
          onBlur={handleLeftBlur}
          currencySymbol={true}
        />
        <InputBox
          label='최고'
          value={localMax}
          onChange={handleRightChange}
          onBlur={handleRightBlur}
          currencySymbol={true}
        />
      </div>
    </div>
  )
}

export default PriceRange
