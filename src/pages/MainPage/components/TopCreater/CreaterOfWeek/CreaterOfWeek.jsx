import React from "react";
import img_Import from './../../../action/img_Import';
import './CreaterOfWeek.css'
// "public/image-3@2x.png"
export const CreaterOfWeek = (props) => {
  
  return (
    <div className="create-of-week-tag">
      <img className="author-icon" alt="" src={img_Import.images["image-32x.png"]} />
      <div className="detail-create-of-week">
        <div className="author-name">Quynh Anh</div>
        <div className="eth-icon-number-week-tag">
          <img className="eth-icon" alt="" src={img_Import.images["ellipse-62x.png"]} />
          <div className="eth-number">19,400.50 ETH</div>
        </div>
      </div>
      <img class="icon-more" alt="" src={img_Import.images["icon.svg"]}></img>
    </div>
  );
};
