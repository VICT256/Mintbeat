import React, {useState} from 'react'
import { fileUpload } from '../utils/functions/pinata';
import { FileUploader } from "react-drag-drop-files";
import {ethers} from "ethers"
import { ConnectToMetamask } from '../utils/functions/connect';
import abi from "../../contractAbi.json"

const FormData = require("form-data");

const fileTypes = ["JPG", "PNG", "GIF", "WAV"];
var contractAddress = "0x07CfE3773b86d15deC743BB7f37d498dF0562F51"  

export default function NftInformation() {
        const [royalty, setRoyalty] = useState("")
        const [name, setName]= useState('')
        const [description, setDescription] = useState("");
        const [status, setStatus] = useState("")  
        const [category, setCategory] = useState("")
        const [price, setPrice] = useState("")     
        const [selectedFile, setSelectedFile] = useState();
        const [title, setTitle] = useState("");
      
      const changeHandler = (file) => {

          setSelectedFile(file);
        }; 
 
      const MintNFT = async () => {
        if( !name || !description || !price || !selectedFile || !title ){
              alert("Incomplete Field")
          return;
        }  

            const formData = new FormData();
          
            formData.append('file', selectedFile)
        
            const metadata = JSON.stringify({
              name: category,
            });
            formData.append('pinataMetadata', metadata);
            
            const options = JSON.stringify({
              cidVersion: 0,
            })
            formData.append('pinataOptions', options);

        try {

          const res = await fileUpload(formData,name,title, description )
          
             if (res.success === true){
               
              try {
                    await ConnectToMetamask()
                   
                  var metadataURL = res.pinnataURL
                  console.log(metadataURL)
                  const provider = new ethers.providers.Web3Provider(window.ethereum);
                  const signer = provider.getSigner();
                    
                  // Contract call
                  let contract = new ethers.Contract(contractAddress, abi, signer)
                   ethers.utils.parseEther(price)

                  let listingPrice = await contract.getListPrice()
                    listingPrice = listingPrice.toString()
                  //actually create the NFT
                 let tip ={value: ethers.utils.parseEther('0.5')}

                //  var url1 = "https://gateway.pinata.cloud/ipfs/QmcZKH8Vu5D8CAkANQg5ocHmFsmzDqVQXh2efM6NRcCgoQ"
                //  var url2 = "https://gateway.pinata.cloud/ipfs/QmUSGVFeHLcEp6EFuLT1CSbHGQgRkrdMxciAPghA7nvhyM"
                // var url3= "https://gateway.pinata.cloud/ipfs/QmdCRNUsGERLXBy4mdhQajqVBaR45dCPGP2ihymokWWGkh"
                let transaction = await contract.createToken(metadataURL, price, tip)
               
                  await transaction.wait()
                  // setStatus("NFT Minted Successfully")
                  alert("transaction Succesful") 

                  window.location.replace("/profile")

              }catch(err){
                console.log(err.message)
              }
              
             }else{
              setStatus("NFT Upload to PINNATA UNSUCCESSFUL")
             } 

        }catch(err){
          console.log(err.message)
        }
        
          
  }
    
  return (
    <>  
       <h1>{status}</h1>
       <div>
          <h1 style={{color:"red", margin: 20}}> * Ensure the file name is the title of the song * </h1>
       </div>

       <div className="col50 nft_Information">
      <header style={{color:"white", margin: 5}}>NFT Information Details</header>

      <input
        onChange={e=>setName(e.target.value)}
        type="text"
        id="fname"
        name="name_of_artiste"
        placeholder="Name Of Artiste.."
        className="col40"
      />
      <input
        onChange={e=>setTitle(e.target.value)}
        type="text"
        id="lname"
        className="col40"
        name="Title"
        placeholder="Title.."
      />
      <textarea onChange={e=>setDescription(e.target.value)} name="description" id="" cols="30" rows="10"></textarea>

      <select onChange={e => setCategory(e.target.value)} id="category" name="category">
        <option value="category">Category</option>
        <option value="option">music video </option>
        <option value="option">audio music</option>
        <option value="option"> Jam beat</option>
      </select>
     
       <div className="col50 add_music_nft">
          <header style={{color:"white", marginTop: 20}}>Add Music file</header>
          <FileUploader handleChange={changeHandler}   name="file" types={fileTypes} />

          <label style={{color:"gray"}} for="purchasable"> * Upload should not exceed 1GB filesize *</label>
          <br></br>
          <input
            onChange={e => setRoyalty(e.target.value)}
            type="text"
            id="royalty"
            name="royalty"
            value="royalty"
            className="royalty"
          />
         
          <br></br>
          <input
            onChange ={e=>setPrice(e.target.value)}
            type="text"
            id="lname"
            className="col40"
            name="price"
            placeholder="Price in Munbai.."
          />
          <br />
          <button onClick ={MintNFT} className="submit_nft_btn">Mint</button>{" "}
      </div>
       
    </div>
    </>
   
  );
}
