import React from 'react'

function ExploreCategoryCard(props) {
    const data = props.data;
  return (
    <div className='flex items-center mb-[56px]'>
        <img src={data.image} />
        <div className='text-left ml-[20px]'>
            <p className='mb-[15px] text-[25] text-[#263F9B] font-[600]'>{data.title}</p>
            <p className='text-[14px] leading-[21px] text-black'>{data.content}</p>
        </div>
    </div>
  )
}

export default ExploreCategoryCard