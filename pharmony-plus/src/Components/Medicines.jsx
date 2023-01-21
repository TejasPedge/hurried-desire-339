import React from 'react'
import { Box,HStack,VStack,Text,Image,Divider } from '@chakra-ui/react'
import { useColorModeValue } from '@chakra-ui/react';
import Slider from './Slider';
import Featuredbrands from './Homepagecomponents/Featuredbrands';
import { Select } from '@chakra-ui/react';
import FullBody from './Homepagecomponents/FullBody';



function Medicines() {

  document.body.style.backgroundColor = useColorModeValue('#EDF2F7','#001E3C') 



  return (
    <>

    <Box >
    
    <VStack p = '4'>

    <Select noOfLines={1} fontWeight={'bold'} color={'black'} bg={useColorModeValue('blue.300','brand.secondary')} w={'200px'} placeholder='Covid Essentials'>


    <option value = 'option1'>Covid-19 Self test kits</option>  
    <option value="option2">Oxygen Cans & Concentrators</option>
    <option value="option3">Masks</option>
    <option value="option4">Sanitizers & Handwash Products</option>
    <option value="option5">Support Your Immunity</option>
    <option value="option6">Thermometer</option>
    <option value="option7">Chyawanprash</option>
    
</Select>

</VStack>

  
     <HStack p = '4' spacing = '5'  flexDirection={{ base : 'column','865px' : 'row'}}>

        <Slider></Slider>

        <Image _hover={{cursor : 'pointer'}} boxShadow={'1px 1px 5px black'} borderRadius={'20px'} w={{ base : '48%' ,'633px':'50%', '865px' : '33%'}} src='https://onemg.gumlet.io/a_ignore,w_480,h_200,c_fit,q_auto,f_auto/85bbe9a7-230b-4836-bff3-d5f451b426a7.png'></Image>

     </HStack>

     <HStack justify='center'>
 
        <Text textAlign={'center'} fontWeight={'bold'} fontSize={20}>Pharmony ➕: India’s Leading Online Pharmacy & Healthcare Platform</Text>

     </HStack>

    </Box>

  {/* ------------BANNER--------------- */}

    <Divider mt={5} ></Divider>

    <VStack  p='5' >

          <Box w = '95%' >
 
          <Image _hover={{cursor : 'pointer'}} src = 'banner.webp'></Image>

          </Box>

    </VStack>


    {/* -----------Featured Brands----------- */}

             <Featuredbrands></Featuredbrands>

    {/* ---------Full Body health Checkups---------- */}
              
              <FullBody></FullBody>

 

    </>
  )
}

export default Medicines