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
        <div className="absolute top-0 left-0 w-full h-full"></div>
        <div className="relative ">
          <VideoPlayer poster="cover.jpg" src="video/daysofsummer.mp4" />
        </div>
      </div>
    </>
  );
};
export default Home;
