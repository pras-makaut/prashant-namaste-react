import { CDN_URL } from "../utils/constant";
import { useContext } from "react";
import UserContext from "../utils/UserContext";

const RestaurentCard = (props) => {
  const { resData } = props;
  const { user } = useContext(UserContext);

  const {
    name,
    cloudinaryImageId,
    cuisines,
    avgRating,
    costForTwo,
    deliveryTime,
  } = resData?.data;
  return (
    <div className="w-56 p-2 m-2 shadow-lg bg-pink-50">
      <img
        className="res-card-image"
        src={CDN_URL + cloudinaryImageId}
        alt=""
      />
      <h3 className="font-bold text-lg my-2">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} Stars</h4>
      <h4>{costForTwo / 100}</h4>
      <h4>{deliveryTime} Minutes</h4>
      <h4>{user.email}</h4>
    </div>
  );
};
export default RestaurentCard;
