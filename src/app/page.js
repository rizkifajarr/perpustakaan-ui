"use client";
import Image from "next/image";
import { FaBook, FaSearch, FaUsers, FaQuestionCircle } from "react-icons/fa";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Hero / Banner */}
      <section className="relative w-full h-[400px] sm:h-[500px] lg:h-[600px]">
        <Image
          src="https://picsum.photos/1600/600?random=1"
          alt="Banner Perpustakaan"
          fill
          className="object-cover brightness-75"
          priority
        />
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-transparent" />

        {/* Text hero */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4 sm:px-6">
          <h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 drop-shadow-xl tracking-tight"
            data-aos="fade-down"
            data-aos-duration="800"
          >
            Selamat Datang
          </h1>
          <p
            className="text-base sm:text-lg md:text-xl lg:text-2xl drop-shadow-lg max-w-xl sm:max-w-2xl"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="100"
          >
            Jelajahi koleksi buku kami untuk memperkaya pengetahuan dan literasi Anda.
          </p>
          <a
            href="/opac"
            className="mt-6 sm:mt-8 px-6 sm:px-8 py-2 sm:py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full font-semibold text-sm sm:text-base transition-all duration-300 shadow-lg hover:shadow-xl"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="200"
          >
            Mulai Jelajahi
          </a>
        </div>
      </section>

      {/* Menu Cepat */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-indigo-50 to-blue-100 flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {/* Card */}
            {[
              { href: "/profil", icon: FaUsers, text: "Profil", color: "blue-500" },
              { href: "/opac", icon: FaSearch, text: "OPAC", color: "emerald-500" },
              { href: "/layanan", icon: FaBook, text: "Layanan", color: "purple-500" },
              { href: "/faq", icon: FaQuestionCircle, text: "FAQ", color: "rose-500" },
            ].map((item, index) => (
              <a
                key={item.text}
                href={item.href}
                className="group relative bg-white/95 backdrop-blur-sm shadow-md hover:shadow-xl rounded-2xl p-6 sm:p-8 text-center transform transition-all duration-300 hover:-translate-y-1 hover:scale-105"
                data-aos="zoom-in"
                data-aos-delay={index * 100}
              >
                <div className={`absolute inset-0 bg-${item.color}/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl`}></div>
                <item.icon className={`text-4xl sm:text-5xl text-${item.color} mx-auto mb-4 relative z-10`} />
                <p className="text-base sm:text-lg font-semibold text-gray-800 relative z-10">
                  {item.text}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}