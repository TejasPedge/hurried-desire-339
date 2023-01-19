import logo from './logo.svg';
import './App.css';
import { useColorMode } from '@chakra-ui/react';
import Nav from './Components/Navbar';
import Medicines from './Components/Medicines';
import AllRoutes from './Routing/Routes';



function App() {

 


  return (
    <div className="App">
     
       <Nav></Nav>
        
       
       <AllRoutes/>

    </div>
  );
}

export default App;
 