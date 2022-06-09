// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import style from "./Slider.module.scss";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";


const Slider = () => {
    return <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
            delay: 2000,
            disableOnInteraction: false,
        }}
        pagination={{
            clickable: true,
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        className={style.mySwiper}>

        <SwiperSlide>
            <img src="/img/contentImg.png" alt=""  />
        </SwiperSlide>
        <SwiperSlide>
            <img src="/img/contentImg.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="/img/contentImg.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="/img/contentImg.png" alt="" />
        </SwiperSlide>
    </Swiper>
}
export default Slider 