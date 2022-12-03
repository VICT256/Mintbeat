import React  from "react"


 function MarketNFTCard(nft) {

    return (
			<div>
				<div className="">
					<div className="">
						<img src={nft.image} style={{ height: 400, width: 400 }} alt="" />
					</div>
					<h3>{nft.name}</h3>
					<h3>{nft.title}</h3>
					<p>id: {nft.tokenId}</p>
                    <p> nft.price </p>
					
					<button onClick={""} className={""}>BuyNFT</button>
					
				</div>
			</div>
		);
}



export default MarketNFTCard;
