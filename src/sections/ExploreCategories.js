import React from 'react'
import {Data} from '../json_files/explore';
import ExploreCategoryCard from '../components/ExploreCategoryCard';

function ExploreCategories() {
  return (
    <div className='py-[100]'>
        <p className="text-[35px] font-[700] text-[#263F9B] leading-[52.5px] mb-[24px]">
        Explore Categories
      </p>
      <div>
        {[
          "A play of light and shade, chairoscuro is the ",
          "realm between the light and dark.",
        ].map((item) => (
          <p className="text-[18px] text-[#232323] leading-[27px]">{item}</p>
        ))}
      </div>
      <div className='mt-[80px] grid grid-cols-4 gap-3 px-[50px]'>
          {
              Data.map((item) => (
                <ExploreCategoryCard data={item} />
              ))
          }
      </div>
      <button className='m-auto bg-[#548DEA] text-white text-center px-[27px] py-[13px] mt-[120px]'>
          Explore Marketplace
      </button>
    </div>
  )
}

export default ExploreCategories