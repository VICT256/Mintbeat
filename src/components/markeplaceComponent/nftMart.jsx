import React, { useState, useEffect } from "react";
import axios from "axios";
import { ethers } from "ethers";
import MarketNFTCard from "./marketNFTCard";
import {
  ConnectToMetamask,
  getWalletConnected,
} from "../utils/functions/connect";
import abi from "../../contractAbi.json";

const contractAddress = "0x07CfE3773b86d15deC743BB7f37d498dF0562F51";
const provider = new ethers.providers.Web3Provider(window.ethereum);
const signer = provider.getSigner();
let contract = new ethers.Contract(contractAddress, abi, signer)

export default function MarketPlaceComponent() {
      const [NFTs, setNFTS] = useState([]);
      const [loading, setLoading] = useState(false);

      async function handleArray(allnfts) {

    for (let nft of allnfts ){

      const tokenURI = await contract.tokenURI(nft.tokenId);
      let meta = await axios.get(tokenURI)
          meta = meta.data;
            console.log("hey")
     
      let price = ethers.utils.formatUnits(nft.price.toString(), 'ether')
      let item = {
              name: meta.name,
              title: meta.title,
              description: meta.description,
              image: meta.url,
              price: price,
              tokenId: nft.tokenId.toNumber(),
              seller: nft.seller,
              owner: nft.owner,
            };
      return item;
    }
  }

  

  const fetchAllNFTs = async () => {
    setLoading(true);

          try {
                // await ConnectToMetamask();
                // await getWalletConnected();

                //create an NFT Token
                let allnfts = await contract.getAllNFTs();
                console.log(allnfts);
                const res = await handleArray(allnfts)
                  setNFTS(res);
                  console.log(NFTs);
                  setLoading(false);

                  } catch (err) {
                    console.log(err);
                  }
    };
       
    const fetchNFTsForCollection = async () =>{
      let nfts;
      const baseURL = "https://polygon-mumbai.g.alchemy.com/v2/K9IsbfM7Z0jHrR5VTyg0rOsu0ghafL9D/getNFTsForCollection/"
      const requestOptions = {
        method : "GET"
      }
        console.log("fetching NFTs for Colection");
        const fetchURL= `${baseURL}?contractAddress=${contractAddress}&withMetadata=${"true"}`
        nfts = await fetch(fetchURL, requestOptions).then(data => data.json())
        console.log("nfts: ", nfts) 
        setNFTS(nfts.nfts); 
   }

         //  this is the sample of how you can retrieve the data fro a Card Using fetchNFTSForCollection
        //  <img  src={prop.nft.media[0].gateway} style={{height:400, width:400}} alt=""/>
        //  </div>  
        //  <h3>{prop.nft.title}</h3>
        //  <p>id: {prop.nft.id.tokenId}</p>
        //  <p>{prop.nft.contract.address}</p>
        //  <p>{prop.nft.description}</p>
    

  useEffect(() => {
    // fetchAllNFTs();
    fetchNFTsForCollection()
  }, []);

  return (
    <div className="mt-[32px] w-full">
      {/* {NFTs.length > 0 &&  NFTs.map((nft, index)=> <NFTcard key={index} nft={nft} />)} */}
      {/* <button style={{color: "white"}}  onClick={fetchAllNFTs}>fetch</button> */}

      <div className="w-full mb-10">
        <div className="mb-[25px]">
          <h1 className="text-[2rem] text-[#ffffff] font-bold">New Beats</h1>
        </div>
        <h1>{NFTs.description}</h1>

        {NFTs?.map((nft, index) => {
          <div key={index} className="w-full md:w-auto">
            <MarketNFTCard nft={nft} />
          </div>
        })}

        {NFTs.map((nft, i) => (
          <div
            key={i}
            className="col29 "
          >
            <div className="marketplace_nft_text">
              <div>
                <p className="text-gray-400">
                  {" "}
                  Description : {nft.description}
                </p>
              </div>
            </div>
          </div>
        ))}

        <div className="flex flex-wrap gap-5 items-center w-full">
          {loading ? (
            "Loading...."
          ) : (
            <>
              {NFTs.length > 0 ? (
                NFTs?.map((nft, index) => {
                  <div key={index} className="w-full md:w-auto">
                    <MarketNFTCard nft={nft} />
                  </div>;
                })
              ) : (
                <div>No NFT to display</div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}


