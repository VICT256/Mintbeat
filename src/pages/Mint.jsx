import React from 'react'
import NftInformation from '../components/mint/NftInfor'
// import AddNft from '../components/mint/AddNft';
function Mint() {
  return (
		<div className="mint_section max-w-[1240px] mx-auto pt-[2rem] px-5 pb-20">
			<div className="">
				{/* <form action="" className="rowx"> */}
					<NftInformation />
					{/* <AddNft /> */}
				{/* </form> */}
			</div>
		</div>
	);
}

export default Mint