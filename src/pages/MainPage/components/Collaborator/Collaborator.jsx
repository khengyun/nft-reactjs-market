import React from "react";
import img_Import from "../../action/img_Import";


const Collaborator = () => {
  return (
    <div className="collaborator-image">
      <img
        className="image-removebg-preview-6-button"
        src={img_Import.images["imageremovebgpreview62x.png"]}
      />
      <img
        className="image-removebg-preview-12-1"
        alt=""
        src={img_Import.images["imageremovebgpreview-12-12x.png"]}
      />
      <img
        className="image-removebg-preview-13-1"
        src={img_Import.images["imageremovebgpreview1312x.png"]}
      ></img>
      <img
        className="image-removebg-preview-7-1"
        alt=""
        src={img_Import.images["imageremovebgpreview-7-12x.png"]}
      />
    </div>
  );
};

export default Collaborator;
