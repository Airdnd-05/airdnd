import DetailPageBanner from '@/components/accommodation/detailBanner/DetailPageBanner'
import HostDetail from '@/components/accommodation/hostDetail/HostDetail'
import BriefInfo from '@/components/accommodation/briefInfo/BriefInfo'
import AmenityInfo from '@/components/accommodation/amenityInfo/AmenityInfo'
import BedsInfo from '@/components/accommodation/briefInfo/BedsInfo'
// import { AccommodationProvider } from '@/context/AccommodationContext';

function AccommodationPage({ params }) {
  const { id } = params

  return (
    // <AccommodationProvider id={id}>
    <>
      <DetailPageBanner id={id} />
      <BriefInfo id={id} />
      <AmenityInfo id={id} />
      <HostDetail id={id} />
      <BedsInfo />
    </>
    // </AccommodationProvider>
  )
}

export default AccommodationPage
