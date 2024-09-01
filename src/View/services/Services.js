import Cards from "./../../Components/card.js"
import React from 'react'
import Navbar from '../../Components/Navbar';
import "./Services.css"
 
import { theme,product  } from './../../config/data.js'

function Services() {
  return (
    <div><div>
        <Navbar/>
        <div className="heading" style={{color:theme.backgroundColor}}>
       &emsp;&emsp;Tour Packages&emsp;&emsp;
      </div>
      <div className="cards-main-container">
        {product.map((packages)=>{
        return <Cards
          ImgURL={packages.ImgURL}
          title={packages.title}
          description={packages.description}
        />
    })}
        </div>
        </div>
        </div>
  )
}

export default Services