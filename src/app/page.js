"use client";
import Card from "@/components/Card";
import Header from "@/components/Header";
import VideoPlayer from "@/components/VideoPlayer";
import axios from "axios";
import { useEffect, useState } from "react";

const Home = () => {
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
  const [apiData, setApiData] = useState([]);

  console.log("diluar axios", apiData);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${baseUrl}/movie/now_playing`, {
          headers: {
            accept: "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0YWVkOWQ4MDZhOGE5NzAzNjM4OGM1MWMyZDhlZDJiZiIsInN1YiI6IjY2MWIyZjNmOTY3Y2M3MDE0YzllZTc5MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.rTEWGVgRSa1kntZUTG92a6tit3ciS272jZeNUwhw3T8",
          },
        });
        const limit = 10;
        const limitedResults = response.data.results.slice(0, limit);
        setApiData(limitedResults); // Set data API ke state
        console.log("useEffect", setApiData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <section className="relative ">
        <div className="w-full ">
          <VideoPlayer poster="joker.jpg" src="video/joker.mkv" />
        </div>
      </section>
      <section>
        <Header
          title="Trending"
          linkHref="/now_playing"
          namaLink="Lihat Semua"
        />
        <div className="grid grid-cols-2 my-3 gap-4 md:grid-cols-5 sm:grid-cols-3 mx-3 m-y3">
          {apiData.map((movie, index) => {
            return (
              <Card
                key={index}
                movieImages={`${process.env.NEXT_PUBLIC_API_IMAGE}/${movie.poster_path}`}
                movieLink={movie.id}
                movieTitle={movie.title}
              />
            );
          })}
        </div>
      </section>
    </>
  );
};
export default Home;
