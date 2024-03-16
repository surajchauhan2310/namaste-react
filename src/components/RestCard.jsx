import { CDN_URL } from "../../utils/contants";

const RestCard = (props) => {
  const { restData } = props;
  console.log(props);
  return (
    <div className="rest-card">
      <img
        className="restName"
        alt="restName"
        src={CDN_URL + restData.info.cloudinaryImageId}
      ></img>
      <h3>{restData.info.name}</h3>
      <h4>{restData.info.cuisines.slice(0, 4).join(", ")}</h4>
      <h4>{restData.info.avgRating} stars</h4>
      <h4>{restData.info.costForTwo}</h4>
      <h4>{restData.info.deliveryTime}</h4>
      <h4>{restData.info.areaName}</h4>
    </div>
  );
};

export default RestCard;
