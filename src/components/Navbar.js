"use client";
import Image from "next/image";
import { useState } from "react";
const Navbar = () => {
  // State untuk mengontrol apakah menu mobile sedang dibuka atau ditutup
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Fungsi untuk menangani klik tombol toggle menu mobile
  const handleToggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header
      className={`bg-transparent fixed w-full ${
        isMobileMenuOpen ? "flex flex-col" : "flex justify-between"
      }`}
    >
      <div className="flex justify-between items-center p-4 space-x-4">
        <Image src="/animeList.svg" width={286} height={63} />
        {/* Tombol toggle untuk menu navigasi mobile */}
        <button className="block md:hidden" onClick={handleToggleMobileMenu}>
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
    </header>
  );
};
export default Navbar;
