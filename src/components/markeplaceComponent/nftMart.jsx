import React, { useState, useEffect } from "react";
import axios from "axios"
import {ethers} from "ethers"
import MarketNFTCard from "./marketNFTCard";
import { ConnectToMetamask } from "../utils/functions/connect";
import abi from "../../contractAbi.json"

const contractAddress = "0x1d0D0cd9Be01fE529896e61FaE08a1662D368A6D"


export default function MarketPlaceComponent() {
        
        const [NFTs, setNFT] = useState([]);
        const [loading, setLoading] = useState(false);

        const fetchAllNFTs = async () => {
            setLoading(true);
              
             try { 
                    await ConnectToMetamask()
                    const provider = new ethers.providers.Web3Provider(window.ethereum);
                    const signer = provider.getSigner();
                    let contract = new ethers.Contract(contractAddress, abi, signer)

                    //create an NFT Token
                    let allnfts = await contract.getMyNFTs()
                    console.log(allnfts)

                    const items = await Promise.all(allnfts.map(async i => {
                    const tokenURI = await contract.tokenURI(i.tokenId)
                    let meta = await axios.get(tokenURI);
                    meta = meta.data;

                    let price = ethers.utils.formatUnits(i.price.toString(), 'ether');
                    let item = {
                        name: meta.name,
                        title: meta.title,
                        description: meta.description,
                        image: meta.url,
                        price: price,
                        tokenId: i.tokenId.toNumber(),
                        seller: i.seller,
                        owner: i.owner,
                    }
                    
                    return item
                }));
                setNFT(items)

               setLoading(false)
                
              }
            catch (err){
                console.log(err)
            }

   } 
      
//    useEffect(()=>{
//     fetchAllNFTs()
// })
   return (
          <div className={""}>
            {loading? "Loading....": NFTs?.map((nft, index) => { <MarketNFTCard key={index} nft ={nft}/>})}
            {/* {NFTs.length > 0 &&  NFTs.map((nft, index)=> <NFTcard key={index} nft={nft} />)} */}
            <button style={{color: "white"}}  onClick={fetchAllNFTs}>fetch</button>
          </div>
          
        );
      }

































