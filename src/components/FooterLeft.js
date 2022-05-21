import React from 'react'
import Logo from '../assets/icons/opensea.png'
import Facebook from '../assets/icons/facebook.png';
import Twitter from '../assets/icons/twitter.png';
import Discord from '../assets/icons/discord.png';
import Youtube from '../assets/icons/youtube.png';

function FooterLeft() {
  return (
    <div style={{width: "46.66%",
    height: 808,
    background: 'linear-gradient(0deg, #458DEA 0%, rgba(69, 141, 234, 0.53) 42.82%, rgba(69, 141, 234, 0) 100%)',
    paddingLeft: 70,
    paddingTop: 50
    }}>
        <div className='flex items-center'>
            <img style={{height: 78}} src={Logo} />
            <p className='text-white text-[40px] font-[900] ml-[28px]'>OpenSea</p>
        </div>
        <p className='text-white text-[20px] leading-[36px] block mt-[64px] text-left w-3/5'>
        From Opensea.io, go to your profile icon and click “Create” in the top right corner. You’ll be taken to the NFT item creation page. This page will allow you to upload your NFT file, name it and add a description.
        </p>
        <div className='flex mt-[228px]'>
            {
                [Facebook, Youtube, Discord, Twitter]
                .map((item) => (
                    <img className='mr-[16px]' src={item} />
                ))
            }
        </div>
    </div>
  )
}

export default FooterLeft