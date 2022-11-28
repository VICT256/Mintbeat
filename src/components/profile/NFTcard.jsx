import React  from "react"
import styles from "./profile.css"

function NFTcard(prop) {

    return (
			<div>
				<div className={styles.nftcard}>
					<div className={styles.nftimage}>
						<img src={prop.nft.media[0].gateway} style={{ height: 400, width: 400 }} alt="" />
					</div>
					<h3>{prop.nft.title}</h3>
					<p>id: {prop.nft.id.tokenId}</p>
					<p>{prop.nft.contract.address}</p>
					<p>{prop.nft.description}</p>
					<a href={`https://goerli.etherscan.io/address/${prop.nft.contract.address}`} target="_blank" rel="noreferrer">
						<button className={styles.button}>View on Goerliscan</button>
					</a>
				</div>
			</div>
		);
}

  // contract address: 0x883F07638133BBf1c6b0a2ed4B7FF797Bf94550e


export default NFTcard;
