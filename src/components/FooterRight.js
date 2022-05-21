import React from "react";
import { Data } from "../json_files/footer-links";

function FooterRight() {
  return (
    <div className="pt-[66px] pl-[70px]">
      <div className="grid grid-cols-3 gap-[90px] text-left">
        <div>
          <p className="inline-block text-[25px] text-[#004ADF] font-[600]">
            Resources
          </p>
          {Data.resources.map((item) => (
            <p className="text-[14px] text-[#004ADF] leading-[25px]">{item}</p>
          ))}
        </div>
        <div>
          <p className="text-[25px] text-[#004ADF] font-[600]">My Account</p>
          {Data.account.map((item) => (
            <p className="text-[14px] text-[#004ADF] leading-[25px]">{item}</p>
          ))}
          <p className="text-[25px] text-[#004ADF] font-[600] mt-[48px]">
            Stats
          </p>
          {Data.stats.map((item) => (
            <p className="text-[14px] text-[#004ADF] leading-[25px]">{item}</p>
          ))}
        </div>
        <div>
          <p className="text-[25px] text-[#004ADF] font-[600]">Company</p>
          {Data.company.map((item) => (
            <p className="text-[14px] text-[#004ADF] leading-[25px]">{item}</p>
          ))}
        </div>
      </div>
      <div className="mt-[78px]">
        <div className="text-left">
          <p>Stay In The Loop</p>
          <p>
            Join our mailing list to stay in the loop with out newest feature
            releases,<br></br>NFT drops, and tips & tricks for navigating
            OpenSea.
          </p>
        </div>
        <div className="flex mt-[20px]">
          <input
            className="pl-[20px] pt-[9px] pb-[6px] bg-white w-[300px] opacity-[0.3] border-[1px] border-white"
            placeholder="Email Address"
          />
          <button className="text-center text-[16px] ml-[20px] text-white bg-[#004ADF] h-[50px] w-[162px]">
            Signup
          </button>
        </div>
        <div
          style={{
            background: "linear-gradient(#FFFFFF 0%, #FFFFFF 100%, #FFFFFF 0%)",
            opacity: 0.6,
            height: 1,
          }}
        ></div>
        <div className="flex mt-[32px] justify-end pr-[70px]">
          <p className="text-[14p] text-[#004ADF] mr-[29px]">Privacy Policy</p>
          <p className="text-[14p] text-[#004ADF]">Terms & Conditions</p>
        </div>
      </div>
    </div>
  );
}

export default FooterRight;
