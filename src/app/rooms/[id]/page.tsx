import DetailPageBanner from '@/components/accommodation/detailBanner/DetailPageBanner'
import HostDetail from '@/components/accommodation/hostDetail/HostDetail'
import InfoWrapper from '@/components/accommodation/infoWrapper/InfoWrapper'
import AmenityInfo from '@/components/accommodation/amenityInfo/AmenityInfo'

function AccommodationPage({ params }) {
  const { id } = params

  return (
    <>
      <DetailPageBanner id={id} />
      <InfoWrapper id={id} />
      <AmenityInfo id={id} />
      <HostDetail id={id} />
    </>
  )
}

export default AccommodationPage
