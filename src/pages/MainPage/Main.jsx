import React from "react";
import img_Import from "./action/img_Import";
import { Header } from "../../Layout/Header";
import Collaborator from "./components/Collaborator/Collaborator";
import { Tag_Picture } from "./components/Tag_Picture/Tag_Picture";
import Famous from "./components/List-Famous/FamousBox";
import { Helmet } from "react-helmet";
import Footer from "../../Layout/Footer";
import ActionPage from "./ActionPage";
import SecondBlock from "./components/SeBlock/SecondBlock";

const Home = () => {
  return (
<div className="connect_2_desktop">
  
  <div className="desktop-1">
    <Header/>
    <Helmet>
    <link rel="stylesheet" href="./style/home.css" />
    </Helmet>
  
    <button className="frame-button1">
      <b className="discover-now-b">Discover Now</b>
    </button>
    <b className="artworks-b">Artworks</b>
    <b className="auctions-b">Auctions</b>
    <b className="artists-b">Artists</b>
    {/* Main Tag Picure  */}
    <Tag_Picture />
    {/* Main Tag Picure  */}
    <b className="welcome-to-openculture-nft-se">
      <p className="welcome-to">
        <span>
          <span>Welcome to </span>
        </span>
      </p>
      <p className="openculture">
        <span>
          <span>OpenCulture</span>
        </span>
      </p>
      <p className="nft-sell-buy">
        <span>
          <span>NFT sell & Buy</span>
        </span>
      </p>
    </b>
    <div className="frame-div1"></div>
    <img
      className="vector-icon2"
      alt=""
      src={img_Import.images["vector-1.svg"]}
    />
    <div className="digital-marketplace-for-crypto">
      <p className="welcome-to">
        Digital marketplace for crypto collections and
      </p>
      <p className="non-fungible-tokens-nfts">non-fungible tokens (NFTs)</p>
    </div>
    <b className="k-b">35k+</b>
    <b className="k-b1">15k+</b>
    <b className="k-b2">25k+</b>
    {/* collaborator */}
    <Collaborator />
    {/* end collaborator */}
    <div className="nft-marketplace-div">NFT Marketplace</div>
    <div className="box-famous-list">
      <div className="viet-nam-art-nft">Viet Nam Art NFT</div>
      <img
        className="vector-icon1"
        alt=""
        src={img_Import.images["fire.png"]}
      />
    </div>
    <button className="frame-button2">
      <div className="art-div">Art</div>
    </button>
    <button className="frame-button3">
      <div className="videos-div">Videos</div>
    </button>
    <div className="frame-div2">
      <div className="photography-div">Photography</div>
    </div>
   
    {/* List Famous Image */}
    <Famous />
    {/* List Famous Image */}
    <div className="block-view-more">
      <div className="frame-div3" id="frameContainer2">
        <div className="view-more-div">View More</div>
      </div>
    </div>
    {/* <img
      className="vector-icon3"
      alt=""
      src={img_Import.images["vector-3.svg"]}
    /> */}
  </div>
    
    {/* <ActionPage/> */}
    <SecondBlock/>
    <Footer/>
</div>
  );
};

export default Home;
