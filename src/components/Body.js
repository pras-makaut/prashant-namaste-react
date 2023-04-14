import RestaurentCard from "./RestaurentCard";
import resObj from "../utils/mockdata";
const Body = () => {
  return (
    <div className="body">
      <div className="serach">Search</div>
      <div className="res-container">
        {resObj.map((ele, idx) => (
          <RestaurentCard key={ele.data.id} resData={ele} />
        ))}
        {/* <RestaurentCard resName="KFC" cusins="Burger Fried Chicken" /> */}
      </div>
    </div>
  );
};

export default Body;
