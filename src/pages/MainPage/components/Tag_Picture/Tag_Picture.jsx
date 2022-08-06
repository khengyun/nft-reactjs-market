import React from "react";
import { SelfPrice_Block } from "./SelfPrice_Block.jsx";
import "./Tag_Picture.css";
import img_Import from "../../action/img_Import.js";

export const Tag_Picture = () => {
  console.log(img_Import)
  return (
    <div className="frame-div">
      <div className="picture_and_detail">
        <img
          className="image-1-icon"
          alt=""
          src={img_Import.images["image-12x.png"]}
        />

        <div className="detail">
          <div className="name_and_users">
            <b className="hue-viet-nam">Hue - Viet Nam</b>
            <div className="list-user-image-in-most-popular">
              <img
                className="ellipse-icon"
                alt=""
                src={img_Import.images["ellipse-12x.png"]}
              />
              <img
                className="ellipse-icon"
                alt=""
                src={img_Import.images["ellipse-22x.png"]}
              />
              <img
                className="ellipse-icon"
                alt=""
                src={img_Import.images["ellipse-32x.png"]}
              />
              <img
                className="ellipse-icon"
                alt=""
                src={img_Import.images["ellipse-42x.png"]}
              />
              <img
                className="ellipse-icon"
                alt=""
                src={img_Import.images["ellipse-52x.png"]}
              />
            </div>
          </div>
          <div className="selfprice-action-most-popular">
            <SelfPrice_Block
              Name={"Current Bid"}
              Value={"0.45 ETH"}
              Icons={
                <img
                  className="ellipse-icon5"
                  alt=""
                  src={img_Import.images["ellipse-62x.png"]}
                />
              }
            />

            <SelfPrice_Block Name={"Author"} Value={"900 Authors"} />

            <SelfPrice_Block
              Name={"Ending In"}
              Value={"10h 43m 26s"}
              Icons={
                <img
                  className="vector-icon"
                  alt=""
                  src={img_Import.images["vector.svg"]}
                />
              }
            />


            {/* <div className="author-selfprice">
              <div className="current-bid-div1">Author</div>
              <div className="authors-div">900 Authors</div>
            </div>

            <div className="ending-selfprice">
              <div className="ending-in-div">Ending In</div>
              <div className="h-43m-26s">10h 43m 26s</div>
            </div> */}


          </div>
        </div>
      </div>
    </div>
  );
};
