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
  const [id, setId] = useState(21)
  const loaderRef = useRef(null)

  const fetchAccommodation = useCallback(async () => {
    if (id > 340) return
    if (isLoading) return
    const fields = [
      'accommodationId',
      'accommodationName',
      'imageUrl',
      'guestFavorite',
      'rating',
      'pricePerDay',
    ]

    setIsLoading(true)

    const newAccommodation = await getRoomList(id, fields)

    setAccommodations(prev => [...prev, ...newAccommodation])

    setId(prevId => prevId + 20)

    setIsLoading(false)
  }, [id, isLoading])

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
    <>
      {accommodations.map((accommodation, index) => (
        <RoomsItem key={`RoomsItem-${index}`} accommodation={accommodation} />
      ))}
      <div></div>
      <div ref={loaderRef}></div>
    </>
  )
}

export default MainInfiniteScroll
