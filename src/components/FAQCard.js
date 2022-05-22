import React, {useState} from 'react'
import ArrowUp from "../assets/icons/arrow-up.png";
import ArrowDown from "../assets/icons/arrow-down.png";

function FAQCard(props) {
    const question = props.question;
    const [open, setOpen] = useState(false);
  return (
    <div className="text-left">
    <div className="flex w-full justify-between mt-[32px] items-center">
      <p className="text-[18px] text-[#263F9B] leading-[25px]">{question}</p>
      <button onClick={() => setOpen(!open)}>
        {
          open
          ?
          <img src={ArrowUp} />
          :
          <img src={ArrowDown} />
        }
      </button>
    </div>
    <div className={`mt-[20px] mb-[8px] pr-[50px] ${open?"block":"hidden"}`}>
    <p className="text-[18px] text-[#232323] leading-[27px]">
      From Opensea.io, go to your profile icon and click “Create” in
      the top right corner. You’ll be taken to the NFT item creation
      page. This page will allow you to upload your NFT file, name it
      and add a description.
    </p>
    </div>
  </div>
  )
}

export default FAQCard