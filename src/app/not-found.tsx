"use client";

import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();

  const handleGoBack = () => {
    router.back();
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-fb-pink-100">
      <h1 className="text-6xl font-bold text-fb-pink-500 mb-6">404</h1>
      <p className="text-2xl font-medium text-fb-pink-400 mb-8">Not Found</p>
      <button
        onClick={handleGoBack}
        className="px-6 py-3 bg-fb-pink-400 text-white rounded-md hover:bg-fb-pink-500 transition"
      >
        Back
      </button>
    </div>
  );
}
