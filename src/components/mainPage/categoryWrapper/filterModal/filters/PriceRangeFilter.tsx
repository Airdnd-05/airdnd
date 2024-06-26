import React, { useEffect, useState, useMemo, useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Range, getTrackBackground } from 'react-range'
import clsx from 'clsx'
import _ from 'lodash'
import { IoRemoveSharp } from 'react-icons/io5'
import { RootState } from '@/redux/store'
import { setMinPrice, setMaxPrice } from '@/redux/features/priceRangeFilterSlice'

const MIN = 14000
const MAX = 800000
const STEP = 1
const GAP = 10000
const BINS = 43

const histogramData = [
  0, 3, 8, 9, 2, 8, 5, 6, 12, 6, 13, 4, 13, 8, 9, 12, 7, 6, 6, 7, 6, 8, 5, 4, 9, 7, 5, 11, 13, 4,
  10, 4, 9, 6, 5, 6, 6, 12, 4, 3, 9, 6, 4,
]

/**
 *
 * @param param0
 * @returns
 */
function Histogram({ priceMin, priceMax, histogramData }) {
  const binWidth = (MAX - MIN) / BINS

  return (
    <div className='flex h-20 w-full items-end '>
      {histogramData.map((count, index) => {
        const binMin = MIN + index * binWidth
        const binMax = binMin + binWidth
        const isSelected = priceMin < binMin && binMax < priceMax

        return (
          <div
            key={index}
            className={clsx('mr-0.5 flex-1', {
              'bg-black': isSelected,
              'bg-gray-300': !isSelected,
            })}
            style={{
              height: `${(count / 15) * 100}%`,
            }}
          />
        )
      })}
    </div>
  )
}

const MemoizedHistogram = React.memo(
  Histogram,
  (prevProps, nextProps) =>
    prevProps.priceMin === nextProps.priceMin && prevProps.priceMax === nextProps.priceMax,
)

