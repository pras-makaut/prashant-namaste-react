import RestaurentCard from "./RestaurentCard";
import resObj from "../utils/mockdata";
import Shimmer from "./Shimmer";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";
import useRestaurentList from "../utils/useRestaurentList";
import useOnline from "../utils/useOnline";

const Body = () => {
  const [listOfRestaurent, filterRestaurent] = useRestaurentList();
  //normal java script variabel
  const [searchText, setSearchText] = useState("");

  //Early return or not render component
  const online = useOnline();

  if (!online) {
    return <h1>You are offline!Please check your internet connection</h1>;
  }
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
          <Link to={"/restaurent/" + ele.data.id} key={ele.data.id}>
            {" "}
            <RestaurentCard key={ele.data.id} resData={ele} />
          </Link>
        ))}
        {/* <RestaurentCard resName="KFC" cusins="Burger Fried Chicken" /> */}
      </div>
    </div>
  );
};

export default Body;
