import RestaurentCard from "./RestaurentCard";
import resObj from "../utils/mockdata";
import Shimmer from "./Shimmer";
import { useState, useEffect } from "react";

function filterData(searchText, restaurants) {
  const filterData = restaurants.filter((restaurant) =>
    restaurant?.data?.name?.toLowerCase()?.includes(searchText?.toLowerCase())
  );
  return filterData;
}

const Body = () => {
  const [listOfRestaurent, setListOfRestaurent] = useState([]);
  const [filterRestaurent, setFilterRestaurent] = useState([]);
  //normal java script variabel
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    getRestaurents();
  }, []);
  async function getRestaurents() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.5940499&lng=85.1376051&page_type=DESKTOP_WEB_LISTING#"
    );
    const json = await data.json();
    console.log(json);
    setListOfRestaurent(json?.data?.cards[2]?.data?.data?.cards);
    setFilterRestaurent(json?.data?.cards[2]?.data?.data?.cards);
  }
  //Early return or not render component

  if (listOfRestaurent?.length === 0) {
    return <Shimmer />;
  }

  return filterRestaurent?.length === 0 ? (
    <>
      <div className="filter">
        <input
          type="text"
          className="search-input"
          placeholder="search"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          className="filter-btn"
          onClick={() => {
            const filterListOfRestaurent = filterData(
              searchText,
              listOfRestaurent
            );
            setFilterRestaurent(filterListOfRestaurent);
          }}
        >
          Search
        </button>
      </div>
      <h1>No filtered Restaurents</h1>
    </>
  ) : (
    <div className="body">
      <div className="filter">
        <input
          type="text"
          className="search-input"
          placeholder="search"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          className="filter-btn"
          onClick={() => {
            const filterListOfRestaurent = filterData(
              searchText,
              listOfRestaurent
            );
            setFilterRestaurent(filterListOfRestaurent);
          }}
        >
          Search
        </button>
      </div>
      <div className="res-container">
        {filterRestaurent.map((ele, idx) => (
          <RestaurentCard key={ele.data.id} resData={ele} />
        ))}
        {/* <RestaurentCard resName="KFC" cusins="Burger Fried Chicken" /> */}
      </div>
    </div>
  );
};

export default Body;
