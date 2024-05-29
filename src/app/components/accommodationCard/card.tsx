'use client'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import  "@/app/components/accommodationCard/cardCss.css"
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import briefInfo from '@/app/assets/data/brief-info.json'
import RatingStar from '@/app/assets/icons/RatingStar.svg'


const bannerImg = briefInfo.accommodationInfo[0].imageUrl


function Card(){

    return(
<div className="w-[303px] h-[387px] relative bg-white rounded-xl">
    <div className="w-[303px] h-[287px] left-0 top-0 absolute bg-zinc-400 rounded-xl">

        <Swiper
                className="w-full h-full  rounded-xl absolute flex-col justify-start items-start gap-2 inline-flex" 
                cssMode={true}
                navigation={true}
                pagination={true}
                mousewheel={true}
                keyboard={true}
                modules={[Navigation, Pagination, Mousewheel, Keyboard]}
            >
            {bannerImg.map((eachBanner, index) => (
                <SwiperSlide className="w-full h-full rounded-xl"key={index}>
                    <img  className='w-full h-full rounded-xl'              
                    src={eachBanner}
                    />
                </SwiperSlide>
                ))}
            </Swiper>

    </div>

    <div className="w-6 h-6 left-[263px] top-[16px] absolute"></div>
    
    <div className="w-full left-0 top-[303px] absolute flex-col justify-start items-start gap-2 inline-flex">

            <div className='flex flex-row  w-full flex-shrink-0 '>
            <div className=" w-[85%]  truncate overflow-hidden  font-bold">Gapyeong-eup, Gapyeong-gun, 한국의 돔하우스의 개인실</div>
            <div className='flex flex-row'>
                <RatingStar></RatingStar>
               
                <div className=" ml-[1rem] w-[15%] "> ★4.91</div>
            
            </div>
            </div>
            

        <div className="justify-start items-center gap-1 inline-flex">
            <div><span className="text-neutral-800 text-sm font-bold">₩630,977</span><span>/박</span></div>
        </div>
    </div>
    <div className="left-[255px] top-[303px] absolute justify-end items-center gap-1 inline-flex">
       
    </div>

</div>
    )
}

export default Card