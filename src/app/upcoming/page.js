"use client";
import { Back } from "@/components/Back";
import Card from "@/components/Card";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Page = () => {
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
  const [apiData, setApiData] = useState([]);

  console.log("diluar axios", apiData);

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
        setApiData(response.data.results);
        console.log("useEffect", setApiData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);
  const router = useRouter;
  const handleGoBack = () => {
    router.back();
  };

  return (
    <div className="mx-4 my-4">
      <div className="flex flex-row mx-5  items-center">
        <Back />
        <h3 className="text-2xl font-bold text-color-primary p-4">
          Coming Soon
        </h3>
      </div>
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
    </div>
  );
};

export default Page;
