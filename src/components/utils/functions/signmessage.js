import {ethers} from 'ethers'

const provider = new ethers.providers.Web3Provider(window.ethereum)


async function signMessage  () {
    let  signer = provider.getSigner();
    var message = " please authorise all transaction"
    let signature =  signer.signMessage(message)
    console.log(signature)
 }