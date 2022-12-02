import axios from "axios"

// const axios = require("axios")
const key= "514e8dc68f65650ab9d5"
const secret="01ba6da564c298c62de39cfefec18af878b60ae059a8c4c2382a7e1b2028203c"


 export const fileUpload = async(formData, name, price, description) => {

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
         var iamgeURL = pinataURL+res.data.IpfsHash

         const metadata = {
            name_of_artiste : name,
            description : description,
            initial_price_set: "$" + price,
            url : iamgeURL
         }    
         
         const response =  await uploadJSONToIPFS(metadata)
           return response.pinnataURL;

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


 



    