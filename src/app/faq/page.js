"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { FaChevronDown, FaChevronUp, FaSearch, FaArrowRight } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("Semua");

    useEffect(() => {
        AOS.init({
            duration: 800,
            once: true,
        });
    }, []);

    const faqs = [
        {
            question: "Bagaimana cara menjadi anggota perpustakaan?",
            answer:
                "Cukup datang ke perpustakaan dengan membawa kartu pelajar atau KTP untuk orang tua siswa. Pustakawan akan membantu proses pendaftaran dan memberikan kartu anggota dalam hitungan menit.",
            category: "Keanggotaan",
        },
        {
            question: "Berapa lama buku dapat dipinjam?",
            answer:
                "Buku dapat dipinjam selama 7 hari. Perpanjangan peminjaman dapat dilakukan sekali selama 7 hari tambahan jika buku tidak sedang dipesan oleh anggota lain.",
            category: "Peminjaman",
        },
        {
            question: "Apa yang terjadi jika terlambat mengembalikan buku?",
            answer:
                "Jika terlambat, Anda akan menerima teguran tertulis untuk pengembalian pertama. Denda sebesar Rp1.000/hari akan dikenakan untuk keterlambatan berikutnya.",
            category: "Peminjaman",
        },
        {
            question: "Apakah tersedia e-book atau koleksi digital?",
            answer:
                "Ya, kami menyediakan akses ke koleksi e-book, jurnal digital, dan sumber belajar online melalui platform literasi digital kami. Login dengan kartu anggota untuk akses penuh.",
            category: "Layanan Digital",
        },
        {
            question: "Apakah perpustakaan buka di hari Sabtu?",
            answer:
                "Ya, perpustakaan buka pada hari Sabtu dari pukul 07:00 hingga 12:00. Kami tutup pada hari Minggu dan hari libur nasional.",
            category: "Jam Operasional",
        },
        {
            question: "Bagaimana cara mengakses audiobook?",
            answer:
                "Audiobook tersedia melalui platform digital kami. Anggota dapat mengunduh aplikasi perpustakaan atau mengaksesnya melalui situs web dengan login anggota.",
            category: "Layanan Digital",
        },
        {
            question: "Apa saja kegiatan literasi yang diadakan?",
            answer:
                "Kami mengadakan klub buku mingguan, sesi mendongeng untuk anak-anak, dan workshop literasi digital setiap bulan. Cek jadwal di papan pengumuman atau situs web kami.",
            category: "Kegiatan",
        },
        {
            question: "Apakah ada biaya untuk menjadi anggota?",
            answer:
                "Keanggotaan gratis untuk siswa dan guru di sekolah kami. Untuk masyarakat umum, terdapat biaya pendaftaran sebesar Rp50.000/tahun.",
            category: "Keanggotaan",
        },
    ];

    const categories = ["Semua", ...new Set(faqs.map((faq) => faq.category))];

    const filteredFaqs = faqs.filter((faq) => {
        const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
            faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = selectedCategory === "Semua" || faq.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Banner */}
            <section className="relative w-full h-[250px] sm:h-[350px] lg:h-[450px]">
                <Image
                    src="https://picsum.photos/1600/450?random=30"
                    alt="FAQ Perpustakaan"
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
                            Tanya Jawab
                        </h1>
                        <p
                            className="text-base sm:text-lg md:text-xl max-w-2xl mx-auto"
                            data-aos="fade-up"
                            data-aos-delay="100"
                        >
                            Temukan jawaban atas pertanyaan Anda tentang layanan perpustakaan kami.
                        </p>
                    </div>
                </div>
            </section>

            {/* Search & Filter */}
            <section className="max-w-7xl mx-auto py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
                <div className="bg-white rounded-2xl shadow-lg p-6 mb-8" data-aos="fade-up">
                    <div className="relative mb-6">
                        <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Cari pertanyaan..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent shadow-sm transition-all"
                        />
                    </div>
                    <div className="flex flex-wrap gap-2">
                        {categories.map((cat, index) => (
                            <button
                                key={cat}
                                onClick={() => setSelectedCategory(cat)}
                                className={`px-3 py-1 rounded-full text-sm font-medium transition-all ${selectedCategory === cat
                                    ? "bg-indigo-600 text-white"
                                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                                    }`}
                                data-aos="fade-up"
                                data-aos-delay={index * 50}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Accordion */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
                <h2
                    className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center text-gray-800 mb-12"
                    data-aos="fade-up"
                >
                    Pertanyaan yang Sering Diajukan
                </h2>
                {filteredFaqs.length > 0 ? (
                    <div className="space-y-4">
                        {filteredFaqs.map((faq, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100"
                                data-aos="fade-up"
                                data-aos-delay={index * 50}
                            >
                                <button
                                    className="w-full flex justify-between items-center px-6 py-4 text-left font-semibold text-gray-800 hover:bg-indigo-50 transition-all"
                                    onClick={() => toggleFAQ(index)}
                                >
                                    <span className="text-sm sm:text-base md:text-lg pr-4">
                                        {faq.question}
                                    </span>
                                    {openIndex === index ? (
                                        <FaChevronUp className="text-indigo-600 flex-shrink-0" />
                                    ) : (
                                        <FaChevronDown className="text-gray-500 flex-shrink-0" />
                                    )}
                                </button>
                                {openIndex === index && (
                                    <div className="px-6 pb-4 text-gray-600 text-sm sm:text-base leading-relaxed">
                                        {faq.answer}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-16" data-aos="fade-up">
                        <FaSearch className="text-6xl text-gray-300 mx-auto mb-4" />
                        <h3 className="text-xl font-semibold text-gray-600 mb-2">
                            Tidak ada pertanyaan ditemukan
                        </h3>
                        <p className="text-gray-500">
                            Coba ubah kata kunci pencarian atau pilih kategori lain.
                        </p>
                    </div>
                )}
            </section>

            {/* CTA Section */}
            <section className="bg-gradient-to-r from-purple-600 to-pink-400 py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto text-center text-white">
                    <h2
                        className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4"
                        data-aos="fade-up"
                    >
                        Masih Punya Pertanyaan?
                    </h2>
                    <p
                        className="text-base sm:text-lg mb-6"
                        data-aos="fade-up"
                        data-aos-delay="100"
                    >
                        Hubungi pustakawan kami untuk informasi lebih lanjut atau kunjungi perpustakaan untuk konsultasi langsung.
                    </p>
                    <a
                        href="/kontak"
                        className="inline-block px-6 sm:px-8 py-2 sm:py-3 bg-white text-indigo-600 rounded-full font-semibold text-sm sm:text-base transition-all duration-300 hover:bg-gray-100 shadow-lg"
                        data-aos="fade-up"
                        data-aos-delay="200"
                    >
                        Hubungi Kami
                    </a>
                </div>
            </section>
        </div>
    );
}