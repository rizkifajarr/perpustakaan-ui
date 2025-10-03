"use client";
import Image from "next/image";
import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const faqs = [
        {
            question: "Bagaimana cara menjadi anggota perpustakaan?",
            answer:
                "Cukup datang ke perpustakaan dengan membawa kartu pelajar. Pustakawan akan membantu pendaftaran dan memberikan kartu anggota.",
        },
        {
            question: "Berapa lama buku dapat dipinjam?",
            answer:
                "Buku dapat dipinjam selama 7 hari dan dapat diperpanjang jika tidak sedang dipinjam oleh siswa lain.",
        },
        {
            question: "Apa yang terjadi jika terlambat mengembalikan buku?",
            answer:
                "Jika terlambat, siswa dikenakan sanksi berupa teguran atau denda sesuai kebijakan perpustakaan.",
        },
        {
            question: "Apakah tersedia e-book atau koleksi digital?",
            answer:
                "Ya, perpustakaan menyediakan akses ke beberapa e-book dan sumber belajar digital.",
        },
        {
            question: "Apakah perpustakaan buka di hari Sabtu?",
            answer:
                "Ya, perpustakaan buka pada hari Sabtu pukul 07.00 - 12.00. Minggu dan hari libur nasional tutup.",
        },
    ];

    return (
        <div className="bg-white">
            {/* Banner */}
            <section className="relative w-full h-[250px]">
                <Image
                    src="https://picsum.photos/1200/250?random=30"
                    alt="FAQ Perpustakaan"
                    fill
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <h1
                        className="text-white text-3xl md:text-4xl font-bold"
                        data-aos="fade-down"
                    >
                        Frequently Asked Questions
                    </h1>
                </div>
            </section>

            {/* FAQ Accordion */}
            <section className="max-w-4xl mx-auto py-12 px-6">
                <h2
                    className="text-2xl font-bold text-center mb-10"
                    data-aos="fade-up"
                >
                    Pertanyaan yang Sering Diajukan
                </h2>
                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="bg-white shadow-md rounded-xl overflow-hidden transition"
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
                        >
                            <button
                                className="w-full flex justify-between items-center px-6 py-4 text-left font-medium text-gray-800 hover:bg-gray-50 transition"
                                onClick={() => toggleFAQ(index)}
                            >
                                {faq.question}
                                {openIndex === index ? (
                                    <FaChevronUp className="text-blue-600" />
                                ) : (
                                    <FaChevronDown className="text-gray-500" />
                                )}
                            </button>
                            {openIndex === index && (
                                <div className="px-6 pb-4 text-gray-600">
                                    {faq.answer}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
