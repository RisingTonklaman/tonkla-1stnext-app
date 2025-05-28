"use client";
import Image from "next/image";

export default function Warning() {
  return (
    <>
      <div className="h-[100vh] w-full flex items-center justify-center relative">
        <div className="relative w-[300px] h-[300px] bg-gray-800 rounded-xl p-4 flex flex-col items-center justify-center">
          <h1 className="text-white text-center mb-4 relative ">
            กรุณาเสียบหัวชาร์จ
          </h1>
          <Image
            src="/warning.png"
            alt="change"
            fill
            className="object-contain"
          />
        </div>
      </div>
    </>
  );
}
