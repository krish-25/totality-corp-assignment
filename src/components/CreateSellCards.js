import React from "react";

function CreateSellCards(props) {
  const data = props.data;
  return (
    <div
    className="px-3 m-5 w-1/4 bg-white min-h-[327px] pt-[32px] text-center rounded-[8px]"
      style={{
        background:
          "linear-gradient(180deg, rgba(255, 255, 255, 0.53) 0%, rgba(255, 255, 255, 0.6) 100%)",
        backdropFilter: "blur(81px)",
      }}
    >
      <p className="text-[20px] text-[#263F9B] font-[600] block mb-[25px]">
        {data.title}
      </p>
      <p className="text-[18px] text-[#232323] leading-[28px]">
        {data.content}
      </p>
    </div>
  );
}

export default CreateSellCards;
