import axios from "axios";
import { useEffect, useState } from "react";
import { countries } from "./Data";
import { NewsCard } from "./newsCard";

export const CompleteCard = ({ selectedCountry, selectedCotegary }) => {
  console.log(selectedCotegary, selectedCountry);
  const [fetchedData, setFetchedData] = useState({});

  useEffect(() => {
    axios
      .get(
        `https://newsapi.org/v2/top-headlines?country=${countries[selectedCountry]}&category=${selectedCotegary}&pageSize=30&apiKey=1b2fda85900b4639a99eb6c1fc7e3dcd`
      )
      .then(async (res) => {
        setFetchedData(res.data);
      });
  }, [selectedCotegary, selectedCountry]);
  return (
    <div>
      {console.log(fetchedData)}
      {Object.keys(fetchedData).length > 0 ? (
        <NewsCard articles={fetchedData.articles}> </NewsCard>
      ) : null}
    </div>
  );
};
