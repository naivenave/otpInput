import React, { useEffect, useRef, useState } from "react";
import { fetchData } from "./src/apis/fetchDataApis";

const ShowListing = () => {
  const [data, setData] = useState([]);
  const ref = useRef(null);
  const [page, setPage] = useState(0);
  useEffect(() => {
    console.log("ShowListing", page);
    const callApi = async () => {
      const responseData = await fetchData({ limit: 5, skip: page*5 });
      setData((prev) => [...prev, ...responseData]);
    };
    callApi();
  }, [page]);

  useEffect(() => {
    const intersectionCallback = (entries) => {
      console.log(entries);
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          console.log(entry);
          let elem = entry.target;
          setPage((p) => p + 1);
        }
      });
    };
    let options = {};
    const observer = new IntersectionObserver(intersectionCallback, options);
    ref.current && observer.observe(ref.current);
  }, []);
  const handleDataClick =
    ({ id }) =>
    () => {
      console.log(id);
      window.open(`https://dummyjson.com/products/${id}`, "_blank");
    };
  return (
    <div
      style={{ border: "1px solid red", height: "400px", overflow: "scroll" }}
    >
      {data.length > 0 &&
        data.map((data, index) => {
          return (
            <div
              key={index}
              style={{ border: "1px solid red" }}
              onClick={handleDataClick(data)}
            >
              <p>{data.title}</p>
              <p>{data.description}</p>
            </div>
          );
        })}
      <div ref={ref}>Loading...</div>
    </div>
  );
};

export default ShowListing;
