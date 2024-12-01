import React from 'react'
import "../Style.css";
import { assets } from '../Assets/assets';

const Footer = () => {
  return (
    <div className='footermain'>
        <img src={assets.logo_light} alt="" width={120} />  
        <p className='footermain-p'>All right reserved. Copyright @blogger</p>
        <div className='d-flex'>
            <img src={assets.facebook_icon} alt="" width={40} />
            <img src={assets.twitter_icon} alt="" width={40} />
            <img src={assets.googleplus_icon} alt="" width={40} />

        </div>
      
    </div>
  )
}

export default Footer
