import React, {useState} from 'react'
import { fileUpload} from '../utils/functions/pinata';
import { FileUploader } from "react-drag-drop-files";
const fileTypes = ["JPG", "PNG", "GIF"];

// import {axios} from "axios"

const FormData = require("form-data")

export default function NftInformation() {

        
      const [walletAddress, setWalletAddress] = useState("")
      const [name, setName]= useState('')
      const [description, setDescription] = useState("");
      const [status, setStatus] = useState(false)  
      const [price, setPrice] = useState("")     
      const [selectedFile, setSelectedFile] = useState();
      const [title, setTitle] = useState("");
    
    const changeHandler = (file) => {
        setSelectedFile(file);
        setTitle(file);
      }; 
  
     
 
    const MintNFT = async () => {
        const formData = new FormData();
      
        formData.append('file', selectedFile)
    
        const metadata = JSON.stringify({
          name: title,
        });
        formData.append('pinataMetadata', metadata);
        
        const options = JSON.stringify({
          cidVersion: 0,
        })
        formData.append('pinataOptions', options);

        try {

          const response = await fileUpload(formData,name,price, description )
          console.log(response.data);
        }catch(err){
          console.log(err.message)
        }
        
          
  }
    
  return (
    <>
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
    
      <textarea onChange={e=>setDescription(e.target.value)} name="description" id="" cols="30" rows="10"></textarea>
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
       
       <div className="col50 add_music_nft">
          <header style={{color:"white", marginTop: 20}}>Add Music file</header>
          <FileUploader handleChange={changeHandler}   name="file" types={fileTypes} />
          <input
            type="checkbox"
            id="purchasable"
            name="purchasable"
            value="Purchasable"
            className="purchasable"
          />
          <label for="purchasable"> Purchase</label>
          <br></br>
          <input
            onChange ={e=>setPrice(e.target.value)}
            type="text"
            id="lname"
            className="col40"
            name="price"
            placeholder="Price.."
          />
          <br />
          <button onClick ={MintNFT} className="submit_nft_btn">Mint</button>{" "}
    </div>
       
         

    </div>
    </>
   
  );
}
