import "regenerator-runtime/runtime";
import * as nearAPI from "near-api-js";
import { initContract, login, logout } from "./utils";
const { utils } = nearAPI;
import getConfig from "./config";
const { networkId } = getConfig(process.env.NODE_ENV || "development");

console.log(networkId);
document.querySelector("#home").onclick = async() => {
    renderHome();
};
document.querySelector("#auction").onclick = async() => {
    renderAuction();
};

document.querySelector("#mint").onclick = async() => {
    renderMint();
};

document.querySelector("#create-auction").onclick = async() => {
    renderCreateAuction();
};
// Display the signed-out-flow container
function signedOutFlow() {
    document.querySelector("#signin").innerText = "Sign In";
    document.querySelector("#signout").disabled = true;
    document.querySelector("#mint").disabled = true;
    document.querySelector("#signin").onclick = login;
}

// Displaying the signed in flow container and fill in account-specific data
function signedInFlow() {
    document.querySelector("#signin").innerText = window.accountId;
    document.querySelector("#signout").onclick = logout;
    document.querySelector("#signin").onclick = () => {};
}

window.nearInitPromise = initContract()
    .then(() => {
        if (window.walletConnection.isSignedIn()) signedInFlow();
        else signedOutFlow();
    })
    .catch(console.error);

const getTokenData = async(tokenId) => {
    let res = await contract.nft_token({ token_id: tokenId });

    return res;
};

const renderMint = async() => {
    document.querySelector(".content").innerHTML = `
    <form id="mint-form">
    <div class="form-group">
        <label for="tokenId">Token ID</label>
        <input  type="text" class="form-control" id="token-id" placeholder="Token ID">
    </div>
    <div class="form-group">
        <label for="tokenOwnerId">Token Owner ID</label>
        <input type="text" class="form-control" id="token-owner-id" placeholder="Token Owner ID">
    </div>
    <div class="form-group">
        <label for="title">Token Title</label>
        <input type="text" class="form-control" id="title" placeholder="Title">
    </div>
    <div class="form-group">
        <label for="description">Description</label>
        <input type="text" class="form-control" id="description" placeholder="Description">
    </div>
    <div class="form-group">
        <label for="media">Token URI</label>
        <input type="text" class="form-control" id="media" placeholder="Token URI">
    </div>

    <button type="submit" class="btn btn-primary">Mint</button>
</form>
    `;
    document.querySelector("#mint-form").addEventListener("submit", async(e) => {
        e.preventDefault();
        let tokenId = document.querySelector("#token-id").value;
        let tokenOwnerId = document.querySelector("#token-owner-id").value;
        let title = document.querySelector("#title").value;
        let description = document.querySelector("#description").value;
        let media = document.querySelector("#media").value;
        console.log(tokenId, tokenOwnerId, title, description, media);
        try {
            let callRes = await contract.mint({
                    token_id: tokenId,
                    token_owner_id: tokenOwnerId,
                    token_metadata: {
                        title: title,
                        description: description,
                        media: media,
                    },
                },
                300000000000000,
                utils.format.parseNearAmount("0.1")
            );
            console.log(callRes);
        } catch (err) {
            console.log(err);
        }
    });
};

const renderCreateAuction = async() => {
    document.querySelector(".content").innerHTML = `
    <form id="create-auction-form">
    <div class="form-group">
        <label for="tokenId">Token ID</label>
        <input type="text" class="form-control" id="token-id" placeholder="Token ID">
    </div>
    <div class="form-group">
        <label for="start-price">Start Price</label>
        <input type="text" class="form-control" id="start-price" placeholder="Start Price">
    </div>
    <div class="form-group">
        <label for="start-time">Start Time</label>
        <input type="datetime-local" class="form-control" id="start-time" placeholder="Start Time">
    </div>
    <div class="form-group">
        <label for="end-time">End Time</label>
        <input type="datetime-local" class="form-control" id="end-time" placeholder="End Time">
    </div>


    <button type="submit" class="btn btn-primary">Create Auction</button>
</form>
    `;
    document
        .querySelector("#create-auction-form")
        .addEventListener("submit", async(e) => {
            e.preventDefault();
            let tokenId = document.querySelector("#token-id").value;
            let startPrice = utils.format.parseNearAmount(
                document.querySelector("#start-price").value
            );
            let startTime =
                Date.parse(document.querySelector("#start-time").value) / 1000;
            let endTime =
                Date.parse(document.querySelector("#end-time").value) / 1000;
            console.log(tokenId, startPrice, startTime, endTime);
            let resCall = await contract.create_auction({
                    auction_token: tokenId,
                    start_price: parseInt(startPrice),
                    start_time: startTime,
                    end_time: endTime,
                },
                300000000000000,
                utils.format.parseNearAmount("1")
            );

            console.log(resCall);
        });
};

