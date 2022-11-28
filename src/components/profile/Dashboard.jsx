import React, { useState, useEffect } from "react";
import NFTcard from "./NFTcard";
import styles from "./profile.css";

export default function Dashboard() {
  // const [wallet , setWalletAddress] = useState("");
  const [NFT, setNFT] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchNFTs = async () => {
    setLoading(true);
    let nfts;

    try {
      // https://polygon-mumbai.g.alchemy.com/v2/YOUR-API-KEY
      var baseURL =
        "https://eth-goerli.g.alchemy.com/v2/K9IsbfM7Z0jHrR5VTyg0rOsu0ghafL9D/getNFTs/";
      var requestOptions = {
        method: "GET",
      };

      console.log("fetching nfts owned by address");
      // let fetchURL = `${baseURL}?owner=ETHEREUM:${wallet}`
      //   let fetchURL = `${baseURL}?owner=${wallet}`
      let fetchURL = `${baseURL}?owner=0x3D12D9021878177Fe954f1835e4cbD72A9DCa57C`;
      nfts = await fetch(fetchURL, requestOptions)
        .then((data) => data.json())
        .catch((err) => console.log(err));
      setNFT(nfts);

      console.log("nfts:", nfts);

      setLoading(false);
    } catch (err) {
      console.log(err.message);
    }
    //
  };

  // disregard this function for now pls
  //  const fetchNFTsForCollection = async () =>{
  //       let nfts;
  //       const baseURL = "https://eth-goerli.g.alchemy.com/v2/K9IsbfM7Z0jHrR5VTyg0rOsu0ghafL9D/getNFTsForCollection/"
  //       const requestOptions = {
  //         method : "GET"
  //       }
  //     //  if (collection.length){
  //         console.log("fetching NFTs for Colection");
  //         const fetchURL= `${baseURL}?contractAddress=${collection}&withMetadata=${"true"}`
  //         nfts = await fetch(fetchURL, requestOptions).then(data => data.json())
  //         console.log("nfts: ", nfts.nfts)
  //         setNFT(nfts.nfts);
  //     //   }
  //    }

  const NFTs = NFT.ownedNfts;

  useEffect(() => {
    fetchNFTs();
  }, []);

  return (
    <div className={styles.card}>
      {loading
        ? "Loading...."
        : NFTs?.map((nft, index) => {
            <div key={index}>
              {/* <NFTcard key={index} nft={nft} /> */}
              {console.log(nft)}
              {/* <h3>{NFT.ownedNfts[0].balance}</h3> */}
              {console.log(NFT.ownedNfts[0].balance)}
            </div>;
          })}
      {/* {NFTs.length > 0 &&  NFTs.map((nft, index)=> <NFTcard key={index} nft={nft} />)} */}

    </div>
  );
}
