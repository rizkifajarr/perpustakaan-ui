"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { FaSearch, FaTimes, FaBook, FaFilter, FaSort } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Opac() {
    const [searchTerm, setSearchTerm] = useState("");
    const [category, setCategory] = useState("Semua");
    const [sort, setSort] = useState("Terbaru");
    const [selectedBook, setSelectedBook] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    // Expanded books data for richer content
    const books = [
        {
            id: 1,
            title: "Petualangan Si Kancil",
            author: "Budi Santoso",
            category: "Fiksi",
            desc: "Kisah dongeng klasik tentang kecerdikan Si Kancil yang mengajarkan nilai-nilai moral melalui petualangan seru di hutan.",
            year: 2022,
            isbn: "978-623-456-789-0",
            availability: true,
            rating: 4.8
        },
        {
            id: 2,
            title: "Dasar-Dasar Sains Alam",
            author: "Dr. Ani Wijaya",
            category: "Sains",
            desc: "Panduan lengkap pengantar sains untuk siswa SD, mencakup fisika, kimia, dan biologi dasar dengan eksperimen sederhana.",
            year: 2023,
            isbn: "978-623-123-456-7",
            availability: true,
            rating: 4.5
        },
        {
            id: 3,
            title: "Sejarah Nusantara: Dari Kerajaan hingga Kemerdekaan",
            author: "Prof. Dewi Sartika",
            category: "Sejarah",
            desc: "Mengupas tuntas perjalanan sejarah Indonesia dari era kerajaan Hindu-Buddha hingga perjuangan kemerdekaan dengan ilustrasi menarik.",
            year: 2021,
            isbn: "978-623-789-012-3",
            availability: false,
            rating: 4.7
        },
        {
            id: 4,
            title: "Bahasa Inggris Mudah untuk Anak",
            author: "Agus Pratama",
            category: "Bahasa",
            desc: "Metode belajar bahasa Inggris interaktif untuk pemula, dilengkapi audio dan latihan praktis sehari-hari.",
            year: 2023,
            isbn: "978-623-456-123-4",
            availability: true,
            rating: 4.6
        },
        {
            id: 5,
            title: "Komik Si Juki: Petualangan Kocak",
            author: "Eka Gustiwana",
            category: "Komik",
            desc: "Koleksi komik humor lokal yang menginspirasi kreativitas anak melalui cerita lucu dan karakter unik.",
            year: 2022,
            isbn: "978-623-987-654-3",
            availability: true,
            rating: 4.9
        },
        {
            id: 6,
            title: "Ilmu Pengetahuan Alam: Fenomena Alam",
            author: "Rani Setiawati",
            category: "Sains",
            desc: "Eksplorasi mendalam tentang fenomena alam dengan ilustrasi warna-warni dan fakta menarik untuk menumbuhkan rasa ingin tahu.",
            year: 2023,
            isbn: "978-623-321-098-7",
            availability: true,
            rating: 4.4
        },
        {
            id: 7,
            title: "Matematika Seru untuk SD",
            author: "Hadi Wibowo",
            category: "Matematika",
            desc: "Belajar matematika menjadi menyenangkan dengan permainan dan puzzle yang mengasah logika berpikir anak.",
            year: 2022,
            isbn: "978-623-654-321-0",
            availability: false,
            rating: 4.3
        },
        {
            id: 8,
            title: "Cerita Rakyat Indonesia",
            author: "Sari Indah",
            category: "Fiksi",
            desc: "Kumpulan cerita rakyat dari berbagai daerah Indonesia yang kaya akan nilai budaya dan tradisi.",
            year: 2021,
            isbn: "978-623-456-789-1",
            availability: true,
            rating: 4.7
        },
        {
            id: 9,
            title: "Pengantar Informatika Dasar",
            author: "Bambang Nugroho",
            category: "Teknologi",
            desc: "Introduksi dunia komputasi untuk anak usia dini dengan konsep dasar pemrograman dan logika digital.",
            year: 2023,
            isbn: "978-623-111-222-3",
            availability: true,
            rating: 4.2
        },
        {
            id: 10,
            title: "Seni dan Kreativitas Anak",
            author: "Lina Maharani",
            category: "Seni",
            desc: "Panduan mengembangkan bakat seni anak melalui menggambar, mewarnai, dan proyek kreatif sederhana.",
            year: 2022,
            isbn: "978-623-333-444-5",
            availability: true,
            rating: 4.8
        }
    ];

    useEffect(() => {
        AOS.init({
            duration: 800,
            once: true,
        });
    }, []);

    // Search functionality
    const filteredBooks = books.filter((book) => {
        const matchesSearch = book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            book.author.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = category === "Semua" || book.category === category;
        return matchesSearch && matchesCategory;
    });

    const sortedBooks = [...filteredBooks].sort((a, b) => {
        if (sort === "A-Z") return a.title.localeCompare(b.title);
        if (sort === "Z-A") return b.title.localeCompare(a.title);
        if (sort === "Rating") return b.rating - a.rating;
        return b.year - a.year; // Terbaru by default
    });

    const handleSearch = (e) => {
        e.preventDefault();
        setIsLoading(true);
        setTimeout(() => setIsLoading(false), 1000); // Simulate API call
    };

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Banner */}
            <section className="relative w-full h-[250px] sm:h-[300px] lg:h-[400px]">
                <Image
                    src="https://picsum.photos/1600/400?random=11"
                    alt="OPAC Banner"
                    fill
                    className="object-cover brightness-75"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-transparent flex items-center justify-center">
                    <div className="text-center text-white px-4 sm:px-6">
                        <h1
                            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 drop-shadow-xl"
                            data-aos="fade-down"
                        >
                            OPAC System
                        </h1>
                        <p
                            className="text-base sm:text-lg md:text-xl max-w-2xl mx-auto"
                            data-aos="fade-up"
                            data-aos-delay="100"
                        >
                            Jelajahi ribuan koleksi buku perpustakaan kami dengan mudah dan cepat
                        </p>
                    </div>
                </div>
            </section>

            {/* Search + Filter */}
            <section className="max-w-7xl mx-auto py-8 sm:py-12 px-4 sm:px-6 lg:px-8" data-aos="fade-up">
                <form onSubmit={handleSearch} className="bg-white rounded-2xl shadow-lg p-6 mb-8">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6">
                        {/* Search Bar */}
                        <div className="relative lg:col-span-2">
                            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Cari judul buku, penulis, atau ISBN..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent shadow-sm transition-all"
                            />
                        </div>

                        {/* Filter Button */}
                        <div className="flex gap-2 lg:justify-end">
                            <button
                                type="button"
                                className="flex-1 lg:flex-none flex items-center justify-center gap-2 bg-indigo-600 text-white px-4 py-3 rounded-xl hover:bg-indigo-700 transition-all shadow-md"
                                onClick={() => {/* Toggle filter modal or dropdown */ }}
                            >
                                <FaFilter /> Filter
                            </button>
                            <button
                                type="submit"
                                disabled={isLoading}
                                className="flex items-center justify-center gap-2 bg-blue-600 text-white px-4 py-3 rounded-xl hover:bg-blue-700 disabled:opacity-50 transition-all shadow-md"
                            >
                                {isLoading ? "Mencari..." : <><FaSearch /> Cari</>}
                            </button>
                        </div>
                    </div>

                    {/* Quick Filters */}
                    <div className="mt-6 pt-6 border-t border-gray-100">
                        <div className="flex flex-wrap gap-2">
                            {["Semua", "Fiksi", "Sains", "Sejarah", "Bahasa", "Komik", "Matematika", "Seni", "Teknologi"].map((cat) => (
                                <button
                                    key={cat}
                                    onClick={() => setCategory(cat)}
                                    className={`px-3 py-1 rounded-full text-sm font-medium transition-all ${category === cat
                                            ? "bg-indigo-600 text-white"
                                            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                                        }`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                    </div>
                </form>

                {/* Sort Options */}
                <div className="flex justify-between items-center bg-white rounded-2xl shadow-sm p-4 mb-6">
                    <div className="flex items-center gap-4">
                        <span className="text-gray-700 font-semibold">
                            {sortedBooks.length} hasil ditemukan
                        </span>
                    </div>
                    <div className="flex items-center gap-2">
                        <FaSort className="text-gray-400" />
                        <select
                            value={sort}
                            onChange={(e) => setSort(e.target.value)}
                            className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-500 bg-white shadow-sm"
                        >
                            <option value="Terbaru">Terbaru</option>
                            <option value="A-Z">A-Z</option>
                            <option value="Z-A">Z-A</option>
                            <option value="Rating">Rating Tertinggi</option>
                        </select>
                    </div>
                </div>
            </section>

            {/* Daftar Buku */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
                {isLoading ? (
                    <div className="text-center py-12">
                        <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600"></div>
                        <p className="mt-4 text-gray-600">Mencari buku...</p>
                    </div>
                ) : sortedBooks.length > 0 ? (
                    <>
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-8" data-aos="fade-right">
                            Koleksi Buku Tersedia
                        </h2>
                        <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                            {sortedBooks.map((book, i) => (
                                <div
                                    key={book.id}
                                    className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-indigo-200"
                                    data-aos="fade-up"
                                    data-aos-delay={i * 50}
                                >
                                    <div className="relative h-48 overflow-hidden">
                                        <Image
                                            src={`https://picsum.photos/300/200?random=${book.id}`}
                                            alt={book.title}
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                                        />
                                        {!book.availability && (
                                            <div className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                                                Dipinjam
                                            </div>
                                        )}
                                    </div>
                                    <div className="p-5">
                                        <h3 className="font-bold text-lg text-gray-800 line-clamp-2 mb-2">{book.title}</h3>
                                        <p className="text-sm text-gray-600 mb-2">Oleh {book.author}</p>
                                        <div className="flex items-center justify-between mb-3">
                                            <span className="text-xs bg-indigo-100 text-indigo-700 px-2 py-1 rounded-full">
                                                {book.category}
                                            </span>
                                            <div className="flex items-center gap-1">
                                                <span className="text-yellow-500">★</span>
                                                <span className="text-sm text-gray-600">{book.rating}</span>
                                            </div>
                                        </div>
                                        <button
                                            onClick={() => setSelectedBook(book)}
                                            className="w-full bg-gradient-to-r from-indigo-600 to-blue-600 text-white py-2 rounded-xl font-semibold text-sm hover:from-indigo-700 hover:to-blue-700 transition-all shadow-md"
                                        >
                                            Lihat Detail
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </>
                ) : (
                    <div className="text-center py-16">
                        <FaBook className="text-6xl text-gray-300 mx-auto mb-4" />
                        <h3 className="text-xl font-semibold text-gray-600 mb-2">Buku tidak ditemukan</h3>
                        <p className="text-gray-500">Coba ubah kata kunci pencarian atau filter kategori</p>
                    </div>
                )}
            </section>

            {/* Modal Detail Buku */}
            {selectedBook && (
                <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4" onClick={() => setSelectedBook(null)}>
                    <div
                        className="bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto relative animate-in fade-in zoom-in duration-200"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 p-2 rounded-full hover:bg-gray-100 transition-all z-10"
                            onClick={() => setSelectedBook(null)}
                        >
                            <FaTimes size={20} />
                        </button>
                        <div className="p-6">
                            <Image
                                src={`https://picsum.photos/400/250?random=${selectedBook.id}`}
                                alt={selectedBook.title}
                                width={400}
                                height={250}
                                className="w-full h-48 object-cover rounded-xl mb-4"
                            />
                            <h2 className="text-2xl font-bold text-gray-800 mb-2">{selectedBook.title}</h2>
                            <div className="flex items-center justify-between mb-4">
                                <p className="text-gray-600">Oleh {selectedBook.author}</p>
                                <div className="flex items-center gap-1">
                                    <span className="text-yellow-500">★</span>
                                    <span className="text-sm text-gray-600">{selectedBook.rating}</span>
                                </div>
                            </div>
                            <span className="inline-block text-sm bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full mb-4">
                                {selectedBook.category} • {selectedBook.year}
                            </span>
                            <p className="text-gray-700 leading-relaxed mb-6">{selectedBook.desc}</p>
                            <div className="space-y-2 text-sm text-gray-600 mb-6">
                                <p><strong>ISBN:</strong> {selectedBook.isbn}</p>
                                <p className={`font-semibold ${selectedBook.availability ? 'text-green-600' : 'text-red-600'}`}>
                                    Status: {selectedBook.availability ? 'Tersedia' : 'Sedang Dipinjam'}
                                </p>
                            </div>
                            <div className="flex gap-3 pt-4 border-t">
                                <button className="flex-1 bg-indigo-600 text-white py-2 rounded-xl font-semibold hover:bg-indigo-700 transition-all">
                                    Pinjam Buku
                                </button>
                                <button className="flex-1 bg-gray-200 text-gray-700 py-2 rounded-xl font-semibold hover:bg-gray-300 transition-all">
                                    Tambah Favorit
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Kategori Populer Section */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-gradient-to-r from-indigo-50 to-blue-50">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 text-center mb-8" data-aos="fade-up">
                    Kategori Populer
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
                    {["Fiksi", "Sains", "Sejarah", "Bahasa", "Komik"].map((cat, i) => (
                        <button
                            key={cat}
                            onClick={() => setCategory(cat)}
                            className={`p-4 rounded-xl text-center font-semibold transition-all ${category === cat
                                    ? "bg-indigo-600 text-white shadow-lg"
                                    : "bg-white text-gray-700 hover:bg-gray-100 shadow-sm"
                                }`}
                            data-aos="zoom-in"
                            data-aos-delay={i * 100}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </section>
        </div>
    );
}