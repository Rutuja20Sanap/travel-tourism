import React from 'react';
import Navbar from '../../Components/Navbar';
import img from "./contact.png";
const imgSize={
  height:"700px",
  width:"100%"
  }
function Contact() {
  return (
    <>
    <Navbar/>
    <div>
      <h1 style={{
        color:"grey",
        fontSize:"40px",
        fontStyle:"italic",
        position:"absolute",
        top:"200px",
        left:"700px"
      }}>Contact Us</h1>
    <img src={img} style={imgSize} alt=""></img>
    <p style={{color:
      "rgb(43, 17, 17)",
      fontSize:"30px",
      padding:"60px",
       fontStyle:"italic",
       fontWeight:"bold"
    }}>ContactUs : 9322396408<br/>
    Email : dnyaneshwarsanap293@gmail.com
    </p>
    </div>
    </>
  )
}

export default Contact