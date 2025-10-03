import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AosInit from "../components/AosInit";

export const metadata = {
  title: "Perpustakaan SD",
  description: "Website Perpustakaan Sekolah Dasar",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className="bg-white text-gray-900">
        <AosInit />
        <Navbar />
        {/* padding top biar konten nggak ketiban navbar */}
        <main className="min-h-screen flex flex-col">
          <div className="flex-1 w-full">{children}</div>
        </main>
        <Footer />
      </body>
    </html>
  );
}
