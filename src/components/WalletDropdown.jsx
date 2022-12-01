import React from 'react';

const WalletDropdown = () => {
	return (
		<div className="bg-[#000] w-[270px] rounded-lg absolute right-[10%] top-[80px] z-10 text-white py-5 px-8 flex flex-col text-sm">
			<div className="flex justify-between w-full mb-5">
				<p>0xc9a...60Ad</p>
				<p>$ 2975</p>
			</div>

			<div className="grid grid-cols-2 gap-5 w-full">
				<p>
					<img src="" alt="" />$ 295
				</p>
				<p>
					<img src="" alt="" />$ 2975
				</p>
				<p>
					<img src="" alt="" />$ 2975
				</p>
				<p>
					<img src="" alt="" />$ 2975
				</p>
			</div>

			<div className="flex items-center justify-between mt-8 w-full">
				<button className="btn-primary bg-[#141414] text-xs px-3 py-2 hover:bg-[#141414]">Buy Matic</button>
				<button className="btn-primary bg-[#E9003F] hover:bg-[#E9003F] text-xs text-white px-5 py-2">Swap</button>
			</div>
		</div>
	);
};

export default WalletDropdown;
