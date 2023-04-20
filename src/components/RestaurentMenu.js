import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CDN_URL } from "../utils/constant";

const RestaurentMenu = () => {
  const { id } = useParams();
  const [restaurent, setRestaurent] = useState({});
  const [restaurentMenu, setRestaurentMenu] = useState([]);
  useEffect(() => {
    getRestaurantData();
  }, []);

  async function getRestaurantData() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=25.5940499&lng=85.1376051&restaurantId=" +
        id +
        "&submitAction=ENTER"
    );
    const json = await data.json();

    setRestaurent(json?.data?.cards[0]?.card?.card?.info);
    setRestaurentMenu(
      json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
        ?.card?.itemCards
    );
  }

  return (
    <div className="menu">
      <div>
        <h1>Retaurent id :{restaurent.id}</h1>
        <h2>{restaurent?.name}</h2>
        <img src={CDN_URL + restaurent.cloudinaryImageId} />
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
