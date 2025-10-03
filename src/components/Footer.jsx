export default function Footer() {
  return (
    <footer className="bg-blue-600 text-white py-6">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <p>
          © {new Date().getFullYear()} Perpustakaan SD. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
