import DetailPageBanner from '@/components/accommodation/detailBanner/DetailPageBanner'
import HostDetail from '@/components/accommodation/hostDetail/HostDetail'
import BriefInfo from '@/components/accommodation/briefInfo/BriefInfo'
import AmenityInfo from '@/components/accommodation/amenityInfo/AmenityInfo'
import BedsInfo from '@/components/accommodation/briefInfo/BedsInfo'

function AccommodationPage({ params }) {
  const { id } = params
  console.log(id)

  return (
    <>
      <DetailPageBanner />
      <BriefInfo />
      <AmenityInfo />
      <HostDetail />
      <BedsInfo />
    </>
  )
}

export default AccommodationPage
