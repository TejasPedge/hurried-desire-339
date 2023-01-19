import React from 'react'
import style from '../Styles/Dropdown.module.css'
import { Box,Text,HStack,Divider,} from '@chakra-ui/react'

import { useColorMode} from '@chakra-ui/react'


const arr = ['All Diseases','All Medicines','Medicines by Therapeutic Class']





function Dropdown() {

     const {colorMode} = useColorMode();


  return (


    <Box className={style.Dropdown}>
                 
             {arr.map((el)=>{

                 return <Text as='span' fontSize='17' _hover={{color: colorMode=='light'? 'blue.600' : 'aqua',cursor : 'pointer'}} key = {Math.random()}>{el}</Text>

             })}  
      
    </Box>
  )
}






const vitamins1 = [
    
    'Vitamins & Supplements',
    'Multivitamins',
    'Vitamins A-Z',
    'Mineral Supplements',
    'Vitamin B12 & B Complex',
    'Nutritional Drinks',
    'Adult Daily Nutrition',
    'Kids Nutrition (2-15 Yrs)',
    'Women Nutrition',
    'Health Food & Drinks',
    'Green Tea & Herbal Tea',
    'Apple Cider Vinegar',
    'Healthy Snacks'
]

const Vitamins = () => {

    const {colorMode} = useColorMode();

    return <Box className={style.Dropdown2}>

             <HStack w ='600px'>

                     <Box >

                        { vitamins1.map((el,index)=>{

                            return  <Text  _hover={{color: colorMode=='light'? 'blue.600' : 'aqua', cursor : 'pointer'}} mb="2" fontWeight={index=='0' ? 'bolder' : index=='5' ? 'bolder' : null} key = {el}>{el}</Text>

                        })}
                      
                      </Box>

                      <Divider  orientation='vertical' />

                      <Box>

                        { vitamins1.map((el,index)=>{

                            return  <Text  _hover={{color: colorMode=='light'? 'blue.600' : 'aqua', cursor : 'pointer'}} mb="2" fontWeight={index=='0' ? 'bolder' : index=='5' ? 'bolder' : null} key = {el}>{el}</Text>

                        })}
                      
                      </Box>

                      <Divider  orientation='vertical' />

                      <Box>

                        { vitamins1.map((el,index)=>{

                            return  <Text  _hover={{color: colorMode=='light'? 'blue.600' : 'aqua', cursor : 'pointer'}} mb="2" fontWeight={index=='0' ? 'bolder' : index=='5' ? 'bolder' : null} key = {el}>{el}</Text>

                        })}

                        </Box>



                 


             </HStack>
                  

           



      </Box>


}







export default Dropdown

export {Vitamins}
