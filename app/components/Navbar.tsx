import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-linear-to-r from-cyan-500 to-blue-500 text-white shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">

          <Link href="/" className="text-2xl font-bold hover:text-blue-200">
            PoemHub
          </Link>

          <div className="flex space-x-6">
            <Link href="/" className="hover:text-blue-200">
              Homepage 
            </Link>
            <Link href="/" className="hover:text-blue-200">{/* we're creating feed page in phase 2 */}
              Feed
            </Link>
            <Link href="/profile" className="hover:text-blue-200">
              Profile
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}