import React from 'react'
import FooterLeft from '../components/FooterLeft'
import FooterRight from '../components/FooterRight'

function Footer() {
  return (
    <div className='pt-[88px] flex w-full'>
        <FooterLeft />
        <FooterRight />
    </div>
  )
}

export default Footer