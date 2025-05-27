"use client";
import React from "react";
import { FaBolt } from "react-icons/fa";

export default function ChargingSession() {
  const boxClass = "h-[100%] rounded-xl py-2 text-center";

  return (
    <div className="flex flex-col flex-grow">
      {/* Header */}
      <div className="relative">
        {/* Circle Progress absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 */}
        <div className="flex justify-center items-center h-[45vh]">
          <div className="w-48 h-48 rounded-full border-[12px] border-teal-400 border-t-0 border-b-0 flex flex-col items-center justify-center bg-black text-white shadow-xl">
            <FaBolt className="text-cyan-400 text-xl mb-1" />
            <span className="text-cyan-400 text-xl font-semibold">70%</span>
            <span className="text-4xl font-bold">500</span>
            <span className="text-sm">km</span>
          </div>
        </div>
      </div>

      {/* Bottom Section mt-auto */}
      <div className="mt-auto w-full bg-gradient-to-b from-teal-600 to-black text-white rounded-t-2xl rounded-b-none shadow-lg p-4 flex flex-col">
        <p className="text-sm font-semibold">
          ชื่อสถานนี : <span className="font-light">ห้องชาร์จ</span>
        </p>
        <div className="mt-auto flex flex-col gap-4">
          <div className="grid grid-cols-3 gap-2 text-center mb-[10%]">
            <div className={`bg-green-400 text-black font-bold ${boxClass}`}>
              ⚡ กำลังชาร์จ
            </div>
            <div className={`bg-yellow-300 text-black font-bold ${boxClass}`}>
              อุณหภูมิ <br />
              50°C
            </div>
            <div className={`bg-white text-black text-sm ${boxClass}`}>
              เวลา
              <br />
              ชาร์จเต็มใน :
            </div>
          </div>

          <div
            className={`flex w-full text-black rounded-xl overflow-hidden ${boxClass}`}
            style={{
              backgroundImage: "linear-gradient(to bottom, #ecfcf9 , #008da9)",
            }}
          >
            <div className="flex-1 py-4 text-center">
              <div className="text-lg font-semibold">0.8 kWh</div>
              <div className="text-sm">จำนวนหน่วยไฟที่ใช้</div>
            </div>
            <div className="w-[1px] bg-white/50"></div>
            <div className="flex-1 py-4 text-center">
              <div className="text-lg font-semibold">3.8 บาท</div>
              <div className="text-sm">ค่าชาร์จ</div>
            </div>
          </div>

          <div className="text-xs text-center text-white/60">1 kWh / 4 บาท</div>

          <button
            className={`w-full bg-red-500 hover:bg-red-600 text-white text-lg font-bold ${boxClass}`}
          >
            หยุดการชาร์จ
          </button>
        </div>
      </div>
    </div>
  );
}
