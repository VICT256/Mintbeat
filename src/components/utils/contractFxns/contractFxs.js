import axios from "axios"
import {ethers} from ethers

const abi = require("../../../contractAbi.json")
const contractAddress = "0x0CeC8188C8b1896E1E3843fEF092B2CB26e9783B"
const provider = new ethers.providers.Web3Provider(window.ethereum)
const signer = provider.getSigner();


async function getNFTData(tokenId) {

    //Pull the deployed contract instance
    let contract = new ethers.Contract(contractAddress, abi, signer)
    //create an NFT Token
    const tokenURI = await contract.tokenURI(tokenId);
    const listedToken = await contract.getListedTokenForId(tokenId);
    let meta = await axios.get(tokenURI);
    meta = meta.data;
    console.log(listedToken);

    let item = {
        price: meta.price,
        tokenId: tokenId,
        seller: listedToken.seller,
        owner: listedToken.owner,
        image: meta.image,
        name: meta.name,
        description: meta.description,
    }
    console.log(item);
    updateData(item);
}

async function buyNFT(tokenId) {
    
    try {
        const ethers = require("ethers");
        //After adding your Hardhat network to your metamask, this code will get providers and signers
        //Pull the deployed contract instance
        let contract = new ethers.Contract(contractAddress, abi, signer);
        const salePrice = ethers.utils.parseUnits(data.price, 'ether')
        let transaction = await contract.executeSale(tokenId, {value:salePrice});
        await transaction.wait();

        alert('You successfully bought the NFT!');
    }
    catch(e) {
        alert("Upload Error"+e)
    }
}