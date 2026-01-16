import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-xl mx-auto text-center px-6 py-16">
        <h1 className="text-6xl font-extrabold text-gray-900 mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-6">
          Oops — the page you were looking for doesn't exist.
        </p>
        <p className="text-gray-500 mb-8">
          You may have mistyped the address or the page may have moved.
        </p>
        <div className="flex justify-center gap-4">
          <Link
            href="/"
            className="inline-block bg-[#0a3758] text-white px-6 py-2 rounded-md hover:bg-[#001728] transition duration-300 ease-in-out"
          >
            Go home
          </Link>
          <Link
            href="/contact-us"
            className="inline-block border border-gray-300 px-6 py-2 rounded-md"
          >
            Contact support
          </Link>
        </div>
      </div>
    </div>
  );
}
