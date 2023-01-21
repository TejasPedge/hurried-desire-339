import { ReactNode } from 'react';
import AddShoppingCartRoundedIcon from '@mui/icons-material/AddShoppingCartRounded';

import { Navigate,useNavigate } from 'react-router-dom';
import {IconButton as MuiIconbtn} from '@mui/material';
import { AddIcon } from '@chakra-ui/icons';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { RepeatIcon } from '@chakra-ui/icons';
import { EditIcon } from '@chakra-ui/icons';


import {
  VStack,
  Box,
  Flex,
  Avatar,
  Text,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  Image,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorMode,
  useColorModeValue,
  Stack,
  
} from '@chakra-ui/react';

import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';

import { NavLink } from 'react-router-dom';

import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { color } from '@mui/system';


const Links = [{to : "/", text : 'MEDICINES'}, { to : "/lab", text : 'LAB TESTS'}, {to : "/consult", text : 'CONSULT DOCTORS'}, { to : "/covid",text :'COVID-19'}, {to : '/ayurveda', text :'AYURVEDA'},{to : "/care", text :'CARE PLAN'}];





export default function Nav() {

  const navigate = useNavigate()
  const { isOpen, onOpen, onClose } = useDisclosure();

  const {colorMode, toggleColorMode} = useColorMode();

  //navigate to home page on clicking on logo

  const returns = () => {

    navigate("/")


  }

  return (
    <>
      <Box bg={useColorModeValue('gray.300', '#0A1929')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
         
  <Menu>

<MenuButton
    as={IconButton}
    aria-label='Options'
    icon={<HamburgerIcon />}
    variant='outline'
    size={'md'}
    display={{ "1349px": 'none' }}
 />


<MenuList bg={'none'} backdropFilter={useColorModeValue('blur(10px)','blur(30px)')} display={{ "1349px": 'none' }} border={colorMode =="dark" ? "1px solid aqua" : "1px solid gray"} boxShadow = {useColorModeValue("5px 5px 10px gray")}>

<Box p="10"  pb={4} display={{ "1349px": 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {Links.map((link) => (
                <NavLink  to = {link.to} style = {({isActive})=> isActive ? { color : colorMode == "light" ? "#0081B4" : "aqua", borderBottom:"2px solid",borderColor : colorMode == "light" ? "#0081B4" : "aqua", width :"150px"} : null} key={link.text}><Text  _hover = {{color:colorMode == "light"? "#0081B4" : "aqua"}}>{link.text}</Text></NavLink>
              ))}


          <Stack display={{'717px' : "none"}}>


            <Text _hover={colorMode == "dark" ? {color : "aqua" ,cursor : "pointer"} : {color: "#3f50b5", cursor : "pointer"}} key = "dfsdf" >Login </Text>
           
            <Text _hover={colorMode == "dark" ? {color : "aqua",cursor : "pointer"} : {color: "#3f50b5",cursor : "pointer"}} key = "djbsd">SignUp</Text> 

            <Text _hover={colorMode == "dark" ? {color : "aqua",cursor : "pointer"} : {color: "#3f50b5",cursor : "pointer"}} key = "rrt"> Offers </Text>

            <AddShoppingCartRoundedIcon /> 

            <Text _hover={colorMode == "dark" ? {color : "aqua",cursor : "pointer"} : {color: "#3f50b5",cursor : "pointer"}} key = "lvm"> Need Help ? </Text>

        </Stack>

                                    



            </Stack>
          </Box>





     
        
    

</MenuList>

</Menu>





          <HStack spacing={8} alignItems={'center'}>
            <Box><Image _hover = {{cursor:"pointer"}} src={useColorModeValue('WebsiteLogo.png','WebsiteLogo2.png')} w = "140px" borderRadius={"10px"} onClick={returns} /></Box>
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'none' , "1349px" : 'flex'  }}>
              {Links.map((link) => (
                 <NavLink  to = {link.to} style = {({isActive})=> isActive ? {fontWeight:"600",color : colorMode == "light" ? "#0081C9" : "skyblue",borderRadius : "20px", border:"2px solid",padding : "5px 10px", transition:"0.2s",borderColor : colorMode == "light" ? "#0081C9" : "skyblue",boxShadow: colorMode == "dark" ? "1px 1px 5px black" : "1px 1px 10px gray" } : {fontWeight:"600"}} key={link.text}><Text  _hover = {{color:colorMode == "light"? "#0081B4" : "aqua"}}>{link.text}</Text></NavLink>
              ))}
            </HStack>
          </HStack>

           {/* Login Sign up starts here  */}

           <HStack mr={"10px"}  w = "400px" justify={"space-between"} display = {{"717px" : "flex", base : "none"}}>

           
           <Text _hover={colorMode == "dark" ? {color : "aqua" ,cursor : "pointer"} : {color: "#3f50b5", cursor : "pointer"}} key = "dfsdf" >Login </Text>
           
           <Text _hover={colorMode == "dark" ? {color : "aqua",cursor : "pointer"} : {color: "#3f50b5",cursor : "pointer"}} key = "djbsd">SignUp</Text> 

           <Text _hover={colorMode == "dark" ? {color : "aqua",cursor : "pointer"} : {color: "#3f50b5",cursor : "pointer"}} key = "rrt"> Offers </Text>

           <AddShoppingCartRoundedIcon className='karticon'/> 

           <Text _hover={colorMode == "dark" ? {color : "aqua",cursor : "pointer"} : {color: "#3f50b5",cursor : "pointer"}} key = "lvm"> Need Help ? </Text>


      
                 
          </HStack>

         

              {/* ------------------------------ */}



          <Flex alignItems={'center'} >

        
              <Button onClick = {toggleColorMode}>
 
              {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}

              </Button>
           
          </Flex>
        </Flex>


      </Box>

    </>
  );
}