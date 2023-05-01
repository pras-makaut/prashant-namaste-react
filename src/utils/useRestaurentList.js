import { useState, useEffect } from "react";
import { FETCH_RESTAURENT } from "./constant";

const useRestaurentList = () => {
  const [listOfRestaurent, setListOfRestaurent] = useState([]);
  const [filterRestaurent, setFilterRestaurent] = useState([]);

  useEffect(() => {
    getRestaurents();
  }, []);
  async function getRestaurents() {
    const data = await fetch(FETCH_RESTAURENT);
    const json = await data.json();
    setListOfRestaurent(json?.data?.cards[2]?.data?.data?.cards);
    setFilterRestaurent(json?.data?.cards[2]?.data?.data?.cards);
  }

  return [listOfRestaurent, filterRestaurent, setFilterRestaurent];
};

export default useRestaurentList;
