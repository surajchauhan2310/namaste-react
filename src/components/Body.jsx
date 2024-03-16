import RestCard from "./RestCard";
import restObj from "../../utils/mockData";

const Body = () => {
  return (
    <div className="Body">
      <div className="searchBar"></div>
      <div className="rest-container">
        {restObj.map((item) => {
          return <RestCard restData={item} />;
        })}
      </div>
    </div>
  );
};

export default Body;
