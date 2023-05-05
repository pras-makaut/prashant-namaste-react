import { CDN_URL } from "../utils/constant";
import { useContext } from "react";
import UserContext from "../utils/UserContext";

const FoodItems = ({ name, description, imageId, price }) => {
  const { user } = useContext(UserContext);

  return (
    <div className="w-56 p-2 m-2 shadow-lg bg-pink-50">
      <img className="res-card-image" src={CDN_URL + imageId} alt="" />
      <h3 className="font-bold text-lg my-2">{name}</h3>
      <h4>{description}</h4>
      <h4>Ruppes = {price / 100}</h4>
      <h4>{user.email}</h4>
    </div>
  );
};
export default FoodItems;
