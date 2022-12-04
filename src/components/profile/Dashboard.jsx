import React, { useState, useEffect } from "react";
import axios from "axios"
import {ethers} from "ethers"
import {ConnectToMetamask,getWalletConnected} from "../utils/functions/connect"
import NFTcard from "./NFTcard";
import styles from "./profile.css";
import abi from "../../contractAbi.json"

const contractAddress = "0x07CfE3773b86d15deC743BB7f37d498dF0562F51"


export default function Dashboard() {
        
        const [NFTs, setNFTFetched] = useState([]);
        const [loading, setLoading] = useState(false);

        const fetchNFTs = async () => {
            setLoading(true);
              
             try { 
                     
                    const provider = new ethers.providers.Web3Provider(window.ethereum);
                    const signer = provider.getSigner();
                    let contract = new ethers.Contract(contractAddress, abi, signer)

                    //create an NFT Token
                    // await ConnectToMetamask()
                    await getWalletConnected ()
                    let mynfts = await contract.getMyNFTs()
                    console.log(mynfts)
                    let item;
                 
                  for (let nft of mynfts ){

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
                      console.log(item)		
                    return item;
                  }

                setNFTFetched(item)
                setLoading(false)
              }
            catch (err){
                console.log(err)
            }

   } 
      
   useEffect(()=>{
    fetchNFTs()
})
   return (
          <div className={styles.card}>
            {loading? "Loading....": NFTs?.map((nft, index) => { <NFTcard key={index} nft ={nft}/>})}
            {/* {NFTs.length > 0 &&  NFTs.map((nft, index)=> <NFTcard key={index} nft={nft} />)} */}
            <button onClick={fetchNFTs}> Fetch NFT</button>
          </div>
        );

      }












//     sumPrice += Number(price);
//     return item;
// }))
