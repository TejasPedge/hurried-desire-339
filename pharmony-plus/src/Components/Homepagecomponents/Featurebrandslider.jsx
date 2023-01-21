// import React, { useRef, useState } from "react";
// // Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react";

// import { Button } from "@chakra-ui/react";

// import { useSwiper } from 'swiper/react';

// import { Image } from "@chakra-ui/react";


// import { Box } from "@chakra-ui/react";
// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import style from './Slider2.module.css'



// // import required modules
// import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";

// export default function FeatureSlider() {
 

    
 
//     return (
//     <>


//       <Swiper
//         cssMode={true}
//         navigation={true}
//         pagination={true}
//         mousewheel={true}
//         slidesPerView={3}
//         keyboard={true}
//         modules={[Navigation, Pagination, Mousewheel, Keyboard]}
//         className={style.mySwiper2}

//       >

      
//         <SwiperSlide className={style.Swiperslider}><Image src="https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/e5db9a53-a305-4071-ac53-b85632c55768.png"></Image></SwiperSlide>
//         <SwiperSlide className={style.Swiperslider}><Image src="https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/e5db9a53-a305-4071-ac53-b85632c55768.png"></Image></SwiperSlide>
//         <SwiperSlide className={style.Swiperslider}><Image src="https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/e5db9a53-a305-4071-ac53-b85632c55768.png"></Image></SwiperSlide>
//         <SwiperSlide className={style.Swiperslider}><Image src="https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/e5db9a53-a305-4071-ac53-b85632c55768.png"></Image></SwiperSlide>
//         <SwiperSlide className={style.Swiperslider}><Image src="https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/e5db9a53-a305-4071-ac53-b85632c55768.png"></Image></SwiperSlide>
//         <SwiperSlide className={style.Swiperslider}><Image src="https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/e5db9a53-a305-4071-ac53-b85632c55768.png"></Image></SwiperSlide>
//         <SwiperSlide className={style.Swiperslider}><Image src="https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/e5db9a53-a305-4071-ac53-b85632c55768.png"></Image></SwiperSlide>
//         <SwiperSlide className={style.Swiperslider}><Image src="https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/e5db9a53-a305-4071-ac53-b85632c55768.png"></Image></SwiperSlide>
//         <SwiperSlide className={style.Swiperslider}><Image src="https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/e5db9a53-a305-4071-ac53-b85632c55768.png"></Image></SwiperSlide>
 
     

//       </Swiper>
//     </>
//   );
// }



// --------------------------------- //


import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import { Text } from "@chakra-ui/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import style from './Slider2.module.css'

import { Image } from "@chakra-ui/react";

// import required modules
import { Keyboard, Pagination, Navigation } from "swiper";

// -------------------------///



export default function FeatureSlider() {
  return (
    <>
      <Swiper
        navigation={true}
        modules={[Pagination, Navigation]}
        slidesPerView={2}
        
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        breakpoints={{

          0 : {

            slidesPerView : 1,
          },

          341 : {

            slidesPerView : 2,

          },
          
          474 : {

            slidesPerView : 3,

          },

         
          587: {
            slidesPerView: 4,
           
          },
          820: {
            slidesPerView: 4,
         
          },

          1024 : {

            slidesPerView: 5

          },

          1232: {
            slidesPerView: 6,
            
          },

          1409 : {

            slidesPerView: 6,

          },

          1462:{

            slidesPerView: 7,

          },
        }}
       
        className={style.mySwiper2}
      >



        <SwiperSlide className={style.Swiperslider}><Image src="https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/e5db9a53-a305-4071-ac53-b85632c55768.png"></Image><Text textAlign={'center'}>Himalaya</Text></SwiperSlide>
        <SwiperSlide className={style.Swiperslider}><Image src="https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/5eba4f69-4b2c-4fe7-a9cd-1f93ef7489a7.png"></Image><Text textAlign={'center'}>Dr Willmar Schwabe India</Text></SwiperSlide>
        <SwiperSlide className={style.Swiperslider}><Image src="https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/d07e24d0-822d-4ef5-9321-af8e937bede9.png"></Image><Text textAlign={'center'}>Sri Sri Tattva</Text></SwiperSlide>
        <SwiperSlide className={style.Swiperslider}><Image src="https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/361ec068-4f86-4563-a042-e765cedd9910.png"></Image><Text textAlign={'center'}>One Touch</Text></SwiperSlide>
        <SwiperSlide className={style.Swiperslider}><Image src="https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/ec7b0752-ff31-4c22-9655-8e9a00e5d561.png"></Image><Text textAlign={'center'}>Durex</Text></SwiperSlide>
        <SwiperSlide className={style.Swiperslider}><Image src="https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/f36c1e66-f7da-40ad-9902-d20b248e82ee.png"></Image><Text textAlign={'center'}>Zandu</Text></SwiperSlide>
        <SwiperSlide className={style.Swiperslider}><Image src="https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/a90e657f-a68e-426c-9957-44b2377f1088.png"></Image><Text textAlign={'center'}>Gynoveda</Text></SwiperSlide>
        <SwiperSlide className={style.Swiperslider}><Image src="https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/fd33c0e8-f88c-48d2-8411-46d221e8428e.png"></Image><Text textAlign={'center'}>Tejasya Ayurveda</Text></SwiperSlide>
        <SwiperSlide className={style.Swiperslider}><Image src="https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/10330e7c-4796-413c-b2d9-716d446f063e.png"></Image><Text textAlign={'center'}>Tata 1 mg</Text></SwiperSlide>
 
     
      </Swiper>
    </>
  );
}

