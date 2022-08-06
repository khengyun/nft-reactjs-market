import React from 'react'
import img_Import from '../pages/ActionPage/action/img_Import'



const Footer = () => {
console.log(img_Import.images['ellipse-8.svg'])
  return (
    
    <div className="footer_layout">
      <div className="amazing-nfts-marketplace-auth">
      <p className="amazing-nfts-marketplace">
        Amazing NFTs marketplace, Authentic and unique
      </p>
      <p className="digital-creation-for">
        digital creation for VietNamese Art Culture.
      </p>
        </div>
        <div className="copyright-2022-openculture-al">
      Copyright 2022 OpenCulture, All right reserved.
        </div>
        <div className="openculture-div">OpenCulture</div>
        <img className="ellipse-icon9" alt="" src={img_Import.images['ellipse-8.svg']}  />
        <img className="ellipse-icon10" alt="" src={img_Import.images['ellipse-8.svg']} />
        <img className="ellipse-icon11" alt="" src={img_Import.images['ellipse-8.svg']} />
        <img className="ellipse-icon12" alt="" src={img_Import.images['ellipse-8.svg']} />
        <img className="vector-icon" alt="" src={img_Import.images['vector.svg']} />
        <img className="vector-icon1" alt="" src={img_Import.images['vector1.svg']} />
        <img className="vector-icon2" alt="" src={img_Import.images['vector2.svg']} />
        <img className="vector-icon3" alt="" src={img_Import.images['vector3.svg']} />
        <b className="marketplace-b">Marketplace</b>
        <b className="resources-b">Resources</b>
        <div className="privacy-policy-div">Privacy Policy</div>
        <div className="terms-conditions">Terms & Conditions</div>
        <b className="company-b">Company</b>
        <div className="explore-div">Explore</div>
        <div className="help-center-div">Help Center</div>
        <div className="about-us-div">About Us</div>
        <div className="nfts-div">NFTs</div>
        <div className="partners-div">Partners</div>
        <div className="careers-div">Careers</div>
        <div className="collectibles-div">Collectibles</div>
        <div className="blog-div">Blog</div>
        <div className="support-div">Support</div>
        <div className="newsletter-div">Newsletter</div>
        <div className="newsletter-div1">Newsletter</div>
    </div>
  )
}
export default Footer