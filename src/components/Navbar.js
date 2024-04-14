"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
const Navbar = () => {
  // State untuk mengontrol apakah menu mobile sedang dibuka atau ditutup
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Fungsi untuk menangani klik tombol toggle menu mobile
  const handleToggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <navbar
      className={`bg-color-accent fixed w-full p-4    ${
        isMobileMenuOpen ? "flex flex-col" : ""
      }`}
    >
      <div className="flex justify-between">
        <Link href="/" className=" ml-9">
          <img src="/animeList.svg" className=" " />
        </Link>
        <div className="items-center flex bg-color-secondary rounded-lg text-color-primary font-semibold bg-opacity-90 mr-9 px-2">
          <Link className="mx-4">Home</Link>
          <Link className="mx-4">Series</Link>
          <Link className="mx-4">Movie</Link>
        </div>
        {/* Tombol toggle untuk menu navigasi mobile */}
        <button className="md:hidden" onClick={handleToggleMobileMenu}>
          {isMobileMenuOpen ? "Close Menu" : "Open Menu"}
        </button>
      </div>

      {/* Menu navigasi mobile */}
      {isMobileMenuOpen && (
        <nav className="flex flex-col items-center p-4">
          {/* Daftar menu navigasi */}
          <a href="#" className="p-2">
            Menu Item 1
          </a>
          <a href="#" className="p-2">
            Menu Item 2
          </a>
          <a href="#" className="p-2">
            Menu Item 3
          </a>
        </nav>
      )}
    </navbar>
  );
};
export default Navbar;
