import React, {useState} from 'react'
import { FileUploader } from "react-drag-drop-files";
const fileTypes = ["MP3"];

export default function AddNft() {
     const [file, setFile] = useState(null);
     const handleChange = (file) => {
       setFile(file);
     };
  return (
    <div className="col50 add_music_nft">
      <header>Add your Music NFT</header>
      <FileUploader handleChange={handleChange} name="file" types={fileTypes} />
      <input
        type="checkbox"
        id="purchasable"
        name="purchasable"
        value="Purchasable"
        className="purchasable"
      />
      <label for="purchasable"> Purchasable</label>
      <br></br>
      <input
        type="text"
        id="lname"
        className="col40"
        name="price"
        placeholder="Price.."
      />
      <br />
      <button className="submit_nft_btn">Mint</button>{" "}
    </div>
  );
}
