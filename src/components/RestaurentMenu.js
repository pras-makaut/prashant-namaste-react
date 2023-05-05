import { useContext, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { addItems } from "../utils/cartSlice";
import { CDN_URL } from "../utils/constant";
import useRestaurent from "../utils/useRestaurent";

const RestaurentMenu = () => {
  const { id } = useParams();
  const [restaurent, restaurentMenu] = useRestaurent(id);

  const dispatch = useDispatch();
  const handleAddItem = (item) => {
    dispatch(addItems(item));
  };
  return (
    <div className="flex flex-wrap p-2 m-2">
      <div className="m-2 p-2">
        <h1>Retaurent id :{restaurent.id}</h1>
        <h2>{restaurent?.name}</h2>
        <img src={CDN_URL + restaurent?.cloudinaryImageId} />
        <h3>{restaurent.areaName}</h3>
        <h3>{restaurent.city}</h3>
        <h3>{restaurent.avgRating}</h3>
        <h3>{restaurent.costForTwoMessage}</h3>
        {/* <div>
          <button className="mt-3 bg-green-100" onClick={() => handleAddItem()}>
            Add Items
          </button>
        </div> */}
      </div>

      <div className="mx-4">
        <h1>Menu</h1>
        <ul data-testid="menu">
          {restaurentMenu?.map((items) => (
            <li key={items?.card?.info?.id}>
              {items?.card?.info?.name}{" "}
              <button
                data-testid="addBtn"
                className="p-1 bg-green-50"
                onClick={() => handleAddItem(items?.card?.info)}
              >
                Add
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default RestaurentMenu;
