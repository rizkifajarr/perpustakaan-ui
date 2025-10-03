import Image from "next/image";

export default function Profil() {
  return (
    <div className="bg-white">
      {/* Banner */}
      <section className="relative w-full h-[300px]">
        <Image
          src="https://picsum.photos/1200/300?random=2"
          alt="Profil Perpustakaan"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-white text-4xl font-bold">Profil Perpustakaan</h1>
        </div>
      </section>

      {/* Tentang Kami */}
      <section className=" max-w-4xl mx-auto py-12 px-6">
        <h2 className="text-2xl font-bold mb-4">Tentang Kami</h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          Perpustakaan SD kami berdiri untuk mendukung program literasi siswa
          dengan menyediakan koleksi buku yang beragam, akses informasi digital,
          serta kegiatan literasi yang mendorong minat baca sejak dini.
        </p>
      </section>

      {/* Daftar Pustakawan */}
      <section className="bg-gray-50 py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-10">
            Tim Pustakawan
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {/* Pustakawan 1 */}
            <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
              <Image
                src="https://randomuser.me/api/portraits/women/44.jpg"
                alt="Pustakawan 1"
                width={150}
                height={150}
                className="rounded-full mx-auto mb-4"
              />
              <h3 className="text-lg font-semibold text-center">Ibu Siti</h3>
              <p className="text-sm text-gray-600 text-center">
                Kepala Perpustakaan
              </p>
            </div>

            {/* Pustakawan 2 */}
            <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
              <Image
                src="https://randomuser.me/api/portraits/men/32.jpg"
                alt="Pustakawan 2"
                width={150}
                height={150}
                className="rounded-full mx-auto mb-4"
              />
              <h3 className="text-lg font-semibold text-center">Pak Budi</h3>
              <p className="text-sm text-gray-600 text-center">
                Pustakawan Junior
              </p>
            </div>

            {/* Pustakawan 3 */}
            <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
              <Image
                src="https://randomuser.me/api/portraits/women/68.jpg"
                alt="Pustakawan 3"
                width={150}
                height={150}
                className="rounded-full mx-auto mb-4"
              />
              <h3 className="text-lg font-semibold text-center">Ibu Rina</h3>
              <p className="text-sm text-gray-600 text-center">
                Staf Administrasi
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