const renderHome = async() => {
    const totalSupply = parseInt(await contract.nft_total_supply());
    let limit = totalSupply > 6 ? 6 : totalSupply;
    let nfts = await contract.nft_tokens({ from_index: "0", limit: limit });
    document.querySelector(".content").innerHTML = "";
    nfts.forEach(async(nft, index) => {
        console.log(nft);
        let response = await fetch(nft.metadata.media);
        let data = await response.json();
        if (data.image.includes("ipfs://")) {
            data.image = data.image.replace("ipfs://", "https://ipfs.io/ipfs/");
            console.log(data.image);
        }
        let card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `
            <div class="card-header">
                <p>Token ID: ${nft.token_id}</p>
                <h3 class="card-title">${nft.metadata.title}</h3>
                <p class="owner"> Owner ID: ${nft.owner_id}<p>
                <p class="card-description">${nft.metadata.description}</p>
            </div>
            <div class="card-content">
                <div class="card-img">
                    <img  src="${data.image}" />
                </div>
            </div>
`;

        document.querySelector(".content").appendChild(card);
    });
};
const renderAuction = async() => {
    try {
        document.querySelector(".content").innerHTML = `
            <div style="width: 100%; margin: 20px;" class="bid-control">
                <input type="text" id="auction-id" placeholder="Auction ID">
                <input type="text" id="bid-price" placeholder="Bid Price">
                <button class="btn btn-primary" id="bid" class="bid">Bid</button>
                <br />
                <input type="text" id="auction-id-claim" placeholder="Auction ID">
                <button class="btn btn-primary" id="claim-nft">Claim NFT</button>
            </div>
            `;
        for (let i = 0; i < 10; i++) {
            let auction = await contract.get_auction({ auction_id: i });
            console.log(auction);
            let token = await getTokenData(auction.auction_token);
            let response = await fetch(token.metadata.media);
            let data = await response.json();
            if (data.image.includes("ipfs://")) {
                data.image = data.image.replace("ipfs://", "https://ipfs.io/ipfs/");
                console.log(data.image);
            }
            console.log(token);
            let card = document.createElement("div");
            card.className = "card";
            card.innerHTML = `
                    <div class="card-header">
                        <p>Auction ID: ${auction.auction_id}</p>
                        <p class="token-id">Token ID: ${
                          auction.auction_token
                        }</p>
                        <h3 class="card-title">Title: ${
                          token.metadata.title
                        }</h3>
                        <p class="owner"> Owner ID: ${auction.owner}</p>
                        <p class="current-price">Current Price: ${
                          auction.current_price / 10 ** 24
                        } NEAR</p>
                        <p class="current-winner">Current winner: ${
                          auction.winner || "no winner"
                        }</p>
                        <p class="end-time">End: ${new Date(
                          auction.end_time / 1_000_000
                        )}</p>
                    </div>
                    <div class="card-content">
                        <div class="card-img">
                            <img  src="${data.image}" />
                        </div>
                    </div>

                `;
            document.querySelector(".content").appendChild(card);
        }
    } catch (err) {
        console.log(err);
    }
    document.querySelector("#bid").onclick = async() => {
        let auctionId = parseInt(document.querySelector("#auction-id").value);
        let bidPrice = utils.format.parseNearAmount(
            document.querySelector("#bid-price").value
        );
        console.log(auctionId, bidPrice);
        let res = await contract.bid({ auction_id: auctionId },
            300000000000000,
            bidPrice
        );
        console.log(res);
    };

    document.querySelector("#claim-nft").onclick = async() => {
        let auctionId = parseInt(document.querySelector("#auction-id-claim").value);
        console.log(auctionId);
        contract.claim_nft({ auction_id: auctionId }, 300000000000000, 1);
    };
};
setTimeout(renderHome);