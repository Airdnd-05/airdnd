import DetailPageBanner from '@/components/detailPage/detailBanner/DetailPageBanner'
import HostDetail from '@/components/detailPage/hostDetail/HostDetailContainer'
import InfoWrapper from '@/components/detailPage/infoWrapper/InfoWrapper'
import AmenityInfo from '@/components/detailPage/amenityInfo/AmenityInfo'
import DetailCalendar from '@/components/detailPage/detailCalendar/DetailCalendar'

function AccommodationPage({ params }) {
  const { id } = params

  return (
    <>
      <DetailPageBanner id={id} />
      <InfoWrapper id={id} />
      <AmenityInfo id={id} />
      <DetailCalendar />
      <HostDetail id={id} />
    </>
  )
}

export default AccommodationPage
