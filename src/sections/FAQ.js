import React from "react";
import { Data } from "../json_files/faq";
import FAQCard from "../components/FAQCard";

function FAQ() {
  return (
    <div className="pt-[70px] pb-[100px] w-full">
      <div className="grid grid-cols-2">
        <div className="col-span-1 w-1/2 ml-auto mr-[225px] mt-[32px] text-left">
          <p className="text-[35px] text-[#1B2E78] font-[700] leading-[48px] mb-[30px]">We will try to help you if you are confused.</p>
          <p className="text-[18px] text-[@232323] leading-[27px]">
            A fequently asked question (FAQ) forum is often used in articles,
            websites, email lists, and online forums where common questions tend
            to recur.
          </p>
        </div>
        <div className="col-span-1 pr-[75px]">
          {Data.map((item) => (
            <FAQCard question={item} />
          ))}
        </div>
      </div>
      <button className="m-auto bg-[#548DEA] text-white text-center px-[27px] py-[13px] mt-[120px]">
        View All
      </button>
    </div>
  );
}

export default FAQ;
