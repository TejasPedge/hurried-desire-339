import React from 'react'
import FeatureSlider from './Featurebrandslider'
import { Box,HStack,Button,Text } from '@chakra-ui/react'
import { useColorModeValue } from '@chakra-ui/react'



function Featuredbrands() {
  return (

    <>

     <HStack margin={'auto'} w={'93%'} justify={'space-between'} >

           <Text fontSize={[17,18,19]}>Featured brands</Text>

           <Button size={['sm','sm','md']} _hover ={useColorModeValue({backgroundColor : "blue.500"},{backgroundColor: "rgb(35, 184, 144)",color : "white"})}  bg={useColorModeValue("blue.300","rgb(0, 255, 187)") } color="black">SEE ALL</Button>

    </HStack>

     <Box mb={'20px'} bg={'rgba(69, 69, 244, 0.098)'} mt='5' p = '2' py={5}>

     <FeatureSlider />


     </Box>



    </>
  )
}

export default Featuredbrands