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
      <h3 className="card-title">{restData.info.name}</h3>
      <h4 className="card-subtitle">
        {restData.info.cuisines.slice(0, 4).join(", ")}
      </h4>
      <h4 className="card-subtitle">{restData.info.avgRating} stars</h4>
      <h4 className="card-subtitle">{restData.info.costForTwo}</h4>
      <h4 className="card-subtitle">{restData.info.areaName}</h4>
      <h4 className="card-subtitle">{restData.info.deliveryTime}</h4>
    </div>
  );
};

export default RestCard;
