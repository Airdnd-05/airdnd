import DetailPageBanner from '@/components/accommodation/detailBanner/DetailPageBanner'
import HostDetail from '@/components/accommodation/hostDetail/HostDetailContainer'
import InfoWrapper from '@/components/accommodation/infoWrapper/InfoWrapper'
import AmenityInfo from '@/components/accommodation/amenityInfo/AmenityInfo'
import DetailCalendar from '@/components/accommodation/detailCalendar'
import Comment from '@/components/accommodation/comment/comment'

function AccommodationPage({ params }) {
  const { id } = params

  return (
    <>
      <DetailPageBanner id={id} />
      <InfoWrapper id={id} />
      <Comment />
      <AmenityInfo id={id} />

      <DetailCalendar />
      <HostDetail id={id} />
    </>
  )
}

export default AccommodationPage
