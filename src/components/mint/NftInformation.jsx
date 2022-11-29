import React, {useState} from 'react'
import { uploadFileToIPFS, uploadJSONToIPFS } from '../utils/functions/pinata';
import { FileUploader } from "react-drag-drop-files";
const fileTypes = ["JPG", "PNG", "GIF"];

export default function NftInformation() { 
  return (
    <div className="col50 nft_Information">
      <header style={{color:"white", margin: 5}}>NFT Information Details</header>

      <input
        type="text"
        id="fname"
        name="title"
        placeholder="Title.."
        className="col40"
      />
      <input
        type="text"
        id="lname"
        className="col40"
        name="subtitle"
        placeholder="Subtitle.."
      />
      <textarea name="description" id="" cols="30" rows="10"></textarea>
      <select id="category" name="category">
        <option value="category">Category</option>
        <option value="option">Option 1 </option>
        <option value="option">Option</option>
      </select>
      <input
        type="text"
        id="lname"
        className="col40"
        name="Collection"
        placeholder="Collection.."
      />    
    </div>
  );
}






 //   const Metamask = async () => {

    //     const {address, status } = await getConnection ()
    //     setWalletAddress(address);
    //     setStatus(status);
        
    
    // }

  //  function addWalletlistener () {

  //       if (window.ethereum) {
  //       window.ethereum.on("accountsChanged", (accounts)=> {
  //           if (accounts.length > 0 ) {
  //              setWalletAddress(accounts[0]);
  //              setStatus("Connected")
  //                 }else{
  //                     setStatus("not Connected") 
  //                 }
  //             })  
  //             }
  //         }

 

  // useEffect(() => { 
    //     async function fetchdata (){
    //         const {address, status} = await getWalletConnected()
    //         // setWalletAddress(address);
    //         setStatus(status);
    //     }
       
    //     fetchdata ();
    //     addWalletlistener();
    //  }, [])