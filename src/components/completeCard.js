import axios from "axios";
import { useEffect, useState } from "react";
import { countries } from "./Data";
import { NewsCard } from "./newsCard";

export const CompleteCard = ({ selectedCountry, selectedCotegary }) => {
  console.log(selectedCotegary, selectedCountry);
  const [fetchedData, setFetchedData] = useState({});
  const handleClick = () => {
    axios
      .get(
        `https://newsdata.io/api/1/news?apikey=pub_2912749c673bee3500033f1f18aad34e68797&country=${countries[selectedCountry]}&language=en&category=${selectedCotegary}&page=${fetchedData.nextPage}`
      )
      .then(async (res) => {
        setFetchedData(res.data);
      });
  };
  useEffect(() => {
    axios

      .get(
        `https://newsdata.io/api/1/news?apikey=pub_2912749c673bee3500033f1f18aad34e68797&country=${countries[selectedCountry]}&language=en&category=${selectedCotegary}`
      )
      .then(async (res) => {
        setFetchedData(res.data);
      });
  }, [selectedCotegary, selectedCountry]);
  return (
    <div>
      {Object.keys(fetchedData).length > 0 ? (
        <NewsCard articles={fetchedData.results}> </NewsCard>
      ) : null}
      <div
        className=" next text-end "
        style={{ fontSize: "30px", marginRight: "40px", marginBottom: "50px" }}
        onClick={() => handleClick()}
      >
        <span style={{ backgroundColor: "gray", cursor: "pointer" }}>
          {" "}
          Next Page{" "}
        </span>
      </div>
    </div>
  );
};
