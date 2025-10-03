"use client";
import { useState } from "react";
import Image from "next/image";
import { FaSearch, FaTimes } from "react-icons/fa";

export default function Opac() {
    const [category, setCategory] = useState("Semua");
    const [sort, setSort] = useState("Terbaru");
    const [selectedBook, setSelectedBook] = useState(null);

    const books = [
        { id: 1, title: "Petualangan Si Kancil", author: "Budi", category: "Fiksi", desc: "Kisah dongeng tentang kecerdikan Si Kancil yang disukai anak-anak." },
        { id: 2, title: "Dasar-Dasar Sains", author: "Ani", category: "Sains", desc: "Buku pengantar sains untuk siswa sekolah dasar." },
        { id: 3, title: "Sejarah Nusantara", author: "Dewi", category: "Sejarah", desc: "Mengupas perjalanan panjang sejarah Indonesia dari masa ke masa." },
        { id: 4, title: "Bahasa Inggris Mudah", author: "Agus", category: "Bahasa", desc: "Panduan praktis belajar bahasa Inggris untuk pemula." },
        { id: 5, title: "Komik Si Juki", author: "Eka", category: "Komik", desc: "Komik humor populer yang digemari anak-anak." },
        { id: 6, title: "Ilmu Pengetahuan Alam", author: "Rani", category: "Sains", desc: "Membahas fenomena alam dengan ilustrasi menarik." },
    ];

    const filteredBooks =
        category === "Semua" ? books : books.filter((b) => b.category === category);

    const sortedBooks = [...filteredBooks].sort((a, b) => {
        if (sort === "A-Z") return a.title.localeCompare(b.title);
        if (sort === "Z-A") return b.title.localeCompare(a.title);
        return a.id - b.id;
    });

    return (
        <div className="bg-white">
            {/* Banner */}
            <section className="relative w-full h-[250px]">
                <Image
                    src="https://picsum.photos/1200/250?random=11"
                    alt="OPAC Banner"
                    fill
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <h1
                        className="text-white text-3xl md:text-4xl font-bold"
                        data-aos="fade-down"
                    >
                        OPAC (Online Public Access Catalog)
                    </h1>
                </div>
            </section>

            {/* Search + Filter */}
            <section className="max-w-6xl mx-auto py-10 px-6" data-aos="fade-up">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {/* Search Bar */}
                    <div className="flex gap-2 md:col-span-2">
                        <input
                            type="text"
                            placeholder="Cari judul buku atau penulis..."
                            className="flex-1 border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 shadow-sm"
                        />
                        <button className="bg-blue-600 text-white px-5 rounded-lg hover:bg-blue-700 flex items-center gap-2">
                            <FaSearch /> Cari
                        </button>
                    </div>

                    {/* Filter + Sort */}
                    <div className="flex gap-2">
                        <select
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            className="flex-1 border rounded-lg px-3 py-2 shadow-sm focus:ring-2 focus:ring-blue-500"
                        >
                            <option value="Semua">Semua Kategori</option>
                            <option value="Fiksi">Fiksi</option>
                            <option value="Sains">Sains</option>
                            <option value="Sejarah">Sejarah</option>
                            <option value="Bahasa">Bahasa</option>
                            <option value="Komik">Komik</option>
                        </select>

                        <select
                            value={sort}
                            onChange={(e) => setSort(e.target.value)}
                            className="flex-1 border rounded-lg px-3 py-2 shadow-sm focus:ring-2 focus:ring-blue-500"
                        >
                            <option value="Terbaru">Terbaru</option>
                            <option value="A-Z">A-Z</option>
                            <option value="Z-A">Z-A</option>
                        </select>
                    </div>
                </div>
            </section>

            {/* Daftar Buku */}
            <section className="max-w-6xl mx-auto py-6 px-6">
                <h2 className="text-xl font-semibold mb-6" data-aos="fade-right">
                    Daftar Buku
                </h2>
                <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {sortedBooks.map((book, i) => (
                        <div
                            key={book.id}
                            className="bg-white border rounded-xl shadow-sm hover:shadow-lg transition overflow-hidden"
                            data-aos="zoom-in"
                            data-aos-delay={i * 100}
                        >
                            <Image
                                src={`https://picsum.photos/300/200?random=${book.id}`}
                                alt={book.title}
                                width={300}
                                height={200}
                                className="w-full h-40 object-cover"
                            />
                            <div className="p-4">
                                <h3 className="font-semibold text-lg">{book.title}</h3>
                                <p className="text-sm text-gray-600">Penulis: {book.author}</p>
                                <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-md inline-block mt-2">
                                    {book.category}
                                </span>
                                <button
                                    onClick={() => setSelectedBook(book)}
                                    className="mt-3 w-full bg-blue-600 text-white px-3 py-1 rounded-md text-sm hover:bg-blue-700"
                                >
                                    Detail
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Modal Detail Buku */}
            {selectedBook && (
                <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
                    <div
                        className="bg-white rounded-lg shadow-lg max-w-lg w-full p-6 relative"
                        data-aos="zoom-in"
                    >
                        <button
                            className="absolute top-3 right-3 text-gray-600 hover:text-black"
                            onClick={() => setSelectedBook(null)}
                        >
                            <FaTimes size={20} />
                        </button>
                        <Image
                            src={`https://picsum.photos/400/250?random=${selectedBook.id}`}
                            alt={selectedBook.title}
                            width={400}
                            height={250}
                            className="w-full h-48 object-cover rounded"
                        />
                        <h2 className="mt-4 text-2xl font-bold">{selectedBook.title}</h2>
                        <p className="text-gray-600">Penulis: {selectedBook.author}</p>
                        <span className="inline-block text-sm bg-blue-100 text-blue-700 px-2 py-1 rounded-md mt-2">
                            {selectedBook.category}
                        </span>
                        <p className="mt-4 text-gray-700 leading-relaxed">
                            {selectedBook.desc}
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
}
