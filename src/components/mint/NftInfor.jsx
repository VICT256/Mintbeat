import React, { useState } from "react";
import { fileUpload } from "../utils/functions/pinata";
import { FileUploader } from "react-drag-drop-files";
import { ethers } from "ethers";
import { ConnectToMetamask } from "../utils/functions/connect";
import abi from "../../contractAbi.json";

const FormData = require("form-data");

const fileTypes = ["MP4", "MP3", "JPG", "WAV"];
var contractAddress = "0x1d0D0cd9Be01fE529896e61FaE08a1662D368A6D"; // for testing

export default function NftInformation() {
      const [wallet, setWallet] = useState("");
      const [name, setName] = useState("");
      const [description, setDescription] = useState("");
      const [status, setStatus] = useState("");
      const [category, setCategory] = useState("");
      const [price, setPrice] = useState("");
      const [selectedFile, setSelectedFile] = useState();
      const [title, setTitle] = useState("");
      const [external_url, setExternalURL] = useState("");

      const changeHandler = (file) => {
        setSelectedFile(file);
      };

      const MintNFT = async () => {
        if (!name || !description || !price || !selectedFile || !title) {
          alert("Incomplete Field");
          return;
        }

            const formData = new FormData();

            formData.append("file", selectedFile);

            const metadata = JSON.stringify({
              name: category,
            });
            formData.append("pinataMetadata", metadata);

            const options = JSON.stringify({
              cidVersion: 0,
            });
            formData.append("pinataOptions", options);

            try {
                const res = await fileUpload(
                  formData,
                  name,
                  title,
                  description,
                  external_url
                );

                if (res.success === true) {
                  try {
                    await ConnectToMetamask();

                    var metadataURL = res.pinataURL;
                    console.log(metadataURL);
                    const provider = new ethers.providers.Web3Provider(window.ethereum);
                    const signer = provider.getSigner();

                    // Contract call
                            let contract = new ethers.Contract(contractAddress, abi, signer);
                  ethers.utils.parseEther(price);

                  // let listingPrice = await contract.getListPrice();
                  // listingPrice = listingPrice.toString();

                  //actually create the NFT
                  let tip = { value: ethers.utils.parseEther("0.1") };

                  //  var url1 = "https://gateway.pinata.cloud/ipfs/QmcZKH8Vu5D8CAkANQg5ocHmFsmzDqVQXh2efM6NRcCgoQ"
                  //var url2 = https://gateway.pinata.cloud/ipfs/QmUSGVFeHLcEp6EFuLT1CSbHGQgRkrdMxciAPghA7nvhyM
                  // var url3 https://gateway.pinata.cloud/ipfs/QmdCRNUsGERLXBy4mdhQajqVBaR45dCPGP2ihymokWWGkh
                  var url4 =
                    "https://gateway.pinata.cloud/ipfs/QmSA2Q9RaqwDf4MWdZ1xNYyn7PFxajpiVWDrhfNCLSZ2zz";
                  let transaction = await contract.createToken(metadataURL, price, tip);

                  await transaction.wait();
                  // setStatus("NFT Minted Successfully")
                  alert("transaction Succesful");

                window.location.replace("/profile");
              } catch (err) {
                console.log(err.message);
              }
            } else {
              setStatus("NFT Upload to PINNATA UNSUCCESSFUL");
            }
          } catch (err) {
            console.log(err.message);
          }
  };

  return (
    <div>
      <h1>{status}</h1>
      <div>
        <h1 style={{ color: "red", margin: 20 }}>
          {" "}
          * Ensure the file name is the title of the song *{" "}
        </h1>
      </div>

      <div className="md:grid md:grid-cols-2 gap-10 mb-20 flex flex-col-reverse justify-between w-full">
        <div className="w-full">
          <header className="text-[1.5rem] font-medium text-white mb-5">
            Add Music file
          </header>
          <FileUploader
            handleChange={changeHandler}
            name="file"
            classes="bg-[#D8043DAD]"
            types={fileTypes}
            children={
              <div className="w-full h-[272px] bg-[#D8043DAD] rounded-lg flex flex-col items-center justify-center">
                <img
                  src="/images/cloud.jpeg"
                  alt=""
                  className="rounded-full w-32 h-32"
                />
                <p className="text-[#ffffffcc] mt-3">
                  Drop your file here <br />
                  Or <span className="text-[#3483E2]">Browse</span>
                </p>
              </div>
            }
          />
          {/* <input onChange={changeHandler} type={"file"}/> */}
          <label style={{ color: "gray" }} for="purchasable">
            {" "}
            * Upload should not exceed 1GB filesize *
          </label>
          <div className="flex mt-5">
            <input
              onChange={(e) => setExternalURL(e.target.value)}
              type="text"
              id="royalty"
              name="royalty"
              value=""
              className="w-1/2"
              placeholder="Royalty"
            />
            <input
              onChange={(e) => setPrice(e.target.value)}
              type="text"
              id="lname"
              className="w-1/2"
              name="price"
              placeholder="Price in Munbai.."
            />
          </div>
          <button
            onClick={MintNFT}
            // disabled={status}
            className="submit_nft_btn"
          >
            Mint
          </button>{" "}
        </div>

        <div>
          <header className="text-[1.5rem] mb-5 font-medium text-white">
            NFT Information Details
          </header>
          <div className="w-full">
            <input
              onChange={(e) => setName(e.target.value)}
              type="text"
              id="fname"
              name="name_of_artiste"
              placeholder="Name Of Artiste.."
              className="w-1/2"
            />
            <input
              onChange={(e) => setTitle(e.target.value)}
              type="text"
              id="lname"
              className="w-1/2"
              name="Title"
              placeholder="Title.."
            />
          </div>

          <textarea
            onChange={(e) => setDescription(e.target.value)}
            name="description"
            placeholder="Description"
            id=""
            className="text-[#707070]"
            cols={20}
            rows={8}
          ></textarea>

          <select
            onChange={(e) => setCategory(e.target.value)}
            id="category"
            className="w-1/2"
            name="category"
          >
            <option value="category">Choose category</option>
            <option value="option">music video </option>
            <option value="option">audio music</option>
            <option value="option"> Jam beat</option>
          </select>
        </div>
      </div>
    </div>
  );
}
