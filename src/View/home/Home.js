import React from 'react';
import Navbar from '../../Components/Navbar';
import img from "./home.jpg"
const imgSize={
height:"100%",
width:"100%"
}
function Home() {
  return (
    <>
    <Navbar/>
    <div>
      <h1 style={{
        color:"white",
        fontSize:"40px",
        fontStyle:"italic",
        position:"absolute",
        top:"300px",
        left:"400px"
      }}>Welcome to our Travel-Tour..</h1>
    <img src={img} style={imgSize}></img>
    </div>
    </>
  )
}

export default Home