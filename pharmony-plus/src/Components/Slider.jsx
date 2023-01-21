import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import { Image } from "@chakra-ui/react";
// // Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import style from "../Styles/Slider.module.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export default function Slider() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}

        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        className={style.mySwiper}
      >

        
        <SwiperSlide className={style.slides}><Image src="Slider1.jpg" /></SwiperSlide>
        <SwiperSlide className={style.slides}><Image src="Slider2.jpg" /></SwiperSlide>
        <SwiperSlide className={style.slides}><Image src="Slider3.png" /></SwiperSlide>
        <SwiperSlide className={style.slides}><Image src="Slider4.jpg" /></SwiperSlide>
        <SwiperSlide className={style.slides}><Image src="Slider5.jpg" /> </SwiperSlide>
        <SwiperSlide className={style.slides}><Image src="Slider6.png" /></SwiperSlide>
        <SwiperSlide className={style.slides}><Image src="Slider7.png" /> </SwiperSlide>
        <SwiperSlide className={style.slides}><Image src="Slider8.jpg" /></SwiperSlide>
        

       
      </Swiper>
    </>
  );

  
}


// // ------------------ ///

// import React, { useRef, useState } from "react";
// // Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react";

// import style from "../Styles/Slider.module.css";

// import { Image } from "@chakra-ui/react";


// import { Autoplay, Pagination, Navigation } from "swiper";

// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/pagination";


// // import required modules

// export default function Slider() {
//   return (
//     <>
// <Swiper
//         spaceBetween={30}
//         centeredSlides={true}
//         autoplay={{
//           delay: 2500,
//           disableOnInteraction: false,
//         }}

//         pagination={{
//           clickable: true,
//         }}
//         navigation={false}
//         modules={[Autoplay]}
//         className={style.mySwiper}
//       >

        
//         <SwiperSlide className={style.slides}><Image src="Slider1.jpg" /></SwiperSlide>
//         <SwiperSlide className={style.slides}><Image src="Slider2.jpg" /></SwiperSlide>
//         <SwiperSlide className={style.slides}><Image src="Slider3.png" /></SwiperSlide>
//         <SwiperSlide className={style.slides}><Image src="Slider4.jpg" /></SwiperSlide>
//         <SwiperSlide className={style.slides}><Image src="Slider5.jpg" /> </SwiperSlide>
//         <SwiperSlide className={style.slides}><Image src="Slider6.png" /></SwiperSlide>
//         <SwiperSlide className={style.slides}><Image src="Slider7.png" /> </SwiperSlide>
//         <SwiperSlide className={style.slides}><Image src="Slider8.jpg" /></SwiperSlide>
        

       
//       </Swiper>
//     </>

//   );
// }
