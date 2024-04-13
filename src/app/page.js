"use client";
import Card from "@/components/Card";
import Header from "@/components/Header";
import VideoPlayer from "@/components/VideoPlayer";
import { useState } from "react";
const Home = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleToggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  return (
    <>
      <section className="relative ">
        <div className="  w-full ">
          <VideoPlayer poster="joker.jpg" src="video/joker.mkv" />
        </div>
      </section>
      <section>
        <Header title="Trending" linkHref="#" namaLink="Lihat Semua" />
        <Card />
      </section>
    </>
  );
};
export default Home;
