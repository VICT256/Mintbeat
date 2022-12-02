// import React, { useState, useEffect } from "react";
// import NFTcard from "./NFTcard";
// import styles from "./profile.css";

// const contractAddress = process.env.REACT_APP_CONTRACT_ADDRESS2;
// const abi = process.env.REACT_APP_CONTRACT_ABI;

// export default function Dashboard() {
//   // const [wallet , setWalletAddress] = useState("");
//   const [NFT, setNFT] = useState([]);
//   const [loading, setLoading] = useState(false);

//   const fetchNFTs = async () => {
//     setLoading(true);
//     let nfts;

//     try {
//       const ethers = require("ethers");
//       let sumPrice = 0;

//       //After adding your Hardhat network to your metamask, this code will get providers and signers
//       const provider = new ethers.providers.Web3Provider(window.ethereum);
//       const signer = provider.getSigner();
//       const addr = await signer.getAddress();

//       //Pull the deployed contract instance
//       let contract = new ethers.Contract(contractAddress, abi, signer)

//       //create an NFT Token
//       let transaction = await contract.getMyNFTs()

//       /*
//       * Below function takes the metadata from tokenURI and the data returned by getMyNFTs() contract function
//       * and creates an object of information that is to be displayed
//       */
      
//       const items = await Promise.all(transaction.map(async i => {
//           const tokenURI = await contract.tokenURI(i.tokenId);
//           let meta = await axios.get(tokenURI);
//           meta = meta.data;

//           let price = ethers.utils.formatUnits(i.price.toString(), 'ether');
//           let item = {
//               price,
//               tokenId: i.tokenId.toNumber(),
//               seller: i.seller,
//               owner: i.owner,
//               image: meta.image,
//               name: meta.name,
//               description: meta.description,
//           }
//           sumPrice += Number(price);
//           return item;
//       }))

//       updateData(items);
//       updateFetched(true);
//       updateAddress(addr);
//       updateTotalPrice(sumPrice.toPrecision(3));
//   }

//   const params = useParams();
//   const tokenId = params.tokenId;
//   if(!dataFetched)
//       getNFTData(tokenId);
//       // https://polygon-mumbai.g.alchemy.com/v2/YOUR-API-KEY
//       var baseURL =
//         "https://eth-goerli.g.alchemy.com/v2/K9IsbfM7Z0jHrR5VTyg0rOsu0ghafL9D/getNFTs/";
//       var requestOptions = {
//         method: "GET",
//       };

//       console.log("fetching nfts owned by address");
//       // let fetchURL = `${baseURL}?owner=ETHEREUM:${wallet}`
//       //   let fetchURL = `${baseURL}?owner=${wallet}`
//       let fetchURL = `${baseURL}?owner=0x3D12D9021878177Fe954f1835e4cbD72A9DCa57C`;
//       nfts = await fetch(fetchURL, requestOptions)
//         .then((data) => data.json())
//         .catch((err) => console.log(err));
//       setNFT(nfts);

//       console.log("nfts:", nfts);

//       setLoading(false);
//     } catch (err) {
//       console.log(err.message);
//     }
//     //
//   };

//   const NFTs = NFT.ownedNfts;

//   useEffect(() => {
//     fetchNFTs();
//   }, []);

//   return (
//     <div className={styles.card}>
//       {loading
//         ? "Loading...."
//         : NFTs?.map((nft, index) => {
//             <div key={index}>
//               {/* <NFTcard key={index} nft={nft} /> */}
//               {console.log(nft)}
//               {/* <h3>{NFT.ownedNfts[0].balance}</h3> */}
//               {console.log(NFT.ownedNfts[0].balance)}
//             </div>;
//           })}
//       {/* {NFTs.length > 0 &&  NFTs.map((nft, index)=> <NFTcard key={index} nft={nft} />)} */}

//     </div>
//   );
// }
