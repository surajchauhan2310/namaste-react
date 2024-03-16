import RestCard from "./RestCard";
import restObj from "../../utils/mockData";
import { useState } from "react";

const Body = () => {
  //Local state variable - superpowerful variable
  const [listOfRestaurants, setListOfRestaurants] = useState(restObj);
  return (
    <div className="Body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4.2
            );
            setListOfRestaurants(filteredList);
          }}
        >
          Top rated restaurant
        </button>
      </div>
      <div className="rest-container">
        {listOfRestaurants.map((item) => {
          return <RestCard key={item.info.id} restData={item} />;
        })}
      </div>
    </div>
  );
};

export default Body;
