import React from "react";

import { IMG_URL } from "../util/constant";
const ReastaurentCard = ({ props }) => {
  console.log(props);
  const description = props.cuisines.join(" ");
  return (
    <>
      <div className="res_card">
        <img src={IMG_URL + props.cloudinaryImageId} alt="" />
        <h3>{props.name}</h3>
        <p>{description}</p>
        <h4 >Rating {props.avgRatingString}</h4>
      </div>
    </>
  );
};

export default ReastaurentCard;
