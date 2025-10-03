import Image from "next/image";
import { FaBook, FaSearch, FaUsers, FaQuestionCircle } from "react-icons/fa";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero / Banner */}
      <section className="relative w-full h-[500px]">
        <Image
          src="https://picsum.photos/1600/500?random=1"
          alt="Banner Perpustakaan"
          fill
          className="object-cover"
          priority
        />
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-transparent" />

        {/* Text hero */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
          <h1
            className="text-5xl md:text-6xl font-extrabold mb-6 drop-shadow-xl tracking-tight"
            data-aos="fade-down"
          >
            Selamat Datang
          </h1>
          <p
            className="text-xl md:text-2xl drop-shadow-lg max-w-2xl"
            data-aos="fade-up"
          >
            Temukan berbagai koleksi buku untuk mendukung literasi siswa.
          </p>
        </div>
      </section>

      {/* Menu Cepat */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700 flex-1">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 px-6">
          {/* Card */}
          <a
            href="/profil"
            className="backdrop-blur-md bg-white/90 shadow-xl rounded-3xl p-8 text-center hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
            data-aos="zoom-in"
          >
            <FaUsers className="text-5xl text-blue-600 mx-auto mb-4" />
            <p className="text-lg font-semibold">Profil</p>
          </a>

          <a
            href="/opac"
            className="backdrop-blur-md bg-white/90 shadow-xl rounded-3xl p-8 text-center hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
            data-aos="zoom-in"
            data-aos-delay="100"
          >
            <FaSearch className="text-5xl text-green-600 mx-auto mb-4" />
            <p className="text-lg font-semibold">OPAC</p>
          </a>

          <a
            href="/layanan"
            className="backdrop-blur-md bg-white/90 shadow-xl rounded-3xl p-8 text-center hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <FaBook className="text-5xl text-purple-600 mx-auto mb-4" />
            <p className="text-lg font-semibold">Layanan</p>
          </a>

          <a
            href="/faq"
            className="backdrop-blur-md bg-white/90 shadow-xl rounded-3xl p-8 text-center hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
            data-aos="zoom-in"
            data-aos-delay="300"
          >
            <FaQuestionCircle className="text-5xl text-red-600 mx-auto mb-4" />
            <p className="text-lg font-semibold">FAQ</p>
          </a>
        </div>
      </section>
    </div>
  );
}
