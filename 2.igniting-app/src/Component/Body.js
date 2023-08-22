import React, { useEffect, useState } from "react";
import ReastaurentCard from "./ReastaurentCard";
import { mockdata } from "../util/mockdata";

const Body = () => {
  const [resdata, setMockdata] = useState(false);

  const [search, setSearch] = useState("");
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.2008459&lng=77.708736&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    setMockdata(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  return (
    <>
      {resdata ? (
        <>
          <button
            type="button"
            onClick={() => {
              const filteredData = resdata.filter(
                (item) => item.info.avgRating > 3.7
              );
              setMockdata(filteredData);
            }}
          >
            Top Rated Restaurent
          </button>

          <div className="filter">
            <input
              type="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button type="button" onClick={() => "s"}>search</button>
          </div>
          <div className="container">
            {resdata.map((element) => (
              <ReastaurentCard props={element.info} key={element.info.id} />
            ))}
          </div>
        </>
      ) : (
        <h1>loading</h1>
      )}
    </>
  );
};

export default Body;
