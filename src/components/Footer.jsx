"use client";

import { useState, useEffect } from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaEnvelope,
  FaArrowRight,
} from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [formStatus, setFormStatus] = useState(null);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      setFormStatus({ type: "error", message: "Masukkan alamat email!" });
      return;
    }
    // Simulasi pengiriman newsletter
    setTimeout(() => {
      setFormStatus({
        type: "success",
        message: "Berhasil berlangganan newsletter!",
      });
      setEmail("");
    }, 1000);
  };

  return (
    <footer className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {/* Logo & Deskripsi */}
          <div className="space-y-4" data-aos="fade-up">
            <h3 className="text-2xl sm:text-3xl font-bold">Perpustakaan SD</h3>
            <p className="text-sm sm:text-base text-gray-200 leading-relaxed">
              Mendukung literasi siswa dengan koleksi buku yang beragam dan
              layanan modern untuk pembelajaran yang menyenangkan.
            </p>
            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-200 hover:text-white transition-all"
                data-aos="zoom-in"
                data-aos-delay="100"
              >
                <FaFacebook size={24} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-200 hover:text-white transition-all"
                data-aos="zoom-in"
                data-aos-delay="200"
              >
                <FaTwitter size={24} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-200 hover:text-white transition-all"
                data-aos="zoom-in"
                data-aos-delay="300"
              >
                <FaInstagram size={24} />
              </a>
            </div>
          </div>

          {/* Navigasi */}
          <div className="space-y-4" data-aos="fade-up" data-aos-delay="200">
            <h4 className="text-lg sm:text-xl font-semibold">Tautan Cepat</h4>
            <ul className="space-y-2 text-sm sm:text-base text-gray-200">
              {[
                { name: "Beranda", href: "/" },
                { name: "Profil", href: "/profil" },
                { name: "OPAC", href: "/opac" },
                { name: "Layanan", href: "/layanan" },
                { name: "FAQ", href: "/faq" },
                { name: "Kontak", href: "/kontak" },
              ].map((link, index) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="hover:text-white hover:underline transition-all"
                    data-aos="fade-up"
                    data-aos-delay={300 + index * 50}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-4" data-aos="fade-up" data-aos-delay="400">
            <h4 className="text-lg sm:text-xl font-semibold">
              Berlangganan Newsletter
            </h4>
            <p className="text-sm sm:text-base text-gray-200">
              Dapatkan update terbaru tentang koleksi buku dan acara
              perpustakaan.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="space-y-3">
              {formStatus && (
                <div
                  className={`p-3 rounded-xl text-sm ${
                    formStatus.type === "success"
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                  }`}
                  data-aos="fade-down"
                >
                  {formStatus.message}
                </div>
              )}
              <div className="relative">
                <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="email"
                  placeholder="Masukkan email Anda"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-white focus:border-transparent bg-white text-gray-800 shadow-sm transition-all"
                />
              </div>
              <button
                type="submit"
                className="flex items-center justify-center gap-2 w-full bg-white text-indigo-600 px-4 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-all shadow-md"
              >
                Berlangganan <FaArrowRight />
              </button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div
          className="mt-12 pt-8 border-t border-gray-300/30 text-center"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          <p className="text-sm sm:text-base text-gray-200">
            © {new Date().getFullYear()} Perpustakaan SD. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
