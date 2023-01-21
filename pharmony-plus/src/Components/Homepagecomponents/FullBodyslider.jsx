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

// export default function FullBodyslider() {
 

    
 
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
import StarRateRoundedIcon from '@mui/icons-material/StarRateRounded';

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import { Text,HStack } from "@chakra-ui/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import style from './BodySlider.module.css'

import { Image,useColorMode,Box,useColorModeValue} from "@chakra-ui/react";

// import required modules
import { Keyboard, Pagination, Navigation } from "swiper";

import HealthAndSafetyRoundedIcon from '@mui/icons-material/HealthAndSafetyRounded';
import { BrandingWatermark } from "@mui/icons-material";
// -------------------------///



export default function FullBodyslider() {

      const {colorMode} = useColorMode();

  return (
    <>
      <Swiper
        navigation={true}
        modules={[Pagination, Navigation]}
        slidesPerView={1}
        
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        breakpoints={{




            481 : {
 

                slidesPerView: 2


            },

          736 : {

            slidesPerView: 3,

          },

          1244:{

            slidesPerView: 4,

          },
        }}
       
        className={style.mySwiper2}
      >



        <SwiperSlide className={style.Swiperslider} >
            
            {/* ---Safe tag--- */}

        <Box _hover={{cursor : 'pointer'}} p='13px' bg={useColorModeValue('white','none')}>
            
            <HStack>

                <Text  fontWeight = 'bold' noOfLines={1}>Comprehensive Gold Full ...</Text>


                <HStack className={style.Safe} w='90px' borderRadius={'10px'} p='2px' border={'1px solid'} borderColor= { colorMode=='light' ? 'brand.primary' : 'brand.secondary'}>

                <HealthAndSafetyRoundedIcon sx={{color : colorMode=='light' ? 'rgb(60, 165, 235)' : 'rgb(0, 255, 187)' }} />

                <Text>SAFE</Text>


             </HStack>

            </HStack>

            <Text color={'gray'} fontSize={15}>Includes 78 tests</Text>

            <HStack mt='2'> 

                  <Box w = '70px' bg={'gray.300'} border='1px solid gray'>

                  <Image w = '100%' src="https://onemg.gumlet.io/diagnostics/b1f8f81e-5677-11ec-9fd9-0a65f29f7340.png?format=auto"></Image>

                  </Box>

                   <HStack px={1} borderRadius={'10px'} color={'black'} bg = {useColorModeValue('brand.primary','brand.secondary')}>
                          
                          <Text fontWeight={'bold'} fontSize={'13'}>4.9</Text>

                            < StarRateRoundedIcon sx={{width:'18px'}} />

                   </HStack>

                   <Text fontSize={'13'}>ISO</Text>

            </HStack>

            <HStack>

                   <Text fontSize={18}>₹ 2099</Text>

                   <Text fontSize={13} as='delete'>₹ 4198</Text>

                   <Text color={useColorModeValue('brand.primary','brand.secondary')} px={1} fontSize='14' border='1px dashed' borderColor={useColorModeValue('brand.primary','brand.secondary')}>50% Off</Text>

            </HStack>

                   

     


           
            </Box>
        </SwiperSlide>


{/* -----------------2---------------- */}
     
<SwiperSlide className={style.Swiperslider} >
            
            {/* ---Safe tag--- */}

        <Box _hover={{cursor : 'pointer'}} p='13px' bg={useColorModeValue('white','none')}>
            
            <HStack>

                <Text  fontWeight = 'bold' noOfLines={1}>Comprehensive Gold Full ...</Text>


                <HStack className={style.Safe} w='90px' borderRadius={'10px'} p='2px' border={'1px solid'} borderColor= { colorMode=='light' ? 'brand.primary' : 'brand.secondary'}>

                <HealthAndSafetyRoundedIcon sx={{color : colorMode=='light' ? 'rgb(60, 165, 235)' : 'rgb(0, 255, 187)' }} />

                <Text>SAFE</Text>


             </HStack>

            </HStack>

            <Text color={'gray'} fontSize={15}>Includes 78 tests</Text>

            <HStack mt='2'> 

                  <Box w = '70px' bg={'gray.300'} border='1px solid gray'>

                  <Image w = '100%' src="https://onemg.gumlet.io/diagnostics/b1f8f81e-5677-11ec-9fd9-0a65f29f7340.png?format=auto"></Image>

                  </Box>

                   <HStack px={1} borderRadius={'10px'} color={'black'} bg = {useColorModeValue('brand.primary','brand.secondary')}>
                          
                          <Text fontWeight={'bold'} fontSize={'13'}>4.9</Text>

                            < StarRateRoundedIcon sx={{width:'18px'}} />

                   </HStack>

                   <Text fontSize={'13'}>ISO</Text>

            </HStack>

            <HStack>

                   <Text fontSize={18}>₹ 2099</Text>

                   <Text fontSize={13} as='delete'>₹ 4198</Text>

                   <Text color={useColorModeValue('brand.primary','brand.secondary')} px={1} fontSize='14' border='1px dashed' borderColor={useColorModeValue('brand.primary','brand.secondary')}>50% Off</Text>

            </HStack>

                   

     


           
            </Box>
        </SwiperSlide>


{/* -------------------3----------------------- */}


<SwiperSlide className={style.Swiperslider} >
            
            {/* ---Safe tag--- */}

        <Box _hover={{cursor : 'pointer'}} p='13px' bg={useColorModeValue('white','none')}>
            
            <HStack>

                <Text  fontWeight = 'bold' noOfLines={1}>Comprehensive Gold Full ...</Text>


                <HStack className={style.Safe} w='90px' borderRadius={'10px'} p='2px' border={'1px solid'} borderColor= { colorMode=='light' ? 'brand.primary' : 'brand.secondary'}>

                <HealthAndSafetyRoundedIcon sx={{color : colorMode=='light' ? 'rgb(60, 165, 235)' : 'rgb(0, 255, 187)' }} />

                <Text>SAFE</Text>


             </HStack>

            </HStack>

            <Text color={'gray'} fontSize={15}>Includes 78 tests</Text>

            <HStack mt='2'> 

                  <Box w = '70px' bg={'gray.300'} border='1px solid gray'>

                  <Image w = '100%' src="https://onemg.gumlet.io/diagnostics/b1f8f81e-5677-11ec-9fd9-0a65f29f7340.png?format=auto"></Image>

                  </Box>

                   <HStack px={1} borderRadius={'10px'} color={'black'} bg = {useColorModeValue('brand.primary','brand.secondary')}>
                          
                          <Text fontWeight={'bold'} fontSize={'13'}>4.9</Text>

                            < StarRateRoundedIcon sx={{width:'18px'}} />

                   </HStack>

                   <Text fontSize={'13'}>ISO</Text>

            </HStack>

            <HStack>

                   <Text fontSize={18}>₹ 2099</Text>

                   <Text fontSize={13} as='delete'>₹ 4198</Text>

                   <Text color={useColorModeValue('brand.primary','brand.secondary')} px={1} fontSize='14' border='1px dashed' borderColor={useColorModeValue('brand.primary','brand.secondary')}>50% Off</Text>

            </HStack>

                   

     


           
            </Box>
        </SwiperSlide>

{/* -----------------------4--------------- */}



<SwiperSlide className={style.Swiperslider} >
            
            {/* ---Safe tag--- */}

        <Box _hover={{cursor : 'pointer'}} p='13px' bg={useColorModeValue('white','none')}>
            
            <HStack>

                <Text  fontWeight = 'bold' noOfLines={1}>Comprehensive Gold Full ...</Text>


                <HStack className={style.Safe} w='90px' borderRadius={'10px'} p='2px' border={'1px solid'} borderColor= { colorMode=='light' ? 'brand.primary' : 'brand.secondary'}>

                <HealthAndSafetyRoundedIcon sx={{color : colorMode=='light' ? 'rgb(60, 165, 235)' : 'rgb(0, 255, 187)' }} />

                <Text>SAFE</Text>


             </HStack>

            </HStack>

            <Text color={'gray'} fontSize={15}>Includes 78 tests</Text>

            <HStack mt='2'> 

                  <Box w = '70px' bg={'gray.300'} border='1px solid gray'>

                  <Image w = '100%' src="https://onemg.gumlet.io/diagnostics/b1f8f81e-5677-11ec-9fd9-0a65f29f7340.png?format=auto"></Image>

                  </Box>

                   <HStack px={1} borderRadius={'10px'} color={'black'} bg = {useColorModeValue('brand.primary','brand.secondary')}>
                          
                          <Text fontWeight={'bold'} fontSize={'13'}>4.9</Text>

                            < StarRateRoundedIcon sx={{width:'18px'}} />

                   </HStack>

                   <Text fontSize={'13'}>ISO</Text>

            </HStack>

            <HStack>

                   <Text fontSize={18}>₹ 2099</Text>

                   <Text fontSize={13} as='delete'>₹ 4198</Text>

                   <Text color={useColorModeValue('brand.primary','brand.secondary')} px={1} fontSize='14' border='1px dashed' borderColor={useColorModeValue('brand.primary','brand.secondary')}>50% Off</Text>

            </HStack>

                   

     


           
            </Box>
        </SwiperSlide>


{/* ------------------5--------------- */}


<SwiperSlide className={style.Swiperslider} >
            
            {/* ---Safe tag--- */}

        <Box _hover={{cursor : 'pointer'}} p='13px' bg={useColorModeValue('white','none')}>
            
            <HStack>

                <Text  fontWeight = 'bold' noOfLines={1}>Comprehensive Gold Full ...</Text>


                <HStack className={style.Safe} w='90px' borderRadius={'10px'} p='2px' border={'1px solid'} borderColor= { colorMode=='light' ? 'brand.primary' : 'brand.secondary'}>

                <HealthAndSafetyRoundedIcon sx={{color : colorMode=='light' ? 'rgb(60, 165, 235)' : 'rgb(0, 255, 187)' }} />

                <Text>SAFE</Text>


             </HStack>

            </HStack>

            <Text color={'gray'} fontSize={15}>Includes 78 tests</Text>

            <HStack mt='2'> 

                  <Box w = '70px' bg={'gray.300'} border='1px solid gray'>

                  <Image w = '100%' src="https://onemg.gumlet.io/diagnostics/b1f8f81e-5677-11ec-9fd9-0a65f29f7340.png?format=auto"></Image>

                  </Box>

                   <HStack px={1} borderRadius={'10px'} color={'black'} bg = {useColorModeValue('brand.primary','brand.secondary')}>
                          
                          <Text fontWeight={'bold'} fontSize={'13'}>4.9</Text>

                            < StarRateRoundedIcon sx={{width:'18px'}} />

                   </HStack>

                   <Text fontSize={'13'}>ISO</Text>

            </HStack>

            <HStack>

                   <Text fontSize={18}>₹ 2099</Text>

                   <Text fontSize={13} as='delete'>₹ 4198</Text>

                   <Text color={useColorModeValue('brand.primary','brand.secondary')} px={1} fontSize='14' border='1px dashed' borderColor={useColorModeValue('brand.primary','brand.secondary')}>50% Off</Text>

            </HStack>

                   

     


           
            </Box>
        </SwiperSlide>


{/* ------------------6------------------ */}

<SwiperSlide className={style.Swiperslider} >
            
            {/* ---Safe tag--- */}

        <Box _hover={{cursor : 'pointer'}} p='13px' bg={useColorModeValue('white','none')}>
            
            <HStack>

                <Text  fontWeight = 'bold' noOfLines={1}>Comprehensive Gold Full ...</Text>


                <HStack className={style.Safe} w='90px' borderRadius={'10px'} p='2px' border={'1px solid'} borderColor= { colorMode=='light' ? 'brand.primary' : 'brand.secondary'}>

                <HealthAndSafetyRoundedIcon sx={{color : colorMode=='light' ? 'rgb(60, 165, 235)' : 'rgb(0, 255, 187)' }} />

                <Text>SAFE</Text>


             </HStack>

            </HStack>

            <Text color={'gray'} fontSize={15}>Includes 78 tests</Text>

            <HStack mt='2'> 

                  <Box w = '70px' bg={'gray.300'} border='1px solid gray'>

                  <Image w = '100%' src="https://onemg.gumlet.io/diagnostics/b1f8f81e-5677-11ec-9fd9-0a65f29f7340.png?format=auto"></Image>

                  </Box>

                   <HStack px={1} borderRadius={'10px'} color={'black'} bg = {useColorModeValue('brand.primary','brand.secondary')}>
                          
                          <Text fontWeight={'bold'} fontSize={'13'}>4.9</Text>

                            < StarRateRoundedIcon sx={{width:'18px'}} />

                   </HStack>

                   <Text fontSize={'13'}>ISO</Text>

            </HStack>

            <HStack>

                   <Text fontSize={18}>₹ 2099</Text>

                   <Text fontSize={13} as='delete'>₹ 4198</Text>

                   <Text color={useColorModeValue('brand.primary','brand.secondary')} px={1} fontSize='14' border='1px dashed' borderColor={useColorModeValue('brand.primary','brand.secondary')}>50% Off</Text>

            </HStack>

                   

     


           
            </Box>
        </SwiperSlide>

{/* -----------------------7----------------- */}


<SwiperSlide className={style.Swiperslider} >
            
            {/* ---Safe tag--- */}

        <Box _hover={{cursor : 'pointer'}} p='13px' bg={useColorModeValue('white','none')}>
            
            <HStack>

                <Text  fontWeight = 'bold' noOfLines={1}>Comprehensive Gold Full ...</Text>


                <HStack className={style.Safe} w='90px' borderRadius={'10px'} p='2px' border={'1px solid'} borderColor= { colorMode=='light' ? 'brand.primary' : 'brand.secondary'}>

                <HealthAndSafetyRoundedIcon sx={{color : colorMode=='light' ? 'rgb(60, 165, 235)' : 'rgb(0, 255, 187)' }} />

                <Text>SAFE</Text>


             </HStack>

            </HStack>

            <Text color={'gray'} fontSize={15}>Includes 78 tests</Text>

            <HStack mt='2'> 

                  <Box w = '70px' bg={'gray.300'} border='1px solid gray'>

                  <Image w = '100%' src="https://onemg.gumlet.io/diagnostics/b1f8f81e-5677-11ec-9fd9-0a65f29f7340.png?format=auto"></Image>

                  </Box>

                   <HStack px={1} borderRadius={'10px'} color={'black'} bg = {useColorModeValue('brand.primary','brand.secondary')}>
                          
                          <Text fontWeight={'bold'} fontSize={'13'}>4.9</Text>

                            < StarRateRoundedIcon sx={{width:'18px'}} />

                   </HStack>

                   <Text fontSize={'13'}>ISO</Text>

            </HStack>

            <HStack>

                   <Text fontSize={18}>₹ 2099</Text>

                   <Text fontSize={13} as='delete'>₹ 4198</Text>

                   <Text color={useColorModeValue('brand.primary','brand.secondary')} px={1} fontSize='14' border='1px dashed' borderColor={useColorModeValue('brand.primary','brand.secondary')}>50% Off</Text>

            </HStack>

                   

     


           
            </Box>
        </SwiperSlide>


{/* --------------------8----------------- */}

<SwiperSlide className={style.Swiperslider} >
            
            {/* ---Safe tag--- */}

        <Box _hover={{cursor : 'pointer'}} p='13px' bg={useColorModeValue('white','none')}>
            
            <HStack>

                <Text  fontWeight = 'bold' noOfLines={1}>Comprehensive Gold Full ...</Text>


                <HStack className={style.Safe} w='90px' borderRadius={'10px'} p='2px' border={'1px solid'} borderColor= { colorMode=='light' ? 'brand.primary' : 'brand.secondary'}>

                <HealthAndSafetyRoundedIcon sx={{color : colorMode=='light' ? 'rgb(60, 165, 235)' : 'rgb(0, 255, 187)' }} />

                <Text>SAFE</Text>


             </HStack>

            </HStack>

            <Text color={'gray'} fontSize={15}>Includes 78 tests</Text>

            <HStack mt='2'> 

                  <Box w = '70px' bg={'gray.300'} border='1px solid gray'>

                  <Image w = '100%' src="https://onemg.gumlet.io/diagnostics/b1f8f81e-5677-11ec-9fd9-0a65f29f7340.png?format=auto"></Image>

                  </Box>

                   <HStack px={1} borderRadius={'10px'} color={'black'} bg = {useColorModeValue('brand.primary','brand.secondary')}>
                          
                          <Text fontWeight={'bold'} fontSize={'13'}>4.9</Text>

                            < StarRateRoundedIcon sx={{width:'18px'}} />

                   </HStack>

                   <Text fontSize={'13'}>ISO</Text>

            </HStack>

            <HStack>

                   <Text fontSize={18}>₹ 2099</Text>

                   <Text fontSize={13} as='delete'>₹ 4198</Text>

                   <Text color={useColorModeValue('brand.primary','brand.secondary')} px={1} fontSize='14' border='1px dashed' borderColor={useColorModeValue('brand.primary','brand.secondary')}>50% Off</Text>

            </HStack>

                   

     


           
            </Box>
        </SwiperSlide>


{/* -------------------------9--------------------- */}


<SwiperSlide className={style.Swiperslider} >
            
            {/* ---Safe tag--- */}

        <Box _hover={{cursor : 'pointer'}} p='13px' bg={useColorModeValue('white','none')}>
            
            <HStack>

                <Text  fontWeight = 'bold' noOfLines={1}>Comprehensive Gold Full ...</Text>


                <HStack className={style.Safe} w='90px' borderRadius={'10px'} p='2px' border={'1px solid'} borderColor= { colorMode=='light' ? 'brand.primary' : 'brand.secondary'}>

                <HealthAndSafetyRoundedIcon sx={{color : colorMode=='light' ? 'rgb(60, 165, 235)' : 'rgb(0, 255, 187)' }} />

                <Text>SAFE</Text>


             </HStack>

            </HStack>

            <Text color={'gray'} fontSize={15}>Includes 78 tests</Text>

            <HStack mt='2'> 

                  <Box w = '70px' bg={'gray.300'} border='1px solid gray'>

                  <Image w = '100%' src="https://onemg.gumlet.io/diagnostics/b1f8f81e-5677-11ec-9fd9-0a65f29f7340.png?format=auto"></Image>

                  </Box>

                   <HStack px={1} borderRadius={'10px'} color={'black'} bg = {useColorModeValue('brand.primary','brand.secondary')}>
                          
                          <Text fontWeight={'bold'} fontSize={'13'}>4.9</Text>

                            < StarRateRoundedIcon sx={{width:'18px'}} />

                   </HStack>

                   <Text fontSize={'13'}>ISO</Text>

            </HStack>

            <HStack>

                   <Text fontSize={18}>₹ 2099</Text>

                   <Text fontSize={13} as='delete'>₹ 4198</Text>

                   <Text color={useColorModeValue('brand.primary','brand.secondary')} px={1} fontSize='14' border='1px dashed' borderColor={useColorModeValue('brand.primary','brand.secondary')}>50% Off</Text>

            </HStack>

                   

     


           
            </Box>
        </SwiperSlide>

{/* -------------------------10-------------------- */}


<SwiperSlide className={style.Swiperslider} >
            
            {/* ---Safe tag--- */}

        <Box _hover={{cursor : 'pointer'}} p='13px' bg={useColorModeValue('white','none')}>
            
            <HStack>

                <Text  fontWeight = 'bold' noOfLines={1}>Comprehensive Gold Full ...</Text>


                <HStack className={style.Safe} w='90px' borderRadius={'10px'} p='2px' border={'1px solid'} borderColor= { colorMode=='light' ? 'brand.primary' : 'brand.secondary'}>

                <HealthAndSafetyRoundedIcon sx={{color : colorMode=='light' ? 'rgb(60, 165, 235)' : 'rgb(0, 255, 187)' }} />

                <Text>SAFE</Text>


             </HStack>

            </HStack>

            <Text color={'gray'} fontSize={15}>Includes 78 tests</Text>

            <HStack mt='2'> 

                  <Box w = '70px' bg={'gray.300'} border='1px solid gray'>

                  <Image w = '100%' src="https://onemg.gumlet.io/diagnostics/b1f8f81e-5677-11ec-9fd9-0a65f29f7340.png?format=auto"></Image>

                  </Box>

                   <HStack px={1} borderRadius={'10px'} color={'black'} bg = {useColorModeValue('brand.primary','brand.secondary')}>
                          
                          <Text fontWeight={'bold'} fontSize={'13'}>4.9</Text>

                            < StarRateRoundedIcon sx={{width:'18px'}} />

                   </HStack>

                   <Text fontSize={'13'}>ISO</Text>

            </HStack>

            <HStack>

                   <Text fontSize={18}>₹ 2099</Text>

                   <Text fontSize={13} as='delete'>₹ 4198</Text>

                   <Text color={useColorModeValue('brand.primary','brand.secondary')} px={1} fontSize='14' border='1px dashed' borderColor={useColorModeValue('brand.primary','brand.secondary')}>50% Off</Text>

            </HStack>

                   

     


           
            </Box>
        </SwiperSlide>

{/* ------------------------------------------------- */}





     
      </Swiper>
    </>
  );
}

