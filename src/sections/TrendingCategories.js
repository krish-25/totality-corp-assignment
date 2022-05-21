import React from "react";
import { Data } from "../json_files/categories";
import TrendingCategoryCard from "../components/TrendingCategoryCard";
import LeftArrow from "../assets/icons/left-arrow.png";
import RightArrow from "../assets/icons/right-arrow.png";
import Tick from "../assets/icons/blue-tick.png";
import DotEmpty from "../assets/icons/dot-empty.png";
import DotFill from "../assets/icons/dot-fill.png";
function TrendingCategories() {
  return (
    <div className="pt-[143px] pb-[100px]">
      <p className="text-[35px] font-[700] text-[#263F9B] leading-[52.5px] mb-[24px]">
        Trending in All Categories
      </p>
      <div>
        {[
          "A play of light and shade, chairoscuro is the ",
          "realm between the light and dark.",
        ].map((item) => (
          <p className="text-[18px] text-[#232323] leading-[27px]">{item}</p>
        ))}
      </div>
      <div className="w-full">
        <div className="m-auto flex items-center">
          <img src={LeftArrow} />
          <div className="mt-[48px] w-full">
            <div className="w-full flex justify-end">
              <p className="border-r-2 border-[#004ADF] text-[14px] font-bold text-[#004ADF] pr-[15px]">
                Recently Added
              </p>
              <p className="text-[14px] font-semibold text-[#004ADF] pl-[15px]">
                Mostly Used
              </p>
            </div>
            <div className="flex w-full justify-between mt-[26px] mb-[43px] items-center">
              {Data.map((item) => (
                <TrendingCategoryCard data={item} />
              ))}
            </div>
          </div>
          <img src={RightArrow} />
        </div>
      </div>
      <div className="flex justify-center">
        <img className="mr-[10px]" src={DotFill} />
        <img className="mr-[10px]" src={DotEmpty} />
        <img src={DotEmpty} />
      </div>
    </div>
  );
}

export default TrendingCategories;
