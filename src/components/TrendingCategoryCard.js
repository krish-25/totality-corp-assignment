import React from 'react';
import Tick from "../assets/icons/blue-tick.png";

function TrendingCategoryCard(props) {
    const data = props.data;
  return (
    <div
    className='w-1/4'
    style={{
        backgroundImage: `url(${data.bgImage})`,
        backgroundSize: 'cover',
        height: 421,
        width: 358
    }}
    >
        <img style={{marginTop: 206}} className='m-auto relative' src={data.fgImage} />
        <div style={{marginTop: "-10%", paddingTop: "10%", height: 176}} className="bg-white text-center px-[70px] rounded-b-[12px]">
            <div className='flex items-end mt-[10px] justify-center'>
            <p className='items-center font-[400] text-[25px] text-[#263F9B] text-center'>{data.name}</p>
            <img className='mb-[5px] ml-[13px]' src={Tick} />
            </div>
            <p className='mt-[20px] text-[18px] leading-[25px] text-[#181818]'>{data.content}</p>
        </div>
    </div>
  )
}

export default TrendingCategoryCard