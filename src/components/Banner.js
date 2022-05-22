import React from 'react'
import BannerImage from "../assets/public_images/companies-banner.png";

function Banner() {
  return (
    <div className='pt-[100px] pb-[30px] m-auto w-full'>
       <img className='m-auto' src={BannerImage} />
    </div>
  )
}

export default Banner