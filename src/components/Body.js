import RestaurentCard from "./RestaurentCard";
import resObj from "../utils/mockdata";
import Shimmer from "./Shimmer";
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";
import useRestaurentList from "../utils/useRestaurentList";
import useOnline from "../utils/useOnline";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [listOfRestaurent, filterRestaurent, setFilterRestaurent] =
    useRestaurentList();

  //normal java script variabel
  const [searchText, setSearchText] = useState("");
  const { user, setUser } = useContext(UserContext);

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
      <div className="p-5 bg-pink-50 my-5">
        <input
          type="text"
          className="h-11 rounded-lg"
          placeholder="search"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          className="p-2 m-2 bg-purple-900 text-white rounded-lg"
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
      <div className="p-5 bg-pink-50 my-5">
        <input
          data-testid="search-input"
          type="text"
          className="h-11 rounded-lg focus:bg-slate-500"
          placeholder="search"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          data-testid="search-btn"
          className="p-2 m-2 bg-purple-900 text-white rounded-lg hover:bg-green-400"
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

        <input
          value={user.name}
          onChange={(e) =>
            setUser({
              ...user,
              name: e.target.value,
            })
          }
        />
        <input
          value={user.email}
          onChange={(e) =>
            setUser({
              ...user,
              email: e.target.value,
            })
          }
        />
      </div>
      <div
        className="flex flex-wrap justify-around my-10"
        data-testid="restaurant-list"
      >
        {filterRestaurent?.map((ele, idx) => (
          <Link to={"/restaurent/" + ele.data.id} key={ele.data.id}>
            <RestaurentCard key={ele.data.id} resData={ele} />
          </Link>
        ))}
        {/* <RestaurentCard resName="KFC" cusins="Burger Fried Chicken" /> */}
      </div>
    </div>
  );
};

export default Body;
