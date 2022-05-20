import React from "react";
import Background from "../assets/public_images/noise-hero.png";
import Ellipse from "../assets/public_images/ellipse-nft.png";
import Logo from "../assets/icons/logo3x.png";
import Frame from "../assets/icons/frame.png";
import Hamburger from "../assets/icons/hamburger.png";
import LogoFramed from "../assets/public_images/noise-hero-framed.png";
import Search from "../assets/icons/icons.png"

function Home() {
  return (
    <div
      className="h-full w-full bg-red-100 flex relative"
      style={{
        backgroundImage: `url(${Background})`,
        backgroundSize: "cover",
      }}
    >
      <div
        className="pt-[35px] pb-[120px] text-left"
        style={{
          backgroundColor: "rgba(0, 74, 223, 0.24)",
          backdropFilter: "blur(120px)",
          width: "45%",
          paddingLeft: "5%",
        }}
      >
        <div className="flex items-center">
          <img className="h-[30px] w-[30px]" src={Logo} />
          <span className="ml-[10px] text-white text-[25px] font-[900] ">
            OpenSea
          </span>
        </div>
        <div className="mt-[60px] text-white">
          {["Discover.", "Collect. & Sell", "Extraordinary"].map((item) => (
            <p className="text-[64px] font-[900] leading-[76px]">{item}</p>
          ))}
        </div>
        <div
          className="text-center"
          style={{
            backgroundImage: `url(${Ellipse})`,
            width: 237,
            height: 92,
          }}
        >
          <span
            style={{
              background:
                "radial-gradient(104.52% 735.86% at -8.29% 100%, #B6DCFF 0%, #70C9BE 46.87%, #D6C8FF 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
            className="text-[64px] font-[900] leading-[84px]"
          >
            NFT’s
          </span>
        </div>
        <div className="mt-[25px]">
          {["On the world’s first & largest NFT", "marketplace."].map(
            (item) => (
              <p className="text-[20px] text-white leading-[25px]">{item}</p>
            )
          )}
        </div>
        <div className="mt-[80px]">
          {[
            ["Explore", "#458DEA"],
            ["Create", "none"],
          ].map(([title, color]) => (
            <button
              style={{ background: color }}
              className="w-[162px] h-[50px] text-[16px] text-white leading[25px border-[1.5px] border-[#458DEA] mr-[25px]"
            >
              {title}
            </button>
          ))}
        </div>
        <p className="text-[16px] text-[rgba(255,255,255,0.6)] underline mt-[80px]">
          Get Featured On The Homepage
        </p>
      </div>
      <div
        style={{ width: "55%", paddingRight: "5%" }}
        className="pt-[35px] flex flex-col w-full items-end h-full"
      >
        <div className="flex items-center">
            <div className="bg-[rgba(255,255,255,0.3)] h-[36px] w-[210px] flex items-center">
            <img  className="mx-[12.62px]" src={Search} />
          <input className="bg-transparent placeholder:text-[rgba(255,255,255,0.5)] placeholder:text-[14px]" placeholder="Search" />
          </div>
          {[Frame, Hamburger].map((item) => (
            <img className="ml-[32px]" src={item} />
          ))}
        </div>
        <div className="text-right mt-[200px]">
          <img src={LogoFramed} />
          <p className="mt-[26px] text-[#458DEA] text-[25px] leading[28px] font-[700] underline">
            SoulCurryArt
          </p>
          <p className="mt-1 text-[18px] leading-[28px] text-white">
            A play of light and shade, chairoscurso is the<br></br> realm
            between the light and dark
          </p>
          <button className="bg-[rgba(255,255,255,0.2)] mt-[26px] w-[162px] h-[50px] text-[16px] text-white leading[25px] border-[1.5px]">
            Place Bid
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
