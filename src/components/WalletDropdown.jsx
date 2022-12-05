import React, {useEffect, useState} from 'react';
import axios from "axios"
import { ConnectToMetamask } from './utils/functions/connect';

const WalletDropdown = () => {
         const [walletAddress, setWalletAddress] =useState('')
         const[walletBalance, setbalance] = useState("")
		 const [price, setPrice] = useState('')

		 async function set(){
			const {address, balance } = await ConnectToMetamask()
			setWalletAddress(address)
            // setEtherValue ( ethers.utils.parseUnits(balance, 'ether'))
			setbalance(Number(balance).toFixed(3))

			 var maticprice = await axios.get("https://api.binance.com/api/v3/ticker/price")
			 setPrice(maticprice.data[499].price)
		 }

		 function swap() {alert("Unable to connect Uniswap")}

 useEffect(()=>{
		set()},[walletAddress])
 
	return (
		<div className="bg-[#000] w-[270px] rounded-lg absolute right-[10%] top-[80px] z-10 text-white py-5 px-8 flex flex-col text-sm">
			<div className="flex justify-between w-full mb-5">
				
				<br></br>
				<br></br>
				<p>Total Balance: </p>
				<br></br>
				<p></p>
				<p>{`$${(walletBalance * price).toFixed(4)}`}</p>
			</div>

			<div className="grid grid-cols-2 gap-5 w-full">
				<p>
					<img src="https://s2.coinmarketcap.com/static/img/coins/64x64/3890.png"  style={{marginRight:20}} height={30} width={30} alt="" />{`${walletBalance} MATIC`}
				</p>
				<p>
					{/* <img src="" alt="" />{ethervalue} */}
				</p>
				
			</div>

			<div className="flex items-center justify-between mt-8 w-full">
				<a href='https://faucet.polygon.technology/' target={"_blank"}><button className="btn-primary bg-[#141414] text-xs px-3 py-2 hover:bg-[#141414]">Receive tokens</button></a>
				<button onClick={swap} className="btn-primary bg-[#E9003F] hover:bg-[#E9003F] text-xs text-white px-5 py-2">Swap</button>
			</div>
		</div>
	);
};

export default WalletDropdown;
