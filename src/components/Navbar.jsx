"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { href: "/", label: "Beranda" },
    { href: "/profil", label: "Profil" },
    { href: "/opac", label: "OPAC" },
    { href: "/layanan", label: "Layanan" },
    { href: "/faq", label: "FAQ" },
    { href: "/kontak", label: "Kontak" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white shadow-md text-gray-800"
          : "bg-white/20 backdrop-blur-md text-white"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className={`text-xl font-bold transition ${
            isScrolled ? "text-blue-600" : "text-white"
          }`}
        >
          Perpustakaan SD
        </Link>

        {/* Menu Desktop */}
        <div className="hidden md:flex space-x-2 font-medium">
          {menuItems.map((item, i) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={i}
                href={item.href}
                className={`px-4 py-2 rounded-full transition ${
                  isActive
                    ? "bg-blue-500 text-white shadow-md"
                    : isScrolled
                    ? "text-gray-700 hover:bg-gray-100"
                    : "text-white hover:bg-white/20"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        {/* Hamburger Icon Mobile */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-2xl focus:outline-none"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Menu Mobile */}
      <div
        className={`md:hidden absolute top-[64px] left-0 w-full overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        } ${
          isScrolled
            ? "bg-white text-gray-800"
            : "bg-black/70 backdrop-blur-md text-white"
        }`}
      >
        <div className="px-6 py-4 space-y-4">
          {menuItems.map((item, i) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={i}
                href={item.href}
                className={`block px-4 py-2 rounded-full transition ${
                  isActive
                    ? "bg-blue-500 text-white shadow-md"
                    : "hover:bg-white/20"
                }`}
                onClick={toggleMenu}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
