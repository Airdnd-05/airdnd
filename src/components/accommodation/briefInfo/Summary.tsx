'use client'

import GuestFavorite from '@/components/accommodation/briefInfo/GuestFavorite'
import Image from 'next/image'

function Summary({ locationName, briefRoomInfo, guestFavorite, rating, reviewCount }) {
  return (
    <>
      <div className="z-50 flex flex-col justify-between h-auto py-8">
        <section>
          <div className="mb-1">
            <h2 className="text-2xl font-semibold">{locationName}</h2>
          </div>
          <div>
            <ol className="flex flex-row space-x-1">
              {briefRoomInfo.map((info, index) => (
                <li key={index}>
                  {index > 0 && '· '}
                  {info}
                </li>
              ))}
            </ol>
          </div>
          {!guestFavorite && (
            <div className="mt-2">
              <div className="flex items-center gap-1">
                <Image alt={'RatingStar'} src={`/images/RatingStar.svg`} width={32} height={32} />
                <span className="text-base font-semibold">{rating}</span>
                {reviewCount && (
                  <>
                    <span> · </span>
                    <span className="text-base underline cursor-pointer">후기 {reviewCount}개</span>
                  </>
                )}
              </div>
            </div>
          )}
        </section>
      </div>
      {guestFavorite && <GuestFavorite rating={rating} reviewCount={reviewCount} />}
    </>
  )
}

export default Summary
