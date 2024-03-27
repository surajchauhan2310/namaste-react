import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../../utils/contants";

const RestaurantMenu = () => {
  const [restInfo, setRestInfo] = useState(null);

  const { restId } = useParams();

  console.log();
  useEffect(() => {
    fetchMenu();
  }, []);
  const fetchMenu = async () => {
    const data = await fetch(MENU_API + restId);
    const json = await data.json();
    setRestInfo(json.data);
  };

  if (restInfo === null) return <Shimmer />;
  const { name, cuisines, city, costForTwoMessage } =
    restInfo?.cards[2]?.card?.card?.info;

  const { itemCards } =
    restInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card;
  return (
    <div className="menu">
      <h1>{name}</h1>
      <h2>{cuisines.join(", ")}</h2>
      <h3>{costForTwoMessage}</h3>
      <h2>{city}</h2>
      <h2>Menu:</h2>
      <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name + "-" + "\u20B9" + item.card.info.price / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
