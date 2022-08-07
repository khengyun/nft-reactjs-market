import React from "react";
import { CreaterOfWeek } from "./CreaterOfWeek/CreaterOfWeek";
import './ListTopCreater.css'
export const ListTopCreater = () => {
  return (
    <div className="list-top-creater">
      <CreaterOfWeek/>
      <CreaterOfWeek/>
      <CreaterOfWeek/>
    
    </div>
  );
};
