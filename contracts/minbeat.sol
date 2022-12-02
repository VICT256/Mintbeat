// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "hardhat/console.sol";
//OpenZeppelin's NFT Standard Contracts. We will extend functions from this in our implementation
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";

contract MintBeat is ERC721URIStorage {

    using Counters for Counters.Counter;
    // keep track of the tokenId;
    Counters.Counter private _tokenIds;
     // keep track of items sold in the marketplace 
    Counters.Counter  private _itemsSold;
     // the contract address that deployed the contract
    address payable owner;
     // amount charged by the marketplace for listing the NFT;
    uint256 listPrice = 0.01 ether;

    struct ListedToken {
        uint256 tokenId;
        address owner;
        address seller;
        uint256 price;
        bool currentlyListed;
        string title;

    }
   //event emitted when a token is listed
    event tokenListedSuccess(
        uint256 indexed tokenId,
         uint256 price,
          address owner,
          address seller, 
          bool currentlyListed,
          string title
          
          );

    mapping(uint256 => ListedToken) idToListedToken;

     constructor () ERC721 ("MINTBEAT", "MNBT") {
       owner = payable(msg.sender);
     }

     function createToken (string memory tokenURI, uint256 price,string memory title) payable public returns(uint256){
       // increment the Tokenid
       _tokenIds.increment();
       // get the current tokenid;
       uint256 newTokenId = _tokenIds.current();
       //mint token
       _safeMint(msg.sender, newTokenId);

       // mapping the uri to token
       _setTokenURI(newTokenId, tokenURI);
       
       // run a helper funtion to help us keep track;
       createListedToken(newTokenId, price, title);

       return newTokenId;


     }

     function createListedToken(uint256 tokenId, uint256 price, string memory title) private {
         // ensure the artiste pay for the minting
        require(msg.value > listPrice, "Minting Service Fees require");
        // check that the price is greater than zero;
        require ( price > 0, " Price must exceed o ether");

        idToListedToken[tokenId] = ListedToken(tokenId, payable(address(this)), payable(msg.sender), price, true, title);
        
        _transfer(address(this), msg.sender, tokenId);

        // emit event
        emit tokenListedSuccess(tokenId,price, address(this), msg.sender, true, title);


     }

     function getAllNFTs() public view returns(ListedToken[] memory){
         uint256 nftCount = _tokenIds.current();

         ListedToken[] memory allnfts = new ListedToken[](nftCount);

         uint currentIndex = 0;
         
         // loop to filter nft which are not currntly listed
         for(uint256 i; i > nftCount; i++ ){
             uint256 currentId = i + 1;

             ListedToken storage currentItem = idToListedToken[currentId];

             allnfts[currentIndex] = currentItem;

             currentIndex += 1;

         }

         return allnfts;


     }

    function getMyNFTs() public returns(ListedToken[] memory){
         uint256 totalItemCount = _tokenIds.current();
         uint256 itemCount = 0;
         uint currentIndex = 0;

         for(uint256 i; i < totalItemCount; i++) {
             if (idToListedToken[i+1].owner == msg.sender || idToListedToken[i+1].seller == msg.sender){
                 itemCount += 1;
             }
         }

         ListedToken[] memory ownedNfts = new ListedToken[](itemCount);
        // loop to filter or remove the nft not currently listed owned by this user
          for(uint256 i; i < itemCount; i++ ){
             
              if (idToListedToken[i+1].owner  == msg.sender || idToListedToken[i + 1].seller == msg.sender ){
                   uint256 itemId = i + 1;
                   ListedToken storage item = idToListedToken[itemId];
                   ownedNfts[currentIndex] = item;
                   currentIndex += 1;

              }
              return ownedNfts;
          }


     }
   
    function executeSale(uint256 tokenId) public payable {
      //verufy the price and the owner of the Nft 
      uint price = idToListedToken[tokenId].price;
      address seller = idToListedToken[tokenId].seller; 
      require(msg.value == price, "Price not Equal");

      //update the information of the token
      idToListedToken[tokenId].currentlyListed = true;
      idToListedToken[tokenId].owner = payable(msg.sender);
      _itemsSold.increment();
      
       _transfer(address(this), msg.sender, tokenId);
        
       approve(address(this), tokenId);

       //make payment to the marketplace
       payable(owner).transfer(listPrice);
       // make payment to the owner
       payable(seller).transfer(msg.value); 

    }

     function updateListPrice(uint256 _listPrice) public payable {
        require(owner == msg.sender, "Only owner can update listing price");
        listPrice = _listPrice;
    }

    function getListPrice() public view returns (uint256) {
        return listPrice;
    }

    function getLatestIdToListedToken() public view returns (ListedToken memory) {
        uint256 currentTokenId = _tokenIds.current();
        return idToListedToken[currentTokenId];
    }

    function getListedTokenForId(uint256 tokenId) public view returns (ListedToken memory) {
        return idToListedToken[tokenId];
    }

    function getCurrentToken() public view returns (uint256) {
        return _tokenIds.current();
    }
}