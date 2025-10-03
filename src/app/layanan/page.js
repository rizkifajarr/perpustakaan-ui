"use client";

import Image from "next/image";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
    FaBook,
    FaUndo,
    FaUserPlus,
    FaLaptop,
    FaHeadphones,
    FaChalkboardTeacher,
    FaClock,
    FaStar,
    FaArrowRight,
} from "react-icons/fa";

export default function Layanan() {
    useEffect(() => {
        AOS.init({
            duration: 800,
            once: true,
        });
    }, []);

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Banner */}
            <section className="relative w-full h-[250px] sm:h-[350px] lg:h-[450px]">
                <Image
                    src="https://picsum.photos/1600/450?random=21"
                    alt="Layanan Perpustakaan"
                    fill
                    className="object-cover brightness-75"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-transparent flex items-center justify-center">
                    <div className="text-center text-white px-4 sm:px-6">
                        <h1
                            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 drop-shadow-xl"
                            data-aos="fade-down"
                        >
                            Layanan Perpustakaan
                        </h1>
                        <p
                            className="text-base sm:text-lg md:text-xl max-w-2xl mx-auto"
                            data-aos="fade-up"
                            data-aos-delay="100"
                        >
                            Nikmati berbagai layanan kami untuk mendukung literasi dan pembelajaran Anda.
                        </p>
                    </div>
                </div>
            </section>

            {/* Daftar Layanan */}
            <section className="max-w-7xl mx-auto py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
                <h2
                    className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center text-gray-800 mb-12"
                    data-aos="fade-up"
                >
                    Layanan Unggulan Kami
                </h2>
                <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                    {[
                        {
                            icon: FaBook,
                            title: "Peminjaman Buku",
                            desc: "Pinjam berbagai koleksi buku fisik dari fiksi hingga non-fiksi untuk mendukung pembelajaran siswa.",
                            color: "indigo-600",
                        },
                        {
                            icon: FaUndo,
                            title: "Pengembalian Buku",
                            desc: "Proses pengembalian yang mudah dan cepat, pastikan kembalikan tepat waktu untuk menghindari denda.",
                            color: "emerald-600",
                        },
                        {
                            icon: FaUserPlus,
                            title: "Keanggotaan Gratis",
                            desc: "Daftar sebagai anggota perpustakaan dan dapatkan akses penuh ke semua layanan kami.",
                            color: "purple-600",
                        },
                        {
                            icon: FaLaptop,
                            title: "Literasi Digital",
                            desc: "Akses koleksi e-book, jurnal online, dan sumber belajar digital kapan saja, di mana saja.",
                            color: "red-600",
                        },
                        {
                            icon: FaHeadphones,
                            title: "Audio & Visual",
                            desc: "Nikmati audiobook dan media pembelajaran interaktif untuk pengalaman belajar yang lebih menarik.",
                            color: "orange-500",
                        },
                        {
                            icon: FaChalkboardTeacher,
                            title: "Bimbingan Literasi",
                            desc: "Dapatkan bantuan dari pustakawan profesional untuk menemukan referensi yang tepat.",
                            color: "blue-600",
                        },
                    ].map((service, index) => (
                        <div
                            key={service.title}
                            className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-6 text-center border border-gray-100 hover:border-indigo-200"
                            data-aos="zoom-in"
                            data-aos-delay={index * 100}
                        >
                            <service.icon
                                className={`text-5xl text-${service.color} mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                            />
                            <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-3">
                                {service.title}
                            </h3>
                            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                                {service.desc}
                            </p>
                            <a
                                href="#learn-more"
                                className={`mt-4 inline-block text-sm font-medium text-${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                            >
                                Pelajari Lebih Lanjut
                            </a>
                        </div>
                    ))}
                </div>
            </section>

            {/* Alur Peminjaman */}
            <section className="bg-gradient-to-r from-indigo-50 to-blue-50 py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <h2
                        className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center text-gray-800 mb-12"
                        data-aos="fade-up"
                    >
                        Alur Peminjaman Buku
                    </h2>
                    <div className="grid gap-6 sm:gap-8 grid-cols-1 md:grid-cols-4">
                        {[
                            { step: 1, desc: "Pilih buku favorit Anda dari rak atau katalog online." },
                            { step: 2, desc: "Serahkan buku pilihan ke pustakawan di meja layanan." },
                            { step: 3, desc: "Lengkapi proses peminjaman dengan kartu anggota." },
                            { step: 4, desc: "Kembalikan buku sesuai tenggat waktu peminjaman." },
                        ].map((step, index) => (
                            <div
                                key={step.step}
                                className="relative bg-white rounded-2xl shadow-lg p-6 text-center transition-all duration-300 hover:shadow-xl"
                                data-aos="fade-up"
                                data-aos-delay={index * 100}
                            >
                                <span className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-indigo-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg">
                                    {step.step}
                                </span>
                                <p className="mt-8 text-sm sm:text-base text-gray-600 leading-relaxed">
                                    {step.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonial */}
            <section className="max-w-7xl mx-auto py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
                <h2
                    className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center text-gray-800 mb-12"
                    data-aos="fade-up"
                >
                    Apa Kata Pengguna Kami
                </h2>
                <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                    {[
                        {
                            name: "Ani, Siswa Kelas 5",
                            quote: "Perpustakaan ini punya banyak buku seru! Pustakawannya juga ramah dan membantu.",
                            rating: 5,
                            image: "https://randomuser.me/api/portraits/women/55.jpg",
                        },
                        {
                            name: "Budi, Guru",
                            quote: "Layanan literasi digital sangat membantu untuk mencari referensi mengajar.",
                            rating: 4,
                            image: "https://randomuser.me/api/portraits/men/22.jpg",
                        },
                        {
                            name: "Siti, Orang Tua",
                            quote: "Anak saya suka sekali dengan audiobook dan kegiatan literasi di sini!",
                            rating: 5,
                            image: "https://randomuser.me/api/portraits/women/33.jpg",
                        },
                    ].map((testimonial, index) => (
                        <div
                            key={testimonial.name}
                            className="bg-white rounded-2xl shadow-md p-6 text-center transition-all duration-300 hover:shadow-xl"
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
                        >
                            <Image
                                src={testimonial.image}
                                alt={testimonial.name}
                                width={80}
                                height={80}
                                className="rounded-full mx-auto mb-4 object-cover"
                            />
                            <p className="text-sm sm:text-base text-gray-600 italic mb-4">
                                "{testimonial.quote}"
                            </p>
                            <h3 className="text-lg font-semibold text-gray-800">{testimonial.name}</h3>
                            <div className="flex justify-center gap-1 mt-2">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <FaStar key={i} className="text-yellow-500" />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Jam Operasional */}
            <section className="max-w-4xl mx-auto py-12 sm:py-16 px-4 sm:px-6 lg:px-8 text-center">
                <h2
                    className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-8"
                    data-aos="fade-up"
                >
                    Jam Operasional
                </h2>
                <div
                    className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 inline-block"
                    data-aos="zoom-in"
                >
                    <FaClock className="text-5xl text-indigo-600 mx-auto mb-4" />
                    <div className="text-gray-700 text-sm sm:text-base">
                        <p className="mb-2">
                            <strong>Senin - Jumat:</strong> 07:00 - 15:00
                        </p>
                        <p className="mb-2">
                            <strong>Sabtu:</strong> 07:00 - 12:00
                        </p>
                        <p>
                            <strong>Minggu & Hari Libur:</strong> Tutup
                        </p>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="bg-gradient-to-r from-indigo-600 to-blue-600 py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto text-center text-white">
                    <h2
                        className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4"
                        data-aos="fade-up"
                    >
                        Manfaatkan Layanan Kami Sekarang
                    </h2>
                    <p
                        className="text-base sm:text-lg mb-6"
                        data-aos="fade-up"
                        data-aos-delay="100"
                    >
                        Bergabunglah dengan perpustakaan kami dan jelajahi dunia pengetahuan tanpa batas!
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