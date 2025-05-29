"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { FaCheck } from "react-icons/fa";

export default function Successfuly() {
  const router = useRouter();

  const handleNewCharge = () => {
    router.push("/charging-start");
  };

  return (
    <div className="relative h-[calc(100vh-64px)] w-full  flex flex-col justify-end items-center ">
      {/* ✅ ไอคอนเช็ค (เปลี่ยนสีพื้นหลังให้ตรงกับ text-cyan-400) */}
      <div className="absolute top-[15%] left-1/2 -translate-x-1/2 z-10">
        <div className="bg-cyan-400 rounded-[50px] w-[150px] h-[150px] flex items-center justify-center">
          <FaCheck className="text-white text-8xl" />
        </div>
      </div>

      {/* ✅ ก้อน Title */}
      <div className="mb-[2%] w-full text-left pl-[3%]">
        <h1 className="text-[40px] sm:text-5xl font-bold text-cyan-400 leading-tight tracking-tight drop-shadow-sm">
          EASY
          <br />
          CHARGE
        </h1>
      </div>

      {/* ✅ ก้อน Card ข้อมูล */}
      <div className="mb-[1%] w-full flex flex-col items-center px-6">
        <div className="rounded-2xl p-6 w-[85%] max-w-sm text-left text-[18px] ">
          {/* bg-white shadow-md */}
          <p className="text-black">ระยะเวลาที่ใช้: 00:45:10</p>
          <p className="text-black">พลังงานที่ใช้: 6.8 kWh</p>
          <p className="text-black">ค่าใช้จ่ายรวม: 27.20 บาท</p>
          <p className="text-black">ระยะทางที่วิ่งได้โดยประมาณ: 48 กม.</p>
          <p className="text-black">รวมค่าใช้จ่ายทั้งหมด: 27.20 บาท</p>
        </div>
      </div>

      {/* ✅ ปุ่ม */}
      <div className="mb-[15%] z-10 w-full flex justify-center">
        <button
          className="w-[70%] h-[6vh] max-w-sm bg-gray-200 text-gray-700 font-semibold text-[20px] leading-none overflow-hidden rounded-xl"
          onClick={handleNewCharge}
        >
          เริ่มชาร์จใหม่
        </button>
      </div>
    </div>
  );
}
