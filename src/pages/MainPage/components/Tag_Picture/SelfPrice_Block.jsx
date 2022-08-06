import React from "react";
import "./SelfPrice_block.css";
import img_Import from "../../../ActionPage/action/img_Import";
export const SelfPrice_Block = (props) => {
  const {Name,Value,Icons} = props
  return (
    <div>
      <div className="selfprice-block">
        <div className="current-bid-div">{Name}</div>
        <div className="eth-div">
          
          <div className="eth-icon">
            {"Current Bid" && Icons  }
          </div>
          <div className="value-tag">{Value}</div>
        </div>
        {/* <img
              className="vector-icon"
              alt=""
              src={img_Import.images["vector.svg"]}
            /> */}
      </div>

     
    </div>
  );
};
