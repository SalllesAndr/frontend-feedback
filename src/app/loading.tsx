import Image from "next/image";

export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="mb-4">
        <Image
          className="h-20 w-auto"
          src="/logo/logo.svg"
          alt="T Systems Logo"
          width={32}
          height={32}
        />
      </div>
      <div className="relative w-28 h-1 bg-fb-gray-200 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-fb-pink-300 animate-pulse-loading" />
      </div>
    </div>
  );
}
