import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CDN_URL } from "../utils/constant";
import useRestaurent from "../utils/useRestaurent";

const RestaurentMenu = () => {
  const { id } = useParams();
  const [restaurent, restaurentMenu] = useRestaurent(id);
  return (
    <div className="menu">
      <div>
        <h1>Retaurent id :{restaurent.id}</h1>
        <h2>{restaurent?.name}</h2>
        <img src={CDN_URL + restaurent?.cloudinaryImageId} />
        <h3>{restaurent.areaName}</h3>
        <h3>{restaurent.city}</h3>
        <h3>{restaurent.avgRating}</h3>
        <h3>{restaurent.costForTwoMessage}</h3>
      </div>
      <div className="menu-item">
        <h1>Menu</h1>
        {restaurentMenu?.map((items) => (
          <li key={items?.card?.info?.id}>{items?.card?.info?.name}</li>
        ))}
      </div>
    </div>
  );
};
export default RestaurentMenu;
