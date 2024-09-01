import React from 'react';
import Navbar from '../../Components/Navbar';
import img from "./about.jpg"
const imgSize={
  height:"600px",
  width:"100%"
  }
function About() {
  return (
    <>
    <Navbar/>
    <div>
      <h1 style={{
        color:"white",
        fontSize:"40px",
        fontStyle:"italic",
        position:"absolute",
        top:"200px",
        left:"700px"
      }}>About Us</h1>
    <img src={img} style={imgSize} alt=""></img>
    <p style={{color:
      "rgb(43, 17, 17)",
      fontSize:"20px",
      padding:"20px",
       fontStyle:"italic"
    }}>Overview: India, with its diverse culture, history, and natural beauty, offers a wide range of travel experiences for tourists. Whether you're seeking adventure, relaxation, spiritual enlightenment, or cultural immersion, India has something for everyone. Here’s a detailed guide to some popular travel tour packages in India.
    Explore the historic Red Fort and Qutub Minar in Delhi.
Visit the iconic Taj Mahal and Agra Fort in Agra.
Discover the royal palaces and vibrant bazaars of Jaipur.
All packages are customizable to suit your preferences.
Early booking discounts available.
Prices are subject to availability and may change without prior notice.
All bookings require a minimum deposit at the time of confirmation.
Cancellations made within 15 days of departure will incur a cancellation fee.
    </p>
    </div>
    </>
  )
}

export default About