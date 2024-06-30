'use client'

import '@/components/common/calendar/calendar.css'
import { useDispatch, useSelector } from 'react-redux'
import { useRef } from 'react'
import { setActiveIndex } from '@/redux/features/SearchSlice'
import { RootState } from '@/redux/store'
import useOnClickOutside from '@/hooks/useOnclickOutside'
import TravelersModal from './TravelersModal'
import TravelDestinationModal from './TravelDestinationModal'
import SearchResultsModal from './SearchResultsModal'
import CalenderModal from './CalenderModal'

function SearchModal({ handleClick, dateRange, setDateRange, resetSearchStyle }) {
  const dispatch = useDispatch()
  const { activeIndex, selected } = useSelector((state: RootState) => state.search)

  const modalRef = useRef(null)

  useOnClickOutside(modalRef, () => {
    dispatch(setActiveIndex(null))
    handleClick(false)
    resetSearchStyle()
  })

  const EachModal = () => {
    switch (activeIndex) {
      case 0:
        if (selected) {
          return <SearchResultsModal handleClick={handleClick} />
        }
        return <TravelDestinationModal handleClick={handleClick} />
      case 1:
      case 2:
        return (
          <CalenderModal
            dateRange={dateRange}
            setDateRange={setDateRange}
            handleClick={handleClick}
          />
        )
      case 3:
        return <TravelersModal />
      default:
        return null
    }
  }
  return <div ref={modalRef}>{EachModal()}</div>
}

export default SearchModal
