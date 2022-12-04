import React, { useState, useEffect } from "react";
import axios from "axios"
import {ethers} from "ethers"
import {ConnectToMetamask,getWalletConnected} from "../utils/functions/connect"
import NFTcard from "./NFTcard";
import abi from "../../contractAbi.json"

const contractAddress = "0x07CfE3773b86d15deC743BB7f37d498dF0562F51"
const provider = new ethers.providers.Web3Provider(window.ethereum);
const signer = provider.getSigner();
let contract = new ethers.Contract(contractAddress, abi, signer)

export default function Dashboard() {
        
        const [NFTs, setNFTFetched] = useState([]);
        const [loading, setLoading] = useState(false);
        const [numberOfNfts, setNumber] = useState("")

        const fetchNFTs = async () => {
            setLoading(true);
              
             try { 
                    //create an NFT Token
                    // await ConnectToMetamask()
                     await getWalletConnected ()
                    let mynfts = await contract.getMyNFTs()
                    console.log(mynfts)
                    
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
                              image: meta.image,
                              price: price,
                              tokenId: nft.tokenId.toNumber(),
                              seller: nft.seller,
                              owner: nft.owner,
                            };
                        //  console.log(NFTs)
                        console.log(item)        
                          }    
              }
            catch (err){
                console.log(err)
            }
            console.log(NFTs)	
   } 
       
   const fetchMyNFTs = async ()=> {
            let nfts;
            const {address } = await ConnectToMetamask ()
              var baseURL = "https://polygon-mumbai.g.alchemy.com/v2/K9IsbfM7Z0jHrR5VTyg0rOsu0ghafL9D/getNFTs/"
              var requestOptions = {
                  method : "GET"
                }   
          
              console.log("fetching nfts owned by address")
              // let fetchURL = `${baseURL}?owner=ETHEREUM:${wallet}`
              let fetchURL = `${baseURL}?owner=${address}`
              nfts = await fetch(fetchURL, requestOptions).then(data => data.json()).catch(err=>console.log(err));
              setNFTFetched(nfts.ownedNfts)
              console.log("nfts:", nfts);
    }
       

   useEffect(()=>{
    // fetchNFTs()
    fetchMyNFTs()
})
   return (
    <div className="mt-[32px] w-full">
      <div className="w-full mb-10">
        <div className="mb-[25px]">
          <h1 className="text-[2rem] text-[#ffffff] font-bold">Your NFTs collection</h1>
        </div>

        <div className="flex flex-wrap gap-5 items-center w-full">
        {loading ? (
          "Loading...."
        ) : (
          <>
            {NFTs.length > 0 ? (
              NFTs?.map((nft, index) => {
                return (
                  <div key={index} className="w-full md:w-auto">
                    <NFTcard nft={nft} />
                  </div>
                );
              })
            ) : (
              <div>No NFT to display</div>
            )}
          </>
        )}
      </div>
    </div>
  </div>


          // <div style={{display: "flex"}} className={""}>
          //   <h3>no of collection : {numberOfNfts}</h3>
          //   {/* {loading? "Loading....": NFTs.map((nft, index) => { <NFTcard key={index} nft ={nft}/>})} */}
          //   {/* {NFTs.length > 0 &&  NFTs.map((nft, index)=> <NFTcard key={index} nft={nft} />)} */}
          //   <button onClick={fetchNFTs}> Fetch NFT</button>
          // </div>
        );

}











//     sumPrice += Number(price);
//     return item;
// }))
