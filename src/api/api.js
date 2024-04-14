import Axios from "axios";

const apiKey = process.env.NEXT_APP_API_KEY;
const baseUrl = process.env.NEXT_APP_BASEURL;

export const getMovieList = () => {
  const movie = Axios.get(`${baseUrl}/movie/now_playing?api_key=${apiKey}`);
  console.log("movielist:", movie);
};
