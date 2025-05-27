"use client";
import React from "react";
import { FaBolt } from "react-icons/fa";
import RedButton from "@/components/reusecomponents/RedButton";

export default function ChargingSession() {
  return (
    <div className="h-screen flex flex-col justify-between">
      {/* Header */}
      <div className="flex justify-center items-center h-[45vh]">
        <div className="w-48 h-48 rounded-full border-[12px] border-teal-400 border-t-0 border-b-0 flex flex-col items-center justify-center bg-black text-white shadow-xl">
          <FaBolt className="text-cyan-400 text-xl mb-1" />
          <span className="text-cyan-400 text-xl font-semibold">70%</span>
          <span className="text-4xl font-bold">500</span>
          <span className="text-sm">km</span>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex-grow bg-gradient-to-b from-teal-600 to-black text-white rounded-t-2xl shadow-lg p-4 flex flex-col">
        <div className="text-left text-[5vw] leading-tight mb-1">
          <p>
            <span className="font-bold">ชื่อสถานี :</span> hello world
          </p>
          <p>
            <span className="font-bold">หัวชาร์จ : </span>หัว1
          </p>
        </div>

        <div className="flex flex-col gap-1">
          <div className="grid grid-cols-3 gap-2 text-center h-[40%] py-2">
            {/* กล่อง 1: สถานะ */}
            <div className="bg-gradient-to-b from-green-400 to-[#ecfcf9] text-black font-bold rounded-3xl px-3 py-2 flex flex-col h-full">
              <div className="text-left text-base">สถานะ</div>
              <div className="flex-1 flex items-center justify-center text-lg">
                กำลังชาร์จ
              </div>
            </div>
            <div className="bg-gradient-to-b from-yellow-300 to-[#ecfcf9] text-black font-bold rounded-3xl px-3 py-2 flex flex-col h-full">
              <div className="text-left text-base">อุณหภูมิ</div>
              <div className="flex-1 flex items-center justify-center text-lg">
                50°C
              </div>
            </div>

            <div className="bg-black-100 text-black rounded-3xl px-3 py-2 flex flex-col h-full">
              <div className="text-left text-base font-bold">เวลา</div>
              <div className="flex-1 flex items-center justify-center text-lg">
                ชาร์จเต็มใน :
              </div>
            </div>
          </div>

          <div
            className={`flex w-full h-[150px] text-black rounded-3xl overflow-hidden mb-5`}
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

          {/* <div className="text-xs text-center text-white/60">1 kWh / 4 บาท</div> */}

          <div className="w-[350px] h-[54px] mx-auto">
            <RedButton
              ButtonText="หยุดการชาร์จ"
              onClick={() => console.log("hello tonklaman")}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
