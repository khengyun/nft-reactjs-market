import React from "react";
import "./SecondBlock.css";
import { ChooseBlock } from "./CreateOrSell/ChooseBlock";
import img_Import from './../../action/img_Import';
import { CreateOrWatch } from "./CreateNowOrWatch/CreateOrWatch";
import { ListTopCreater } from './../TopCreater/ListTopCreater';
import { JoinUsBlock } from "./JoinUsBlock/JoinUsBlock";

const SecondBlock = () => {

  return (
    <div className="secondblock">
      <div className="be-an-nft-creator">Be An NFT Creator</div>

      <div className="create-sell-block-detail">
        <div className="create-sell-your-nfts">Create & Sell Your NFTs</div>
        <div className="list-choose-blocks">
            <ChooseBlock
              Name={"Create Artwork"}
              Value={
                " Create your collection,Add social links, profile and banner images, and set a secondary sales fee"
              }
              Img={img_Import.images["imageremovebgpreview-14-12x.png"]}
            />
            <ChooseBlock
              Name={"Upload"}
              Value={
                "Upload your work, customize yourNFTs with properties, stats, andunlockable content"
              }
              Img={img_Import.images["imageremovebgpreview-14-12x.png"]}
            />
            <ChooseBlock
              Name={"Listing"}
              Value={
                " Create your collection,Add social links, profile and banner images, and set a secondary sales fee"
              }
              Img={img_Import.images["imageremovebgpreview-14-12x.png"]}
            />
        </div>
        <CreateOrWatch/>
      </div>
      <div className="nft-creators-div">NFT Creators</div>
      <div className="top-creators-of-the-week">Top Creators of the week</div>
      <ListTopCreater/>

      <button class="watch-video-button-out"><b class="watch-video-b-out">Watch Video</b></button>
      
      <JoinUsBlock/>
      
    </div>
  );
};

export default SecondBlock;
