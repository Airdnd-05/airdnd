/*
  Issue: 현재 공유하기, 저장 버튼의 아이콘 svg가 올바르게 표시되지 않습니다.
  Next.js 14는 SVG를 Next/Image를 사용하거나 컴포넌트화해서 가져와야합니다.
  기존의 img src 방식은 사용할 수 없습니다.
  @svgr/webpack을 사용하여 컴포넌트화 되었으니 코드 리팩토링을 부탁드립니다.
*/

'use client'

import { useState, createContext } from 'react'
import detailPageBanner from '@/app/assets/data/detail-page-banner.json'
import shareIcon from '@icons/shareIcon.svg'
import unUseHeartIcon from '@icons/unUseHeartIcon.svg'
import useHeartIcon from '@icons/useHeartIcon.svg'

const IconContext = createContext({ shareIcon, useHeartIcon, unUseHeartIcon })
const mainImg = detailPageBanner.detailPage1.picMain
const detailImg = [
  detailPageBanner.detailPage1.pic1,
  detailPageBanner.detailPage1.pic2,
  detailPageBanner.detailPage1.pic3,
  detailPageBanner.detailPage1.pic4,
]

const ImgContext = createContext({ mainImg, detailImg })

function IconContextProvider({ children }) {
  return (
    <IconContext.Provider value={{ shareIcon, useHeartIcon, unUseHeartIcon }}>
      <div className="flex items-end">{children}</div>
    </IconContext.Provider>
  )
}

function ImgContextProvider({ children }) {
  return <ImgContext.Provider value={{ mainImg, detailImg }}>{children}</ImgContext.Provider>
}

function MainImgBanner() {
  return (
    <div>
      <ImgContext.Consumer>
        {({ mainImg }) => (
          <img
            className="w-full hover:brightness-75"
            src={mainImg.https}
            // dataOriginalUri={mainImg['data-original-uri']}
            alt="Main Image"
          />
        )}
      </ImgContext.Consumer>
    </div>
  )
}

function EachImgBanner() {
  return (
    <ImgContext.Consumer>
      {({ detailImg }) =>
        detailImg.map((eachImg, index) => (
          <div key={index}>
            <img
              className="w-full hover:brightness-75"
              src={eachImg.https}
              // dataOriginalUri={eachImg['data-original-uri']}
              alt={`Detail Image ${index + 1}`}
            />
          </div>
        ))
      }
    </ImgContext.Consumer>
  )
}

function Banner() {
  return (
    <ImgContextProvider>
      <div className="grid grid-cols-4 grid-rows-2 gap-2 overflow-hidden rounded-lg">
        <div className="col-span-2 row-span-2 -mb-2 -ml-2">
          <MainImgBanner />
        </div>
        <EachImgBanner />
      </div>
    </ImgContextProvider>
  )
}

function BannerTitle({ children }) {
  return <div className="text-2xl font-bold">{children}</div>
}

function HeartButton() {
  const [valid, setValid] = useState(false)
  return (
    <button
      className="flex items-center p-2 transition-all hover:bg-gray-200 hover:rounded-lg"
      onClick={() => setValid(!valid)}>
      <IconContext.Consumer>
        {({ useHeartIcon, unUseHeartIcon }) => (
          <img className="mt-0.5 mr-2 size-5" src={valid ? useHeartIcon : unUseHeartIcon} alt="Heart Icon" />
        )}
      </IconContext.Consumer>
      <div className="pt-1 underline">{valid ? '저장 목록' : '저장'}</div>
    </button>
  )
}

function ShareButton() {
  return (
    <button className="flex p-2 mr-4 hover:bg-gray-200">
      <IconContext.Consumer>
        {({ shareIcon }) => <img className="mt-0.5 mr-2 size-5" src={shareIcon} alt="Share Icon" />}
      </IconContext.Consumer>
      <div className="pt-1 underline">공유하기</div>
    </button>
  )
}

function DetailPageBanner() {
  const titleInfo = detailPageBanner.detailPage1.titleInfo

  return (
    <div className="mt-6">
      <div className="flex justify-between mb-3">
        <BannerTitle>{titleInfo}</BannerTitle>
        <div className="flex">
          <IconContextProvider>
            <ShareButton />
            <HeartButton />
          </IconContextProvider>
        </div>
      </div>
      <Banner />
    </div>
  )
}

export default DetailPageBanner
