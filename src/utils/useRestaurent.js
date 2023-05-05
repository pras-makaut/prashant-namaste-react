import { useState, useEffect } from "react";
import { FETCH_URL } from "./constant";
import { MENU_DATA } from "../mocks/data";

const useRestaurent = (id) => {
  const [restaurent, setRestaurent] = useState({});
  const [restaurentMenu, setRestaurentMenu] = useState([]);
  useEffect(() => {
    getRestaurantData();
  }, []);

  async function getRestaurantData() {
    const data = await fetch(FETCH_URL + id + "&submitAction=ENTER");
    const json = await data.json();
    // const json = MENU_DATA;

    setRestaurent(json?.data?.cards[0]?.card?.card?.info);
    setRestaurentMenu(
      json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
        ?.card?.itemCards
    );
  }

  return [restaurent, restaurentMenu];
};

export default useRestaurent;
