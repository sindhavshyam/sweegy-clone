import React from 'react'
import Navbar from './Navbar';
import Catagory from './Catagory';
import Location from './Location';
import Explore from './Explore';



function Home() {
  return (  
    <div>
      <Navbar/>
      <Location/>
      <Catagory/>
      <Explore/>
    </div>
  )
}

export default Home
