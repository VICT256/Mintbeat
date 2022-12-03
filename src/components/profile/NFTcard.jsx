import React  from "react"
import styles from "./profile.css"

function NFTcard(nft) {

    return (
			<div>
				<div className={styles.nftcard}>
					<div className={styles.nftimage}>
						<img src={nft.media[0].gateway} style={{ height: 400, width: 400 }} alt="" />
					</div>
					<h3>{nft.title}</h3>
					<p>id: {nft.id.tokenId}</p>
					<p>{nft.contract.address}</p>
					<p>{nft.description}</p>
					<a href={`https://goerli.etherscan.io/address/${nft.contract.address}`} target="_blank" rel="noreferrer">
						<button className={styles.button}>View on Goerliscan</button>
					</a>
				</div>
			</div>
		);
}



export default NFTcard;
