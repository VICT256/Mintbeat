import axios from "axios"

// const axios = require("axios")
const key= "514e8dc68f65650ab9d5"
const secret="01ba6da564c298c62de39cfefec18af878b60ae059a8c4c2382a7e1b2028203c"


 export const fileUpload = async(formData, name, title, description,external_url) => {

    try{
      const res = await axios.post("https://api.pinata.cloud/pinning/pinFileToIPFS", formData, {
        maxBodyLength: "Infinity",
        headers: {
          'Content-Type': `multipart/form-data; boundary=${formData._boundary}`,
        //   Authorization: JWT
            pinata_api_key: key,
            pinata_secret_api_key: secret
        }
      });  
         
      if( res) {
         var pinataURL= "https://gateway.pinata.cloud/ipfs/"
         var imageURL = pinataURL+res.data.IpfsHash

         const metadata = {
            description : description,
            external_url : external_url ? "mintbeat_url" : external_url,
            name : name,
            image : imageURL,
            attributes: [
                { 
                  title: title,
                  category: "music", 
                  
                }] 
           
         }    
         
         const response =  await uploadJSONToIPFS(metadata)
        //  console.log(response)
           return {
            success:response.success,
            pinnataURL:response.pinnataURL
           }

      }
       
        } catch (error) {
            console.log(error);
            return {
                    success: false,
                    message: error.message,
            }
            
        }
    };

 const uploadJSONToIPFS = async(JSONBody) => {
    const url = `https://api.pinata.cloud/pinning/pinJSONToIPFS`;
    //making axios POST request to Pinata ⬇️
    return axios 
        .post(url, JSONBody, {
            headers: {
                pinata_api_key: key,
                pinata_secret_api_key: secret,
            }
        })
        .then(function (response) {
           return {
               success: true,
               pinataURL: "https://gateway.pinata.cloud/ipfs/" + response.data.IpfsHash
           };
        })
        .catch(function (error) {
            console.log(error)
            return {
                success: false,
                message: error.message,
            }

    });
};


 



    