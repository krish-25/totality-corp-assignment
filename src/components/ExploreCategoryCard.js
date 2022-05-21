import React from 'react'

function ExploreCategoryCard(props) {
    const data = props.data;
  return (
    <div className='flex items-center mb-[56px]'>
        <img src={data.image} />
        <div className='text-left ml-[20px]'>
            <p className='mb-[15px]'>{data.title}</p>
            <p>{data.content}</p>
        </div>
    </div>
  )
}

export default ExploreCategoryCard