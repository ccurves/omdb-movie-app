import axios from "axios";

const API_KEY: string | undefined = process.env.REACT_APP_API_KEY;

export const firstApiUrl = `https://www.omdbapi.com/?apiKey=${API_KEY}&s=star-wars&page=`;
export const secondApiUrl = `https://www.omdbapi.com/?apiKey=${API_KEY}&s=batman&page=`;

export const fetchData = async (url: string) => {
  const response = await axios.get(url);
  return response.data;
};

export const mappedData = (data: any[]) =>
  data.map((item: any) => ({
    title: item.Title,
    poster: item.Poster,
  }));
