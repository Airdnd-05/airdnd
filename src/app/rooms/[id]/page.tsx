import DetailPageBanner from '@/components/accommodation/detailBanner/DetailPageBanner'
import HostDetail from '@/components/accommodation/hostDetail/HostDetailContainer'
import InfoWrapper from '@/components/accommodation/infoWrapper/InfoWrapper'
import AmenityInfo from '@/components/accommodation/amenityInfo/AmenityInfo'
import Calendar from '@/components/calendar/calendar'

function AccommodationPage({ params }) {
  const { id } = params

  return (
    <>
      <DetailPageBanner id={id} />
      <InfoWrapper id={id} />
      <AmenityInfo id={id} />
      <Calendar months={3} />
      <HostDetail id={id} />
    </>
  )
}

export default AccommodationPage
