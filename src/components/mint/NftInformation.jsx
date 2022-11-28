import React from "react";

export default function NftInformation() {
  return (
    <div className="col50 nft_Information">
      <header>NFT Information Details</header>

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
