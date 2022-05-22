import React, { useState } from "react";
import { Data } from "../json_files/resources";
import ResourceCard from "../components/ResourceCard";
import LeftArrow from "../assets//icons/left-arrow.png";
import RightArrow from "../assets/icons/right-arrow.png";
import DotEmpty from "../assets/icons/dot-empty.png";
import DotFill from "../assets/icons/dot-fill.png";

function Resources() {
  const [i, seti] = useState(0);
  return (
    <div className="py-[100px]">
      <div className="border-t-[3px] border-[#C4C4C4] w-[798px] m-auto mb-[96px]"></div>
      <p className="text-[35px] font-[700] text-[#263F9B] leading-[52.5px] mb-[24px]">
        Resources for Getting Started
      </p>
      <div>
        {[
          "A play of light and shade, chairoscuro is the ",
          "realm between the light and dark.",
        ].map((item) => (
          <p className="text-[18px] text-[#232323] leading-[27px]">{item}</p>
        ))}
      </div>
      <div className="flex items-center justify-center mt-[90px] mb-[56px]">
        <button
          onClick={() => {
            if (i == 0) {
              seti(6);
            } else {
              seti(i - 3);
            }
          }}
        >
          <img src={LeftArrow} />
        </button>
        <div className="flex">
          {Data.slice(i, i + 3).map((item) => (
            <ResourceCard data={item} />
          ))}
        </div>
        <button
          onClick={() => {
            if (i == 6) {
              seti(0);
            } else {
              seti(i + 3);
            }
          }}
        >
          <img src={RightArrow} />
        </button>
      </div>
      <div className="flex justify-center">
        {[0, 3, 6].map((item) => {
          if (item == i) {
            return <img className="mr-[10px]" src={DotFill} />;
          } else {
            return <img className="mr-[10px]" src={DotEmpty} />;
          }
        })}
      </div>
    </div>
  );
}

export default Resources;
