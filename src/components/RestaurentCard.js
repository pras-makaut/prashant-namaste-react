import { CDN_URL } from "../utils/constant";

const RestaurentCard = (props) => {
  const { resData } = props;

  const {
    name,
    cloudinaryImageId,
    cuisines,
    avgRating,
    costForTwo,
    deliveryTime,
  } = resData?.data;
  return (
    <div className="res-card">
      <img
        className="res-card-image"
        src={CDN_URL + cloudinaryImageId}
        alt=""
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} Stars</h4>
      <h4>{costForTwo / 100}</h4>
      <h4>{deliveryTime} Minutes</h4>
    </div>
  );
};
export default RestaurentCard;