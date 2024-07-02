import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import logo from "../component/img/header.jpg"
import logo1 from "../component/img/carousel-1.jpg"
import logo2 from "../component/img/carousel-2.jpeg"
import Image from 'next/image';
// Import Swiper styles

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';



export default function Slider() {


    return (
        <>
            <div className="container">

                <Swiper
                    // install Swiper modules
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={50}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
className='mt-1 h-75vh w-100'
                >

                    <SwiperSlide><Image src={logo.src} alt="asda" width={1200} height={500} /></SwiperSlide>
                    <SwiperSlide><Image src={logo1.src} alt="asda" width={1200} height={500} /></SwiperSlide>
                    <SwiperSlide><Image src={logo2.src} alt="asda" width={1200} height={500} /></SwiperSlide>
                    <SwiperSlide><Image src={logo.src} alt="asda" width={1200} height={500} /></SwiperSlide>


                </Swiper>



            </div>
        </>
    );
}
