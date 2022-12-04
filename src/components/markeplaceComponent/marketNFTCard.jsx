import React, { useState } from 'react';

function MarketNFTCard(nft) {
	console.log(nft.nft, 'nft');

	const [data, setData] = useState(nft.nft.metadata);
	return (
		<div className="bg-[#000000CC] shadow-lg w-full md:max-w-[466px] rounded-lg">
			<div className="flex flex-col md:flex-row w-full gap-3 h-full">
				<img src={data.url} alt="music cover" className="w-full md:w-[200px] h-[180px] md:h-[207px] rounded-l-lg" />
				<div className="h-full p-5 justify-between md:p-3 flex flex-col">
					<p className="flex flex-col">
						<span className="text-[#FFFFFF] opacity-[0.75] text-[24px] font-bold">{data.description}</span>
						<span className="text-[#C4C4C4] text-[16px]">{nft.title}</span>
						<span className="text-[#FBF1F3] text-[18px]">By {data.name_of_artiste}</span>
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
