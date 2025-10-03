"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaFacebook, FaTwitter, FaInstagram, FaArrowRight } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Kontak() {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [formStatus, setFormStatus] = useState(null);

    useEffect(() => {
        AOS.init({
            duration: 800,
            once: true,
        });
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.name || !formData.email || !formData.message) {
            setFormStatus({ type: "error", message: "Semua kolom wajib diisi!" });
            return;
        }
        // Simulasi pengiriman form
        setTimeout(() => {
            setFormStatus({ type: "success", message: "Pesan berhasil dikirim!" });
            setFormData({ name: "", email: "", message: "" });
        }, 1000);
    };

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Banner */}
            <section className="relative w-full h-[250px] sm:h-[350px] lg:h-[450px]">
                <Image
                    src="https://picsum.photos/1600/450?random=40"
                    alt="Kontak Perpustakaan"
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
                            Hubungi Kami
                        </h1>
                        <p
                            className="text-base sm:text-lg md:text-xl max-w-2xl mx-auto"
                            data-aos="fade-up"
                            data-aos-delay="100"
                        >
                            Kami siap membantu Anda dengan pertanyaan atau kebutuhan literasi Anda.
                        </p>
                    </div>
                </div>
            </section>

            {/* Konten */}
            <section className="max-w-7xl mx-auto py-12 sm:py-16 px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                {/* Form */}
                <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8" data-aos="fade-right">
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6">
                        Kirim Pesan Anda
                    </h2>
                    {formStatus && (
                        <div
                            className={`mb-4 p-4 rounded-xl text-sm ${formStatus.type === "success"
                                ? "bg-green-100 text-green-700"
                                : "bg-red-100 text-red-700"
                                }`}
                            data-aos="fade-down"
                        >
                            {formStatus.message}
                        </div>
                    )}
                    <form className="space-y-4" onSubmit={handleSubmit}>
                        <div>
                            <input
                                type="text"
                                name="name"
                                placeholder="Nama"
                                value={formData.name}
                                onChange={handleInputChange}
                                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-indigo-500 focus:border-transparent shadow-sm transition-all"
                            />
                        </div>
                        <div>
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                value={formData.email}
                                onChange={handleInputChange}
                                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-indigo-500 focus:border-transparent shadow-sm transition-all"
                            />
                        </div>
                        <div>
                            <textarea
                                name="message"
                                rows="5"
                                placeholder="Pesan Anda"
                                value={formData.message}
                                onChange={handleInputChange}
                                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-indigo-500 focus:border-transparent shadow-sm transition-all"
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-gradient-to-r from-indigo-600 to-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-indigo-700 hover:to-blue-700 transition-all shadow-md"
                        >
                            Kirim Pesan
                        </button>
                    </form>
                </div>

                {/* Info & Maps */}
                <div className="space-y-6" data-aos="fade-left">
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6">
                        Informasi Kontak
                    </h2>
                    <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 space-y-4">
                        <div className="flex items-center gap-3 text-gray-700">
                            <FaMapMarkerAlt className="text-indigo-600 text-xl" />
                            <p>Jl. Pendidikan No. 12, Jakarta 12345</p>
                        </div>
                        <div className="flex items-center gap-3 text-gray-700">
                            <FaPhoneAlt className="text-green-600 text-xl" />
                            <p>(021) 1234-5678</p>
                        </div>
                        <div className="flex items-center gap-3 text-gray-700">
                            <FaEnvelope className="text-red-600 text-xl" />
                            <p>perpustakaan@sdcontoh.sch.id</p>
                        </div>
                        <div className="text-gray-700">
                            <strong>Jam Buka:</strong>
                            <ul className="list-disc list-inside mt-2 text-sm sm:text-base">
                                <li>Senin - Jumat: 07:00 - 15:00</li>
                                <li>Sabtu: 07:00 - 12:00</li>
                                <li>Minggu & Hari Libur: Tutup</li>
                            </ul>
                        </div>
                        <div className="flex gap-4 pt-4 border-t border-gray-200">
                            <a
                                href="https://facebook.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-indigo-600 hover:text-indigo-800 transition-all"
                                data-aos="zoom-in"
                                data-aos-delay="100"
                            >
                                <FaFacebook size={24} />
                            </a>
                            <a
                                href="https://twitter.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-indigo-600 hover:text-indigo-800 transition-all"
                                data-aos="zoom-in"
                                data-aos-delay="200"
                            >
                                <FaTwitter size={24} />
                            </a>
                            <a
                                href="https://instagram.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-indigo-600 hover:text-indigo-800 transition-all"
                                data-aos="zoom-in"
                                data-aos-delay="300"
                            >
                                <FaInstagram size={24} />
                            </a>
                        </div>
                    </div>

                    {/* Google Maps Embed */}
                    <div className="rounded-2xl overflow-hidden shadow-lg" data-aos="zoom-in">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.967889962748!2d110.36948941538164!3d-7.796087779394535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a578a92d00c47%3A0xf25a35c0eaa2e985!2sPerpustakaan%20Umum!5e0!3m2!1sid!2sid!4v1696012999999!5m2!1sid!2sid"
                            width="100%"
                            height="300"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="bg-gradient-to-r from-purple-600 to-pink-400 py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
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
                        Daftar sebagai anggota perpustakaan dan nikmati akses ke ribuan buku dan sumber belajar!
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