import React from "react";
import img_Import from "../pages/MainPage/action/img_Import";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer_layout">
      <div className="final-block-one">
        <div className="openculture-div">OpenCulture</div>
        <p className="amazing-nfts-marketplace">
          Amazing NFTs marketplace, Authentic and unique digital creation for
          VietNamese Art Culture.
        </p>
        <div className="final-icon-block">


          <div className="connect-icon-footer">
            <img
              className="ellipse-iconk"
              alt=""
              src={img_Import.images["ellipse-8.svg"]}
            />
            <img className="vector-iconkk" alt="" src={img_Import.images["phone-icon.svg"]} />
          </div>



          <div className="connect-icon-footer">
            <img
              className="ellipse-iconk"
              alt=""
              src={img_Import.images["ellipse-8.svg"]}
            />
            <img className="vector-iconkk " id="face-icon" alt="" src={img_Import.images["facebook-icon.svg"]} />
          </div>


          <div className="connect-icon-footer">
            <img
              className="ellipse-iconk"
              alt=""
              src={img_Import.images["ellipse-8.svg"]}
            />
            <img className="vector-iconkk" id="camera-icon" alt="" src={img_Import.images["vector2.svg"]} />
          </div>



          <div className="connect-icon-footer">
            <img
              className="ellipse-iconk"
              alt=""
              src={img_Import.images["ellipse-8.svg"]}
            />
            <img className="vector-iconkk" id="youtube-icon" alt="" src={img_Import.images["vector3.svg"]} />
          </div>



        </div>
      </div>

      <div className="final-block-two">
        <div className="information-aboutus-block">
          <div className="market-block">
            <b className="marketplace-b">Marketplace</b>
            <div className="member">
              <div className="explore-div">Explore</div>
              <div className="nfts-div">NFTs</div>
              <div className="collectibles-div">Collectibles</div>
            </div>
          </div>
          <div className="resources-block">
            <b className="resources-b">Resources</b>
            <div className="member">
              <div className="help-center-div">Help Center</div>
              <div className="partners-div-k">Partners</div>
              <div className="blog-div">Blog</div>
            </div>
          </div>
          <div className="company-block">
            <b className="company-b">Company</b>
            <div className="member">
              <div className="about-us-div">About Us</div>
              <div className="careers-div">Careers</div>
              <div className="support-div">Support</div>
            </div>
          </div>
        </div>
      </div>

      <div className="copyright-2022-openculture-al">
        Copyright 2022 OpenCulture, All right reserved.
      </div>

      <div className="final-block">
        <div className="privacy-policy-div">Privacy Policy</div>
        <div className="terms-conditions">Terms & Conditions</div>
      </div>
    </div>
  );
};
export default Footer;
