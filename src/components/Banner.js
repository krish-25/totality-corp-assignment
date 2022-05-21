import React from 'react'
import BannerImage from "../assets/public_images/companies-banner.png";

function Banner() {
  return (
    <div className='px-[72px] pt-[100px] pb-[30px]'>
        <img src={BannerImage} />
    </div>
  )
}

export default Banner