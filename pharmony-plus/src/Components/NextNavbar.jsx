import React from 'react'
import style from '../Styles/Dropdown.module.css'
import {Box,SimpleGrid,HStack,VStack,Grid,InputRightElement,Stack,Text,Input,InputGroup,InputLeftElement, Button,IconButton} from "@chakra-ui/react"
import { SearchIcon } from '@chakra-ui/icons';
import LocationOnSharpIcon from '@mui/icons-material/LocationOnSharp';
import { ChevronDownIcon } from '@chakra-ui/icons';
import MyLocationIcon from '@mui/icons-material/MyLocation';
import Dropdown from './Dropdown';
import { useColorModeValue } from '@chakra-ui/react'
import { Vitamins } from './Dropdown';

function NextNavbar() {
  return (

    <>
<HStack p = "2" justify={"space-between"} borderTop={"1px solid gray"} bg={useColorModeValue('gray.300', '#0A1929')}>

   {/*-------------Location input--------------  */}
<HStack>

            <Stack spacing={4}>
                
            
                    <InputGroup>
                        <InputLeftElement
                        color='gray.300'
                        fontSize='1.2em'
                        children={<LocationOnSharpIcon sx={ {color : useColorModeValue("black","rgb(0, 255, 187)")}} />}
                        />
                        <Input _focus={{backgroundColor : useColorModeValue("white")}}  variant={"filled"} defaultValue = "New Delhi" />
                        <InputRightElement className='locate' children={<MyLocationIcon sx={ {color : useColorModeValue("black","rgb(0, 255, 187)")}}/>} />
                    </InputGroup>

                </Stack>

                {/*------------------------- Search bar--------------- */}

                <Stack spacing={4}>

                <InputGroup>
                    <InputLeftElement 
                    
                    children={<IconButton  variant = "none" colorScheme='blue' aria-label='Search database' icon={<SearchIcon display={{'base': 'none','1022px': 'flex' ,'1220px' : "flex"}}  />}
                    />}
                    />
                    <Input _focus={{backgroundColor : useColorModeValue("white")}} variant={useColorModeValue("filled")} display={{'base': 'none','1022px': 'flex' ,'1220px' : "flex"}}    w = {{base:'0px','976px': '230px','1022px': '300px' ,'1220px' : "500px"}} type='search' placeholder='Search for Medicines and Health Products' />
                </InputGroup>

                </Stack>

</HStack>


    <HStack spacing={4} w = "450px">

           
         <Text noOfLines={"1"}>⚡ QUICK BUY! Get 25% off on medicines*</Text>

         <Box>
         <Button variant={"none"} _hover ={useColorModeValue({backgroundColor : "blue.500"},{backgroundColor: "rgb(35, 184, 144)",color : "white"})}  bg={useColorModeValue("blue.300","rgb(0, 255, 187)") } color="black">Quick Order</Button>
         </Box>
    

    </HStack>

</HStack>


      <VStack display={{'base': 'flex','1022px': 'none' ,'1220px' : "none"}} borderTop={"1px solid gray"} bg={useColorModeValue('gray.300', '#0A1929')} p="3">

         <Stack spacing={4} w="100%">

                <InputGroup w="90%" m="auto">
                    <InputLeftElement 
                    
                    children={<IconButton  variant = "none" colorScheme='blue' aria-label='Search database' icon={<SearchIcon/>}
                    />}
                    />
                    <Input _focus={{backgroundColor : useColorModeValue("white")}} variant={useColorModeValue("filled")}   type='search' placeholder='Search for Medicines and Health Products' />
                </InputGroup>

                </Stack>



      </VStack>

      <SimpleGrid  gap={2}  columns={{'1074px' : '5', '867px':'4','653px':'3',base:'2'}} borderTop={"1px solid gray"} bg={useColorModeValue('gray.300', '#0A1929')} p="3">

            <Box className={style.parent}>
                
                <Text _hover = {{cursor : 'pointer'}} textAlign={"center"} >Health Resource Center <ChevronDownIcon boxSize={6}/></Text>

                <Dropdown></Dropdown>
                
            </Box>  

             <Box className={style.parent2}>

                <Text _hover = {{cursor : 'pointer'}}  textAlign={"center"}>Vitamins & Nutrition <ChevronDownIcon boxSize={6}/></Text>
                
                <Vitamins></Vitamins>

             </Box> 

              <Text _hover = {{cursor : 'pointer'}}  textAlign={"center"}>Diabetes <ChevronDownIcon boxSize={6}/></Text>

              <Text _hover = {{cursor : 'pointer'}}  textAlign={"center"}>Healthcare Devices <ChevronDownIcon boxSize={6}/></Text>

              <Text _hover = {{cursor : 'pointer'}}  textAlign={"center"}>Personal Care <ChevronDownIcon boxSize={6}/></Text>

              <Text _hover = {{cursor : 'pointer'}}  textAlign={"center"}>Health Conditions <ChevronDownIcon boxSize={6}/></Text>

              <Text _hover = {{cursor : 'pointer'}}  textAlign={"center"}>Ayurveda Products <ChevronDownIcon boxSize={6}/></Text>

              <Text _hover = {{cursor : 'pointer'}}  textAlign={"center"}>Homeopathy <ChevronDownIcon boxSize={6}/></Text>

              <Text _hover = {{cursor : 'pointer'}}  textAlign={"center"}>Featured <ChevronDownIcon boxSize={6}/></Text>

              <Text _hover = {{cursor : 'pointer'}}  textAlign={"center"}>Covid Essentials <ChevronDownIcon boxSize={6}/></Text>

      </SimpleGrid>


   



</>

  )
}

export default NextNavbar