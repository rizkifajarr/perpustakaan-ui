import Image from "next/image";
import {
    FaBook,
    FaUndo,
    FaUserPlus,
    FaLaptop,
    FaHeadphones,
    FaChalkboardTeacher,
    FaClock,
} from "react-icons/fa";

export default function Layanan() {
    return (
        <div className="bg-white">
            {/* Banner */}
            <section className="relative w-full h-[250px]">
                <Image
                    src="https://picsum.photos/1200/250?random=21"
                    alt="Layanan Perpustakaan"
                    fill
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <h1
                        className="text-white text-3xl md:text-4xl font-bold"
                        data-aos="fade-down"
                    >
                        Layanan Perpustakaan
                    </h1>
                </div>
            </section>

            {/* Daftar Layanan */}
            <section className="max-w-6xl mx-auto py-12 px-6">
                <h2 className="text-2xl font-bold text-center mb-10">
                    Layanan yang Tersedia
                </h2>
                <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
                    <div
                        className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition text-center"
                        data-aos="zoom-in"
                    >
                        <FaBook className="text-4xl text-blue-600 mx-auto mb-4" />
                        <h3 className="font-semibold text-lg mb-2">Peminjaman Buku</h3>
                        <p className="text-gray-600 text-sm">
                            Siswa dapat meminjam koleksi buku sesuai ketentuan perpustakaan.
                        </p>
                    </div>
                    <div
                        className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition text-center"
                        data-aos="zoom-in"
                        data-aos-delay="100"
                    >
                        <FaUndo className="text-4xl text-green-600 mx-auto mb-4" />
                        <h3 className="font-semibold text-lg mb-2">Pengembalian Buku</h3>
                        <p className="text-gray-600 text-sm">
                            Buku dikembalikan tepat waktu untuk menghindari denda.
                        </p>
                    </div>
                    <div
                        className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition text-center"
                        data-aos="zoom-in"
                        data-aos-delay="200"
                    >
                        <FaUserPlus className="text-4xl text-purple-600 mx-auto mb-4" />
                        <h3 className="font-semibold text-lg mb-2">Keanggotaan</h3>
                        <p className="text-gray-600 text-sm">
                            Semua siswa dapat menjadi anggota dan memperoleh kartu perpustakaan.
                        </p>
                    </div>
                    <div
                        className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition text-center"
                        data-aos="zoom-in"
                        data-aos-delay="300"
                    >
                        <FaLaptop className="text-4xl text-red-600 mx-auto mb-4" />
                        <h3 className="font-semibold text-lg mb-2">Literasi Digital</h3>
                        <p className="text-gray-600 text-sm">
                            Akses e-book dan sumber belajar digital tersedia untuk siswa.
                        </p>
                    </div>
                    <div
                        className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition text-center"
                        data-aos="zoom-in"
                        data-aos-delay="400"
                    >
                        <FaHeadphones className="text-4xl text-orange-500 mx-auto mb-4" />
                        <h3 className="font-semibold text-lg mb-2">Audio & Visual</h3>
                        <p className="text-gray-600 text-sm">
                            Koleksi audio book dan media pembelajaran untuk mendukung studi.
                        </p>
                    </div>
                    <div
                        className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition text-center"
                        data-aos="zoom-in"
                        data-aos-delay="500"
                    >
                        <FaChalkboardTeacher className="text-4xl text-indigo-600 mx-auto mb-4" />
                        <h3 className="font-semibold text-lg mb-2">Bimbingan Literasi</h3>
                        <p className="text-gray-600 text-sm">
                            Pustakawan siap membimbing siswa dalam mencari referensi belajar.
                        </p>
                    </div>
                </div>
            </section>

            {/* Alur Peminjaman */}
            <section className="bg-gray-50 py-12 px-6">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-2xl font-bold text-center mb-10">
                        Alur Peminjaman Buku
                    </h2>
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                        <div
                            className="bg-white p-6 rounded-xl shadow text-center flex-1"
                            data-aos="fade-up"
                        >
                            <span className="text-3xl font-bold text-blue-600">1</span>
                            <p className="mt-2 text-gray-600 text-sm">Pilih buku di rak</p>
                        </div>
                        <div
                            className="bg-white p-6 rounded-xl shadow text-center flex-1"
                            data-aos="fade-up"
                            data-aos-delay="100"
                        >
                            <span className="text-3xl font-bold text-blue-600">2</span>
                            <p className="mt-2 text-gray-600 text-sm">Serahkan ke pustakawan</p>
                        </div>
                        <div
                            className="bg-white p-6 rounded-xl shadow text-center flex-1"
                            data-aos="fade-up"
                            data-aos-delay="200"
                        >
                            <span className="text-3xl font-bold text-blue-600">3</span>
                            <p className="mt-2 text-gray-600 text-sm">Catat & pinjam</p>
                        </div>
                        <div
                            className="bg-white p-6 rounded-xl shadow text-center flex-1"
                            data-aos="fade-up"
                            data-aos-delay="300"
                        >
                            <span className="text-3xl font-bold text-blue-600">4</span>
                            <p className="mt-2 text-gray-600 text-sm">Kembalikan sesuai waktu</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Jam Operasional */}
            <section className="max-w-4xl mx-auto py-12 px-6 text-center">
                <h2 className="text-2xl font-bold mb-6">Jam Operasional</h2>
                <div
                    className="bg-white shadow p-6 rounded-xl inline-block"
                    data-aos="fade-up"
                >
                    <FaClock className="text-4xl text-blue-600 mx-auto mb-3" />
                    <p className="text-gray-700">
                        Senin - Jumat : 07.00 - 15.00 <br />
                        Sabtu : 07.00 - 12.00 <br />
                        Minggu & Hari Libur : Tutup
                    </p>
                </div>
            </section>
        </div>
    );
}
