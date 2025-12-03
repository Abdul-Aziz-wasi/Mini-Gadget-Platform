import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center p-6">
      <h2 className="text-4xl font-bold">404 – Page Not Found</h2>
      <p className="mt-3 text-gray-600">The page you are looking for does not exist.</p>

      <Link href="/">
        <button className="bg-[#FF9900] btn text-black px-4 py-2 mb-4 rounded">
          ← Back to Home
        </button>
      </Link>
    </div>
  );
}
