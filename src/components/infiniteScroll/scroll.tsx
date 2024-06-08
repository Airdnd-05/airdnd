'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import Card from '@/components/card/card'
import Link from 'next/link'
import getRoomList from '@/app/apis/fetchMainPage/getRoomsList'
import Loader from '@/components/infiniteScroll/Loader'

function RoomsItem({ accommodation }) {
  return (
    <Link href={`/rooms/${accommodation.accommodationId}`}>
      <Card
        accommodationName={accommodation.accommodationName}
        imageUrl={accommodation.imageUrl}
        pricePerDay={accommodation.pricePerDay}
        rating={accommodation.rating}
        guestFavorite={accommodation.guestFavorite}
      />
    </Link>
  )
}

function MainInfiniteScroll() {
  const [accommodations, setAccommodations] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [id, setId] = useState(21)
  const loaderRef = useRef(null)

  const fields = [
    //useMemo
    'accommodationId',
    'accommodationName',
    'imageUrl',
    'guestFavorite',
    'rating',
    'pricePerDay',
  ]

  const fetchAccommodation = useCallback(async () => {
    if (id >= 100) return
    if (isLoading) return

    setIsLoading(true)

    const newAccommodation = await getRoomList(id, fields)
    setAccommodations(prev => [...prev, ...newAccommodation])

    setId(prevId => prevId + 20)

    setIsLoading(false)
  }, [id, isLoading, fields])

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        const target = entries[0]

        if (target.isIntersecting) {
          fetchAccommodation()
        }
      },
      {
        threshold: 0.5,
        rootMargin: '100px',
      },
    )

    const currentLoader = loaderRef.current

    if (currentLoader) {
      observer.observe(currentLoader)
    }

    return () => {
      if (currentLoader) {
        observer.unobserve(currentLoader)
      }
    }
  }, [fetchAccommodation])

  return (
    <div className='mt-8 grid w-full max-w-[1760px] grid-cols-1 gap-4 px-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'>
      {accommodations.map((accommodation, index) => (
        <RoomsItem key={`RoomsItem-${index}`} accommodation={accommodation} />
      ))}
      <div></div>
      <div ref={loaderRef}>{isLoading && <Loader />}</div>
    </div>
  )
}

export default MainInfiniteScroll
