"use client";

import Link from "next/link";

export default function GlobalError({ error, reset }) {
  return (
    
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4">
        <h1 className="text-3xl font-bold text-red-600">Something Went Wrong!</h1>

        <p className="mt-2 text-gray-600">{error.message}</p>

        <Link href="/">
        <button className="bg-[#FF9900] btn text-black px-4 py-2 mb-4 rounded">
          ← Back to Home
        </button>
      </Link>
      </div>
  );
}
