import React from 'react'

function ResourceCard(props) {
  const data = props.data;
  return (
    <div className='flex bg-white rounded-[8px] items-center w-[300px] mx-[30px] px-[25px] py-[29px]'>
      <img src={data.image} />
      <p className='text-left text-[16px] leading-[25px] text-[#263F9B] block pl-[20px]'>{data.content}</p>
    </div>
  )
}

export default ResourceCard