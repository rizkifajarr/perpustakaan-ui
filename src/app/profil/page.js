"use client";

import Image from "next/image";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaBook, FaUsers, FaClock } from "react-icons/fa";

export default function Profil() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Banner */}
      <section className="relative w-full h-[300px] sm:h-[400px] lg:h-[500px]">
        <Image
          src="https://picsum.photos/1600/500?random=2"
          alt="Profil Perpustakaan"
          fill
          className="object-cover brightness-75"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-transparent flex items-center justify-center">
          <div className="text-center text-white px-4 sm:px-6">
            <h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 drop-shadow-xl"
              data-aos="fade-down"
            >
              Profil Perpustakaan
            </h1>
            <p
              className="text-base sm:text-lg md:text-xl max-w-2xl mx-auto"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Menyediakan sumber literasi untuk mendukung pendidikan dan kreativitas siswa.
            </p>
          </div>
        </div>
      </section>

      {/* Tentang Kami */}
      <section className="max-w-6xl mx-auto py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2
            className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800"
            data-aos="fade-up"
          >
            Tentang Kami
          </h2>
          <p
            className="text-gray-600 mt-4 max-w-3xl mx-auto text-base sm:text-lg"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Perpustakaan SD kami berkomitmen untuk memajukan literasi siswa melalui koleksi buku yang beragam, akses digital modern, dan program literasi yang inovatif.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div
            className="bg-white p-6 rounded-2xl shadow-lg"
            data-aos="fade-right"
          >
            <h3 className="text-xl font-semibold mb-4 text-indigo-600">Visi</h3>
            <p className="text-gray-700 leading-relaxed">
              Menjadi pusat literasi yang inspiratif, mendukung pembelajaran siswa dengan sumber daya berkualitas tinggi dan lingkungan yang ramah.
            </p>
          </div>
          <div
            className="bg-white p-6 rounded-2xl shadow-lg"
            data-aos="fade-left"
          >
            <h3 className="text-xl font-semibold mb-4 text-indigo-600">Misi</h3>
            <ul className="list-disc list-inside text-gray-700 leading-relaxed">
              <li>Menyediakan koleksi buku yang relevan dan terkini.</li>
              <li>Mendorong minat baca melalui kegiatan interaktif.</li>
              <li>Mendukung akses digital untuk pembelajaran modern.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Statistik Perpustakaan */}
      <section className="bg-gradient-to-r from-indigo-100 to-blue-100 py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h2
            className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-10"
            data-aos="zoom-in"
          >
            Sekilas tentang Kami
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
            <div
              className="bg-white/90 p-6 rounded-2xl shadow-lg"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <FaBook className="text-4xl text-indigo-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold">10.000+</h3>
              <p className="text-gray-600">Koleksi Buku</p>
            </div>
            <div
              className="bg-white/90 p-6 rounded-2xl shadow-lg"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <FaUsers className="text-4xl text-indigo-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold">1.500+</h3>
              <p className="text-gray-600">Anggota Aktif</p>
            </div>
            <div
              className="bg-white/90 p-6 rounded-2xl shadow-lg"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <FaClock className="text-4xl text-indigo-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold">7 Hari</h3>
              <p className="text-gray-600">Buka Setiap Minggu</p>
            </div>
          </div>
        </div>
      </section>

      {/* Daftar Pustakawan */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2
            className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center text-gray-800 mb-10"
            data-aos="fade-up"
          >
            Tim Pustakawan
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                name: "Ibu Siti",
                role: "Kepala Perpustakaan",
                image: "https://randomuser.me/api/portraits/women/44.jpg",
              },
              {
                name: "Pak Budi",
                role: "Pustakawan Junior",
                image: "https://randomuser.me/api/portraits/men/32.jpg",
              },
              {
                name: "Ibu Rina",
                role: "Staf Administrasi",
                image: "https://randomuser.me/api/portraits/women/68.jpg",
              },
            ].map((pustakawan, index) => (
              <div
                key={pustakawan.name}
                className="group bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                data-aos="zoom-in"
                data-aos-delay={index * 100}
              >
                <Image
                  src={pustakawan.image}
                  alt={pustakawan.name}
                  width={150}
                  height={150}
                  className="rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-lg sm:text-xl font-semibold text-center text-gray-800">
                  {pustakawan.name}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 text-center">
                  {pustakawan.role}
                </p>
                <div className="mt-4 text-center">
                  <a
                    href="#kontak"
                    className="inline-block px-4 py-2 bg-indigo-600 text-white rounded-full text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    Hubungi
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-indigo-600 py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2
            className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4"
            data-aos="fade-up"
          >
            Bergabunglah dengan Komunitas Literasi Kami
          </h2>
          <p
            className="text-base sm:text-lg mb-6"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Daftar sebagai anggota perpustakaan dan nikmati akses ke ribuan buku serta kegiatan literasi yang menarik!
          </p>
          <a
            href="#"
            className="inline-block px-6 sm:px-8 py-2 sm:py-3 bg-white text-indigo-600 rounded-full font-semibold text-sm sm:text-base transition-all duration-300 hover:bg-gray-100 shadow-lg"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Daftar Sekarang
          </a>
        </div>
      </section>
    </div>
  );
}