import React from "react";
import "./header.css";

export const Header = () => {
  return (
    <div className="header-tag">
      <div className="openculture2-div">OpenCulture</div>
      <b className="explore-b" id="home" >Home</b>
      <b className="marketplace-div"  id="auction" >Auctions</b>
      <b className="artist-div" id="mint" >Mint NFT</b>
      <b className="collection-div"  id="create-auction" >Create Auction</b>
      {/* <div id="search-formk">
        <input className="frame-inputk" placeholder="Search..." type="text" />
        <button className="search-button">
          <svg viewBox="0 0 1024 1024">
            <path
              className="path1"
              d="M848.471 928l-263.059-263.059c-48.941 36.706-110.118 55.059-177.412 55.059-171.294 0-312-140.706-312-312s140.706-312 312-312c171.294 0 312 140.706 312 312 0 67.294-24.471 128.471-55.059 177.412l263.059 263.059-79.529 79.529zM189.623 408.078c0 121.364 97.091 218.455 218.455 218.455s218.455-97.091 218.455-218.455c0-121.364-103.159-218.455-218.455-218.455-121.364 0-218.455 97.091-218.455 218.455z"
            ></path>
          </svg>
        </button>
      </div> */}

      <div className="signin-signout-button">

        <button className="frame-buttonk-signin">
          <b className="sign-in-b2-button"  id="signin" >Sign in</b>
        </button>

        <button className="frame-buttonk">
          <b className="sign-in-b2-button"  id="signout" >Sign out</b>
        </button>
      </div>
    </div>  
  );
};
