"use client";
import Image from "next/image";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

export default function Kontak() {
    return (
        <div className="bg-white">
            {/* Banner */}
            <section className="relative w-full h-[250px]">
                <Image
                    src="https://picsum.photos/1200/250?random=40"
                    alt="Kontak Perpustakaan"
                    fill
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <h1
                        className="text-white text-3xl md:text-4xl font-bold"
                        data-aos="fade-down"
                    >
                        Kontak Perpustakaan
                    </h1>
                </div>
            </section>

            {/* Konten */}
            <section className="max-w-6xl mx-auto py-12 px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* Form */}
                <div data-aos="fade-right">
                    <h2 className="text-2xl font-bold mb-6">Kirim Pesan</h2>
                    <form className="space-y-4">
                        <input
                            type="text"
                            placeholder="Nama"
                            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <textarea
                            rows="5"
                            placeholder="Pesan"
                            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        ></textarea>
                        <button
                            type="submit"
                            className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-700 transition"
                        >
                            Kirim
                        </button>
                    </form>
                </div>

                {/* Info & Maps */}
                <div className="space-y-6" data-aos="fade-left">
                    <h2 className="text-2xl font-bold mb-6">Informasi Perpustakaan</h2>
                    <div className="space-y-4">
                        <p className="flex items-center gap-3 text-gray-700">
                            <FaMapMarkerAlt className="text-blue-600" />
                            Jl. Pendidikan No. 12, Jakarta
                        </p>
                        <p className="flex items-center gap-3 text-gray-700">
                            <FaPhoneAlt className="text-green-600" />
                            (021) 1234567
                        </p>
                        <p className="flex items-center gap-3 text-gray-700">
                            <FaEnvelope className="text-red-600" />
                            perpustakaan@sdcontoh.sch.id
                        </p>
                        <p className="text-gray-700">
                            <strong>Jam Buka:</strong> Senin - Sabtu, 07.00 - 15.00
                        </p>
                    </div>

                    {/* Google Maps Embed */}
                    <div className="rounded-xl overflow-hidden shadow-lg">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.967889962748!2d110.36948941538164!3d-7.796087779394535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a578a92d00c47%3A0xf25a35c0eaa2e985!2sPerpustakaan%20Umum!5e0!3m2!1sid!2sid!4v1696012999999!5m2!1sid!2sid"
                            width="100%"
                            height="250"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                        ></iframe>
                    </div>
                </div>
            </section>
        </div>
    );
}
