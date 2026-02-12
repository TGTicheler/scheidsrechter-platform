import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
          ScheidsrechterZoeken
        </Link>
        <div className="space-x-4">
          <Link href="/wedstrijd-aanmaken" className="hover:text-blue-200">
            Nieuwe Wedstrijd
          </Link>
          <Link href="/login" className="bg-white text-blue-600 px-4 py-2 rounded hover:bg-gray-100">
            Inloggen
          </Link>
        </div>
      </div>
    </nav>
  );
}