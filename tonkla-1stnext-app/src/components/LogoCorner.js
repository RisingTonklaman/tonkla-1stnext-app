"use client";
import Image from "next/image";

export default function LogoCorner() {
  return (
    <div className="absolute top-4 left-4 w-8 h-8 sm:w-10 sm:h-10">
      <Image
        src="/logo.png"
        alt="Logo"
        fill
        sizes="(max-width: 768px) 40px, 60px"
        className="object-contain"
      />
    </div>
  );
}
