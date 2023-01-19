import React from 'react'

import { Routes, Route } from 'react-router-dom'

import Medicines from '../Components/Medicines';

const Links = [{path : "/", element : <Medicines></Medicines> }, { path : "/lab", element : <h2>hello are</h2>}, {path : "/consult", element : ''}, { path : "/covid",element :''}, {path : '/ayurveda', element :''},{path : "/care", element :''}];




function AllRoutes() {
  return (
<>
   <Routes>

          {Links.map((el) => (

               <Route key={el.path} path={el.path} element={el.element}/>

          ))}
           




   </Routes>


</>

    
  )
}

export default AllRoutes