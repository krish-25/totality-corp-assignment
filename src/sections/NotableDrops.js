import React from "react";
import One from "../assets/drops_images/one.png";
import Two from "../assets/drops_images/two.png";
import Three from "../assets/drops_images/three.png";
import Four from "../assets/drops_images/four.png";

function NotableDrops() {
  return (
    <div
      className="flex pt-[134px] pb-[50px]"
      style={{
        background:
          "linear-gradient(183.49deg, rgba(0, 74, 223, 0.24) 0.82%, rgba(231, 237, 242, 0.24) 97.09%)",
      }}
    >
      <div className="w-full ml-[50px]">
        <div className="flex items-end mb-[20px] ml-[17px]">
          <img className="mr-[26px]" src={One} />
          <img src={Two} />
        </div>
        <div className="flex items-start">
          <img className="mr-[26px]" src={Three} />
          <img src={Four} />
        </div>
      </div>
      <div className="flex justify-center items-center">
        <div className="object-contain text-left w-1/2">
          <p className="text-[35px] font-[700] leading-[52.5px] text-[#263F9B]">
            Notable Drops
          </p>
          <p className="text-[18px] text-[#181818] mt-[24px] mb-[80px]">
            Upload your work (image, video, audio, or 3D art), add a title and
            description, and customize your NFTs stats, and unlockable content.
          </p>
          <button className="w-[162px] h-[50px] text-[16px] text-white leading[25px border-[1.5px] bg-[#458DEA] border-[#458DEA] mr-[25px]">
            View all
          </button>
        </div>
      </div>
    </div>
  );
}

export default NotableDrops;
