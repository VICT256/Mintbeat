import React, { useState } from "react";

function MarketNFTCard(nft) {
  console.log(nft.nft, "nft");

  const [data, setData] = useState(nft.nft.metadata);
  console.log(nft.nft.metadata);
  return (
    <div className="bg-[#000000CC] shadow-lg w-full md:max-w-[466px] rounded-lg">
      <div className="flex flex-col md:flex-row w-full gap-3 h-full">
        <video width="320" height="240" controls>
          <source src={data.url} type="video/mp4" />
          <source src={data.url} type="video/ogg" />
          Your browser does not support the video tag.
        </video>

        <div className="h-full p-5 justify-between md:p-3 flex flex-col">
          <p className="flex flex-col">
            <span className="text-[#FFFFFF] opacity-[0.75] text-[20px] font-bold">
              {data.description}
            </span>
            <span className="text-[#C4C4C4] text-[14px]">{nft.title}</span>
            <span className="text-[#FBF1F3] text-[16px]">
              By {data.name_of_artiste}
            </span>
            {/* <span className="text-[#C4C4C4] text-sm">Nov 20 2022</span> */}
          </p>
          <div className="flex items-center justify-between mt-5">
            <p>{nft.tokenID}</p>
            <button className="btn-primary bg-[#E9003F] px-3 py-2 hover:bg-[#e9003f]">
              <span>Buy </span>
              <span className="text-[#FFF]">{data.initial_price_set}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MarketNFTCard;
