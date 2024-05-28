import DetailPageBanner from '@components/accommodation/detailBanner/DetailPageBanner'
import Layout from '../components/Layout/Layout.jsx'
import HostDetail from '../components/hostDetail/HostDetail.jsx'
import BriefInfo from '../components/briefInfo/BriefInfo.jsx'
import AmenityInfo from '../components/briefInfo/AmenityInfo.jsx'

function AccommodationPage({ params }) {
  const { id } = params

  return (
    <>
      {/* <DetailPageBanner id={id} /> */}
      {/* <BriefInfo id={id} /> */}
      {/* <AmenityInfo id={id} /> */}
      {/* <HostDetail id={id} /> */}
      <div className="flex items-center justify-center bg-red-100 h-[1000px]">
        상세 페이지의 컴포넌트가 위치할 자리입니다
      </div>
    </>
  )
}

export default AccommodationPage
