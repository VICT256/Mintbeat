import React from 'react';
import {ethers} from "ethers"
import { ConnectToMetamask } from './utils/functions/connect';

const WalletDropdown = () => {
         const [walletAddress, setWalletAddress] = React.useState('')
         const[walletBalance, setbalance] = React.useState("")
		 const [ethervalue, setEtherValue]= React.useState("")

		 async function set(){

			const {address, balance } = await ConnectToMetamask()
			setWalletAddress(address)
            setEtherValue ( ethers.utils.parseUnits(balance, 'ether'))
			setbalance(Number(balance).toFixed(3))
			console.log(ethervalue)
		 }

	React.useEffect(()=>{
		set()
	},[walletAddress])

	return (
		<div className="bg-[#000] w-[270px] rounded-lg absolute right-[10%] top-[80px] z-10 text-white py-5 px-8 flex flex-col text-sm">
			<div className="flex justify-between w-full mb-5">
				<p>{walletAddress.length > 0 ? ("Connected: " + String(walletAddress).substring(0, 6) +"..." +String(walletAddress).substring(38)) : ( <span>Connect Wallet</span>)}</p>
				<br></br>
				<br></br>
				<p>Total Balance:  {walletBalance}</p>
			</div>

			<div className="grid grid-cols-2 gap-5 w-full">
				<p>
					{/* <img src="" alt="" />{ethervalue} */}
				</p>
				<p>
					{/* <img src="" alt="" />{ethervalue} */}
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
