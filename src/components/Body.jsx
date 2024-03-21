import RestCard from "./RestCard";
import restObj from "../../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  //Local state variable - superpowerful variable

  const [listOfRestaurants, setListOfRestaurants] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.65420&lng=77.23730&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    // console.log(json);
    const restaurants =
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    setListOfRestaurants(restaurants);
  };
  //Conditional rendering
  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
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
        {Array.isArray(listOfRestaurants) &&
          listOfRestaurants.map((item) => {
            return <RestCard key={item.info.id} restData={item} />;
          })}
      </div>
    </div>
  );
};

export default Body;
