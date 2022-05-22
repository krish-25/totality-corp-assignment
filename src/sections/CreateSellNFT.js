import React from 'react'
import {Data} from '../json_files/create'
import CreateSellCards from '../components/CreateSellCards'
import Asset1 from '../assets/background_assets/Asset202d.png'
import Asset2 from '../assets/background_assets/Ellipse51.png'

function CreateSellNFT() {
  return (
    <div className='rounded-[12px] m-auto pb-[176px] -mt-[73px]'
    style={{
        width: "90%",
        background: 'linear-gradient(180deg, rgba(192, 197, 207, 0.24) 0%, rgba(255, 255, 255, 0) 100%)',
        backdropFilter: 'blur(120px)'
        }}>
        <div className='text-center pt-[140px]'>
        <p className='text-[35px] font-[700] text-[#263F9B] mb-[24px]'>Create & Sell Your NFT’s</p>
        {
            [
                "A play of  light and shade, chairoscuro is the",
                "realm between the light and dark."
            ].map((item) => (
                <p className='text-[18px] text-[#181818] leading-[25px]'>{item}</p>
            ))
        }
        </div>
        <div className='w-full flex px-[35px] justify-between mt-[80px]'>
            {
                Data.map((item) => (
                    <CreateSellCards data={item} />
                ))
            }
        </div>
        <img
        className='absolute'
        style={{
          top: 300,
          right: 0
        }}
        src={Asset2} />
        <img
        className='absolute'
        style={{
          top: 700,
          right: 290
        }}
        src={Asset1} />
    </div>
  )
}

export default CreateSellNFT