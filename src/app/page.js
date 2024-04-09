"use client";
import VideoPlayer from "@/components/VideoPlayer";
import { useState } from "react";
const Home = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleToggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  return (
    <>
      <div className="relative h-screen">
        <div className="absolute top-0 left-0 w-full h-full">
          {/* <Image src="cover.svg" alt="Gambar" layout="fill" objectFit="cover" /> */}
          {/* {isMobileMenuOpen ? (
          ) : (
            <Image
              src="cover.svg"
              alt="Gambar"
              layout="fill"
              objectFit="cover"
            />
            // <img src="cover.svg" alt="Gambar" />
          )} */}
        </div>
        <div className="relative z-10">
          <VideoPlayer poster="cover.svg" src="video/daysofsummer.mp4" />
        </div>
      </div>
    </>
  );
};
export default Home;
