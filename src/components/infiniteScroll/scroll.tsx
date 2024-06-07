'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import Card from '@/components/card/card'
import Link from 'next/link'
import getRoomList from '@/app/apis/fetchMainPage/getRoomsList'

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
  const [id, setId] = useState(41)
  const loaderRef = useRef(null)
  const fields = [
    'accommodationId',
    'accommodationName',
    'imageUrl',
    'guestFavorite',
    'rating',
    'pricePerDay',
  ]
  const fetchAccommodation = useCallback(async () => {
    if (isLoading) return

    setIsLoading(true)

    setAccommodations(await getRoomList(id, fields))

    setId(prevId => prevId + 1)

    setIsLoading(false)
  }, [id, isLoading])

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      const target = entries[0]
      if (target.isIntersecting) {
        fetchAccommodation()
      }
    })

    if (loaderRef.current) {
      observer.observe(loaderRef.current)
    }

    return () => {
      if (loaderRef.current) {
        observer.unobserve(loaderRef.current)
      }
    }
  }, [fetchAccommodation])

  return (
    <div className='container'>
      {accommodations.map((accommodation, index) => (
        <RoomsItem key={`RoomsItem-${index}`} accommodation={accommodation} />
      ))}

      <div ref={loaderRef}></div>
    </div>
  )
}

export default MainInfiniteScroll
