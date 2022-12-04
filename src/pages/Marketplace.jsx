import React from 'react';
import MarketPlaceComponent from '../components/markeplaceComponent/nftMart';
import Hero from '../components/home/Hero';

function Marketplace() {
	return (
		<div className="max-w-[1480px] mx-auto pt-[2rem] px-5 pb-20">
			<Hero />
			<MarketPlaceComponent />
		</div>
	);
}

export default Marketplace;
