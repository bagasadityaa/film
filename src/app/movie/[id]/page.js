"use client";
import { Back } from "@/components/Back";
import { CaretLeft } from "@phosphor-icons/react";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const Page = ({ params: { id } }) => {
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
  const [data, setData] = useState();
  console.log("apiData", data);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${baseUrl}/movie/${id}`, {
          headers: {
            accept: "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0YWVkOWQ4MDZhOGE5NzAzNjM4OGM1MWMyZDhlZDJiZiIsInN1YiI6IjY2MWIyZjNmOTY3Y2M3MDE0YzllZTc5MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.rTEWGVgRSa1kntZUTG92a6tit3ciS272jZeNUwhw3T8",
          },
        });

        setData(response.data); // Set data API ke state
        console.log("Data API:", response.data); // Tambahkan ini
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [baseUrl, id]);

  return (
    <>
      {data && (
        <>
          <div className="flex flex-row mx-5  items-center">
            <Back />
            <h3 className="text-2xl font-bold text-color-primary p-4">
              {data.title}
            </h3>
          </div>
          <div className="pt-4 px-4 flex-wrap justify-center lg:justify-start  flex gap-2 text-color-primary overflow-x-auto">
            <div className="lg:w-36 lg:mx-2 p-2 flex flex-col justify-center items-center rounded border border-color-primary">
              <h3 className="font-semibold">Ditonton</h3>
              <p>{data.popularity}</p>
            </div>
            <div className="lg:w-36 lg:mx-2 p-2 flex flex-col justify-center items-center rounded border border-color-primary">
              <h3 className="font-semibold">Total Vote</h3>
              <p>{data.vote_count}</p>
            </div>
            <div className="lg:w-36 lg:mx-2 p-2 flex flex-col justify-center items-center rounded border border-color-primary">
              <h3 className="font-semibold">Rata-rata vote</h3>
              <p>{data.vote_average}</p>
            </div>

            <div className="lg:w-36 lg:mx-2 p-2 flex flex-col justify-center items-center rounded border border-color-primary">
              <h3 className="font-semibold">Tahun Rilis</h3>
              <p>{data.release_date}</p>
            </div>
            <div className="lg:mx-2 p-2 flex flex-col justify-center items-center rounded border border-color-primary">
              <h1>Genre</h1>
              <div className="flex">
                {data.genres.map((genre, index) => (
                  <h3 className="mx-1" key={index}>
                    {genre.name}
                  </h3>
                ))}
              </div>
            </div>
          </div>
          <div className="p-4 flex sm:flex-nowrap justify-center flex-wrap gap-2 text-color-primary">
            <Image
              src={`${process.env.NEXT_PUBLIC_API_IMAGE}/${data.poster_path}`}
              alt={data.title}
              width={250}
              height={250}
              className="w-1/2 rounded object-cover"
            />
            <p className="text-justify text-xl">{data.overview}</p>
          </div>

          {/* <div className="pt-4 px-4 flex flex-row">
            <Back />
            <h3 className="lg:text-5xl text-2xl mx-3.5 font-bold text-color-primary">
              {data.title}
            </h3>
          </div>
          <div className="pt-4 px-4 flex sm:flex-nowrap flex-wrap gap-2 text-color-primary">
            <Image
              src={`${process.env.NEXT_PUBLIC_API_IMAGE}/${data.poster_path}`}
              alt={data.title}
              width={250}
              height={250}
              className="h-1/4 w-1/4 sm:w-1/2 sm:h-1/2 rounded object-cover"
            />
            <div className=" ">
              <div className="pt-4 mx-4 lg:flex grid text-color-primary justify-end">
                <div className="w-36 lg:mx-2 p-2 flex flex-col justify-center items-center rounded border border-color-primary">
                  <h3 className="font-semibold">Popularitas</h3>
                  <p>#{data.popularity}</p>
                </div>
                <div className="w-36 lg:mx-2 p-2 flex flex-col justify-center items-center rounded border border-color-primary">
                  <h3 className="font-semibold">Tahun Release</h3>
                  {data.release_date}
                </div>
                <div className="w-36 lg:mx-2 p-2 flex flex-col justify-center items-center rounded border border-color-primary">
                  <h3 className="font-semibold">Rata-rata vote</h3>
                  <p>{data.vote_average}</p>
                </div>
                <div className="w-36 lg:mx-2 p-2 flex flex-col justify-center items-center rounded border border-color-primary">
                  <h3 className="font-semibold">Vote terhitung</h3>
                  <p>{data.vote_count}</p>
                </div>
                <div className="p-2 flex flex-col justify-center items-center rounded border border-color-primary">
                  <h3 className="font-semibold">Genre</h3>
                  <div className="flex flex-col lg:flex-row lg:justify-start">
                    {data.genres.map((genre, index) => (
                      <h3 className="mx-1" key={index}>
                        {genre.name}
                      </h3>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex mx-5 my-2.5">
                <p className="text-justify text-xl">{data.overview}</p>
              </div>
            </div>
          </div> */}
        </>
      )}
    </>
  );
};

export default Page;
