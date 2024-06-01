import Image from 'next/image'
import FooterSection from '@/components/common/Footer/FooterSection'
import FooterInfoItem from '@/components/common/Footer/FooterInfoItem'

function Footer() {
  const FooterItem = [
    {
      title: '에어비앤비 지원',
      items: [
        '도움말 센터',
        '에어커버',
        '차별 반대',
        '장애인 지원',
        '예약 취소 옵션',
        '이웃 민원 신고',
      ],
    },
    {
      title: '호스팅',
      items: [
        '당신의 공간을 에어비앤비하세요',
        '호스트를 위한 에어커버',
        '호스팅 자료',
        '커뮤니티 포럼',
        '책임감 있는 호스팅',
        '무료 호스팅 클래스 참여하기',
      ],
    },
    {
      title: '에어비앤비',
      items: ['뉴스룸', '새로운 기능', '채용정보', '투자자 정보', 'Airbnb 긴급 숙소'],
    },
  ]
  const FooterInfo = [
    {
      title: '© 2024 Airbnb.lnc',
    },
    {
      title: '개인정보 처리방침',
    },
    {
      title: '이용약관',
    },
    {
      title: '사이트맵',
    },
    {
      title: '한국의 변경된 환불 정책',
    },
    {
      title: '회사 세부정보',
    },
  ]
  return (
    <footer className='bg-gray-100 px-20'>
      <div className='mx-[8.5rem] flex flex-col bg-gray-100'>
        <div className='gap-16px grid grid-cols-3 border-y-2 py-[30px]'>
          {FooterItem.map((section, index) => (
            <FooterSection key={index} section={section} />
          ))}
        </div>

        <div className='flex flex-row border-y border-solid border-gray-200 py-[10px]'>
          <div className='flex w-full justify-between'>
            <ul className='flex flex-row items-center pr-10 text-sm'>
              {FooterInfo.map((item, index) => (
                <FooterInfoItem key={index} item={item} index={index} />
              ))}
            </ul>
            <ul className='flex flex-row items-center pr-10 text-sm'>
              <li className='flex pr-2'>
                <Image
                  className='mr-2'
                  alt={'HeaderWorld'}
                  src={`/images/HeaderWorld.svg`}
                  width={18}
                  height={18}
                />
                한국어(KR)
              </li>
              <li className='pr-2'>
                <b>₩</b> KRW
              </li>
              <li>
                <Image alt={'FooterIcon'} src={`/images/FooterIcon.svg`} width={160} height={27} />
              </li>
            </ul>
          </div>
        </div>
        <div>
          <p className='py-5 text-left text-[10px]'>
            웹사이트 제공자: Airbnb Ireland UC, private unlimited company, 8 Hanover Quay Dublin 2,
            D02 DP23 Ireland | 이사: Dermot Clarke, Killian Pattwell, Andrea Finnegan | VAT 번호:
            IE9827384L | 사업자 등록 번호: IE 511825 | 연락처: terms@airbnb.com, 웹사이트,
            080-822-0230 | 호스팅 서비스 제공업체: 아마존 웹서비스 | 에어비앤비는 통신판매 중개자로
            에어비앤비 플랫폼을 통하여 게스트와 호스트 사이에 이루어지는 통신판매의 당사자가
            아닙니다. 에어비앤비 플랫폼을 통하여 예약된 숙소, 체험, 호스트 서비스에 관한 의무와
            책임은 해당 서비스를 제공하는 호스트에게 있습니다.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
