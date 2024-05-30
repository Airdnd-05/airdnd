import DetailPageBanner from '@/components/accommodation/detailBanner/DetailPageBanner'
import HostDetail from '@/components/accommodation/hostDetail/HostDetail'
import BriefInfo from '@/components/accommodation/briefInfo/BriefInfo'
import AmenityInfo from '@/components/accommodation/amenityInfo/AmenityInfo'

function AccommodationPage({ params }) {
  const { id } = params
  console.log(id)

  return (
    <>
      <DetailPageBanner />
      <BriefInfo />
      <AmenityInfo />
      <HostDetail />
    </>
  )
}

export default AccommodationPage
