import logo from './logo.svg';
import './App.css';
import { useColorMode } from '@chakra-ui/react';
import Nav from './Components/Navbar';
import Medicines from './Components/Medicines';
import AllRoutes from './Routing/Routes';
import NextNavbar from './Components/NextNavbar';
import { Box } from '@chakra-ui/react';
import { useColorModeValue } from '@chakra-ui/react';


function App() {

 


  return (
    <>
    
       <Nav></Nav>


        <NextNavbar></NextNavbar>

  
       <AllRoutes/>
       

    </>
  );
}

export default App;
 