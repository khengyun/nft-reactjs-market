import React from "react";
import img_Import from "../../action/img_Import";
import { Child_Famous } from "./Child_Famous/Child_Famous";
import './FamousBox.css'

const FamousBox = () => {
  return (
    <div className="Famous-list-box">


      <Child_Famous/>
      <Child_Famous/>
      <Child_Famous/>
      <Child_Famous/>
 
    </div>
  );
};

export default FamousBox;
