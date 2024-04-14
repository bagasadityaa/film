"use client";
import Card from "@/components/Card";
import Header from "@/components/Header";
import VideoPlayer from "@/components/VideoPlayer";
import axios from "axios";
import { useEffect, useState } from "react";

const Home = () => {
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
  const [apiDataNow, setApiDataNow] = useState([]);
  const [apiDataPopular, setApiDataPopular] = useState([]);
  const [apiDataTopRated, setApiDataTopRated] = useState([]);
  const [apiDataUpComing, setApiDataUpComing] = useState([]);

  // console.log("diluar axios", apiData);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${baseUrl}/movie/upcoming`, {
          headers: {
            accept: "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0YWVkOWQ4MDZhOGE5NzAzNjM4OGM1MWMyZDhlZDJiZiIsInN1YiI6IjY2MWIyZjNmOTY3Y2M3MDE0YzllZTc5MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.rTEWGVgRSa1kntZUTG92a6tit3ciS272jZeNUwhw3T8",
          },
        });
        const limit = 10;
        const limitedResults = response.data.results.slice(0, limit);
        setApiDataUpComing(limitedResults); // Set data API ke state
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);
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
        setApiDataNow(limitedResults); // Set data API ke state
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${baseUrl}/movie/popular`, {
          headers: {
            accept: "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0YWVkOWQ4MDZhOGE5NzAzNjM4OGM1MWMyZDhlZDJiZiIsInN1YiI6IjY2MWIyZjNmOTY3Y2M3MDE0YzllZTc5MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.rTEWGVgRSa1kntZUTG92a6tit3ciS272jZeNUwhw3T8",
          },
        });
        const limit = 10;
        const limitedResults = response.data.results.slice(0, limit);
        setApiDataPopular(limitedResults); // Set data API ke state
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${baseUrl}/movie/top_rated`, {
          headers: {
            accept: "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0YWVkOWQ4MDZhOGE5NzAzNjM4OGM1MWMyZDhlZDJiZiIsInN1YiI6IjY2MWIyZjNmOTY3Y2M3MDE0YzllZTc5MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.rTEWGVgRSa1kntZUTG92a6tit3ciS272jZeNUwhw3T8",
          },
        });
        const limit = 10;
        const limitedResults = response.data.results.slice(0, limit);
        setApiDataTopRated(limitedResults); // Set data API ke state
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${baseUrl}/movie/upcoming`, {
          headers: {
            accept: "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0YWVkOWQ4MDZhOGE5NzAzNjM4OGM1MWMyZDhlZDJiZiIsInN1YiI6IjY2MWIyZjNmOTY3Y2M3MDE0YzllZTc5MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.rTEWGVgRSa1kntZUTG92a6tit3ciS272jZeNUwhw3T8",
          },
        });
        const limit = 10;
        const limitedResults = response.data.results.slice(0, limit);
        setApiDataTopRated(limitedResults); // Set data API ke state
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <section>
        <div className="w-full ">
          <VideoPlayer poster="joker.jpg" src="video/joker.mkv" />
        </div>
      </section>
      <section className="mx-4 my-8">
        <Header
          title="Coming Soon"
          linkHref="/upcoming"
          namaLink="Lihat Semua"
        />

        <div className="grid grid-cols-2 my-3 gap-4 md:grid-cols-5 sm:grid-cols-3 mx-3 m-y3">
          {apiDataUpComing.map((movie, index) => {
            return (
              <Card
                key={index}
                movieImages={`${process.env.NEXT_PUBLIC_API_IMAGE}/${movie.poster_path}`}
                movieLink={movie.id}
                movieTitle={movie.title}
                movieAlt={movie.title}
              />
            );
          })}
        </div>
      </section>
      <section className="mx-4 my-8">
        <Header
          title="Sedang Tayang"
          linkHref="/now_playing"
          namaLink="Lihat Semua"
        />
        <div className="grid grid-cols-2 my-3 gap-4 md:grid-cols-5 sm:grid-cols-3 mx-3 m-y3">
          {apiDataNow.map((movie, index) => {
            return (
              <Card
                key={index}
                movieImages={`${process.env.NEXT_PUBLIC_API_IMAGE}/${movie.poster_path}`}
                movieLink={movie.id}
                movieTitle={movie.title}
                movieAlt={movie.title}
              />
            );
          })}
        </div>
      </section>
      <section className="mx-4 my-8">
        <Header
          title="Paling Banyak ditonton"
          linkHref="/popular"
          namaLink="Lihat Semua"
        />
        <div className="overflow-x-auto">
          <div className="grid grid-cols-2 my-3 gap-4 md:grid-cols-5 sm:grid-cols-3 mx-3 m-y3">
            {apiDataPopular.map((movie, index) => {
              return (
                <Card
                  key={index}
                  movieImages={`${process.env.NEXT_PUBLIC_API_IMAGE}/${movie.poster_path}`}
                  movieLink={movie.id}
                  movieTitle={movie.title}
                  movieAlt={movie.title}
                />
              );
            })}
          </div>
        </div>
      </section>
      <section className="mx-4 my-8">
        <Header
          title="Rating Tinggi"
          linkHref="/top_rated"
          namaLink="Lihat Semua"
        />
        <div className="grid grid-cols-2 my-3 gap-4 md:grid-cols-5 sm:grid-cols-3 mx-3 m-y3">
          {apiDataTopRated.map((movie, index) => {
            return (
              <Card
                key={index}
                movieImages={`${process.env.NEXT_PUBLIC_API_IMAGE}/${movie.poster_path}`}
                movieLink={movie.id}
                movieTitle={movie.title}
                movieAlt={movie.title}
              />
            );
          })}
        </div>
      </section>
    </>
  );
};
export default Home;
