import { ChakraProvider } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import "./App.css";
import CatCards from "./components/Card";
import {
  fetchData,
  firstApiUrl,
  mappedData,
  secondApiUrl,
} from "./data/fetchFunctions";

type Props = {};

const App = (props: Props) => {
  const [firstCategory, setFirstCategory] = useState<
    {
      title: string;
      poster: string;
    }[]
  >([]);
  const [secondCategory, setSecondCategory] = useState<
    {
      title: string;
      poster: string;
    }[]
  >([]);
  const [searchCategory, setSearchCategory] = useState<
    {
      title: string;
      poster: string;
    }[]
  >([]);
  const [searchValue, setSearchValue] = useState("");
  const API_KEY: string | undefined = process.env.REACT_APP_API_KEY;

  const fetchLogic = async () => {
    for (let page = 1; page < 3; page++) {
      fetchData(firstApiUrl + page).then((data) => {
        const mappedMag = mappedData(data.Search);
        setFirstCategory([...firstCategory, ...mappedMag]);
      });
      fetchData(secondApiUrl + page).then((data) => {
        const mappedHero = mappedData(data.Search);
        setSecondCategory([...secondCategory, ...mappedHero]);
      });
    }
  };

  useEffect(() => {
    fetchLogic();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    if (searchValue !== "") {
      const searchUrl = `https://www.omdbapi.com/?apiKey=${API_KEY}&s=${searchValue}&page=1`;
      fetchData(searchUrl).then((data) => {
        if (data.Search.length > 0) {
          const mappedSearch = mappedData(data.Search);
          setSearchCategory([...mappedSearch]);
        }
      });
    } else {
      fetchLogic();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchValue]);

  return (
    <ChakraProvider>
      <Navbar />
      <Hero />
      <SearchBar searchValue={searchValue} setSearchValue={setSearchValue} />
      {searchValue && searchCategory.length > 0 && (
        <CatCards categoryName="Search Results" movies={searchCategory} />
      )}
      <CatCards categoryName="Sci-Fi" movies={firstCategory} />
      <CatCards categoryName="Action" movies={secondCategory} />
    </ChakraProvider>
  );
};

export default App;
