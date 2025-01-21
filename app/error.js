"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function GlobalError({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error("Error:", error);
  }, [error]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center text-gray-800 dark:text-gray-200">
      <div className="p-8 text-center">
        <h1 className="text-4xl font-bold mb-4 text-red-600">
          Something went wrong!
        </h1>
        <p className="mb-6 text-lg">
          An unexpected error occurred. Please try again or go back to the home
          page.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={reset}
            className="px-6 py-2 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 transition"
          >
            Try Again
          </button>
          <Link
            href="/"
            className="px-6 py-2 bg-gray-600 text-white font-semibold rounded hover:bg-gray-700 transition"
          >
            Go to Home
          </Link>
        </div>
      </div>
      <div className="mt-8 text-sm text-gray-500 text-center">
        <p>Error details:</p>
        <pre className="text-red-600 font-bold">
          {error.message || "No error details available."}
        </pre>
      </div>
    </div>
  );
}