function RangeBar({ localMin, localMax, onChange, onFinalChange }) {
  return (
    <div className='relative flex flex-col items-center'>
      <Range
        step={STEP}
        min={MIN}
        max={MAX}
        values={[localMin, localMax]}
        onChange={onChange}
        onFinalChange={onFinalChange}
        renderTrack={({ props, children }) => (
          <div
            {...props}
            className='flex h-1 w-full rounded bg-gray-300'
            style={{
              background: getTrackBackground({
                values: [localMin, localMax],
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
            key={props.key}
            className='h-8 w-8 rounded-full border border-solid border-gray-200 bg-white shadow'
          />
        )}
      />
    </div>
  )
}

/**
 * 가격 범위를 조절하는 입력 필드 컴포넌트
 * 지역 상태 localMin, localMax의 변화에 따라 입력 필드의 값이 변화합니다.
 * 전역 상태 min, max가 변화할 시 localMin, localMax가 변화하여 입력 필드의 값에 반영됩니다.
 * 사용자 인터랙션으로 지역 상태를 변경할 수 있습니다.
 * 포커스가 떠날때 지역 상태의 유효성을 검사하여 전역 상태를 변경할 수 있습니다.
 * @prop {string} label - 입력 필드의 라벨
 * @prop {string} value - 입력 필드의 값
 * @prop {function} onChange - 입력 필드의 값이 변화할 때 호출되는 함수
 * @prop {function} onBlur - 입력 필드의 포커스가 떠날 때 호출되는 함수
 */
function InputBox({ label, value, onChange, onBlur }) {
  return (
    <div className='relative flex flex-col items-center'>
      <div className='w-74 h-14 rounded-xl border border-solid border-slate-500'>
        <span className='absolute left-3 top-1/2 mt-[6px] -translate-y-1/2 transform text-base'>
          ₩
        </span>
        <input
          type='text'
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          className='mt-[21px] pl-8 text-base'
          min={MIN}
          max={MAX}
        />
      </div>
      <label className='absolute left-2 top-1 text-sm text-gray-500'>{label}</label>
    </div>
  )
}

function PriceRangeFilter() {
  const dispatch = useDispatch()

  // 사용자가 설정하고자하는 가격 범위의 최소, 최대를 반영하는 전역 상태입니다.
  const { priceMin: min, priceMax: max } = useSelector((state: RootState) => state.priceRangeFilter)

  // 사용자의 인터랙션의 유효성을 검사하기 위해 로컬 상태를 사용합니다.
  const [localMin, setLocalMin] = useState(min)
  const [localMax, setLocalMax] = useState(max)

  // 유효성 검사를 통과해 전역 상태가 변경되면, 로컬 상태를 전역 상태에 동기화합니다.
  useEffect(() => {
    setLocalMin(min)
    setLocalMax(max)
  }, [min, max])

  // lodash의 throttle을 사용하여, 200ms마다 값을 업데이트합니다. (과도한 리렌더링 방지)
  const throttledPriceChange = useMemo(
    () =>
      _.throttle((values: number[]) => {
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
      }, 100),
    [dispatch],
  )

  // 슬라이드 바가 움직일때마다 throttledPriceChange를 호출합니다.
  // lodash의 throttle로 감싸져 있기 때문에 사용자의 인터랙션은 200ms마다 한번씩만 처리됩니다.
  const handleFinalPriceChange = useCallback(
    (values: number[]) => {
      throttledPriceChange(values)
    },
    [throttledPriceChange],
  )

  // 왼쪽 input의 입력을 지역 상태에 반영합니다.
  const handleLeftChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLocalMin(Number(e.target.value))
  }

  // 왼쪽 input의 지역 상태 유효성을 검사한 후 전역 상태에 반영합니다.
  const handleLeftBlur = () => {
    let value = Number(localMin)
    if (Number.isNaN(value) || value < MIN || value >= localMax) {
      setLocalMin(min)
    } else {
      if (value > max - GAP) value = max - GAP
      dispatch(setMinPrice(value))
    }
  }

  // 오른쪽 input의 입력을 지역 상태에 반영합니다.
  const handleRightChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLocalMax(Number(e.target.value))
  }

  // 오른쪽 input의 지역 상태 유효성을 검사한 후 전역 상태에 반영합니다.
  const handleRightBlur = () => {
    let value = Number(localMax)
    if (Number.isNaN(value) || value > MAX || value <= localMin) {
      setLocalMax(max)
    } else {
      if (value < min + GAP) value = min + GAP
      dispatch(setMaxPrice(max))
    }
  }

  function Heading() {
    return (
      <div className='flex flex-col'>
        <span className='text-2xl font-semibold'>가격 범위</span>
        <div className='pb-6'>
          <span className='pt-2 text-sm text-gray-500'>1박 요금(수수료 및 세금 포함)</span>
        </div>
      </div>
    )
  }

  return (
    <div className='flex flex-col space-y-4 border-b border-solid border-slate-300 px-6 py-8'>
      <Heading />
      <div className='mx-8 flex h-44 flex-col justify-between'>
        <div>
          <MemoizedHistogram priceMin={min} priceMax={max} histogramData={histogramData} />
          <RangeBar
            localMin={localMin}
            localMax={localMax}
            onChange={values => {
              setLocalMin(values[0])
              setLocalMax(values[1])
            }}
            onFinalChange={handleFinalPriceChange}
          />
        </div>
        <div className='flex justify-between space-x-4'>
          <InputBox
            label='최저'
            value={localMin}
            onChange={handleLeftChange}
            onBlur={handleLeftBlur}
          />
          <div className='flex flex-row items-center justify-between'>
            <IoRemoveSharp size={18} />
          </div>
          <InputBox
            label='최고'
            value={localMax}
            onChange={handleRightChange}
            onBlur={handleRightBlur}
          />
        </div>
      </div>
    </div>
  )
}

export default PriceRangeFilter
