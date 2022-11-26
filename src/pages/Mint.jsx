import React from 'react'
import NftInformation from '../components/mint/NftInformation'
import AddNft from '../components/mint/AddNft';
function Mint() {
  return (
    <div className=" mint_section">
      <div className="rowx container mx-auto">
        <form action="" className="rowx">
          <NftInformation />
          <AddNft />
        </form>
      </div>
    </div>
  );
}

export default Mint