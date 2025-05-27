"use client";
import React from "react";
import { FaBolt } from "react-icons/fa";
import RedButton from "@/components/reusecomponents/RedButton";

export default function ChargingSession() {
  return (
    <div className="h-screen flex flex-col justify-between">
      {/* Header */}
      <div className="flex justify-center items-center h-[45vh]">
        <div className="relative w-[250px] h-[250px]">
          {/* วงนอก Gradient (ขอบ) */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-cyan-400 to-teal-800 p-[6px]">
            {/* วงในดำ */}
            <div className="w-full h-full bg-gradient-to-r from-[#003028] to-black rounded-full flex flex-col items-center justify-center">
              <FaBolt className="text-cyan-400 text-[32px] mb-1" />
              <div className="text-cyan-400 text-[25px] font-semibold">70%</div>
              <div className="text-white text-[50px] font-bold leading-tight">
                500
              </div>
              <div className="text-white text-[20px]">km</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex-grow bg-gradient-to-b from-teal-600 to-black text-white rounded-t-2xl shadow-lg p-4 flex flex-col">
        <div className="text-left  leading-tight mb-2">
          <p className="text-[5vw]">
            <span className="font-bold ">ชื่อสถานี :</span> hello world
          </p>
          <p className="mt-1 text-[4vw]">
            <span className="font-bold ">หัวชาร์จ : </span>หัว1
          </p>
        </div>

        <div className="flex flex-col gap-1">
          <div className="grid grid-cols-3 gap-2 text-center h-[40%] py-2">
            {/* กล่อง 1: สถานะ */}
            <div className="bg-gradient-to-b from-green-400 to-[#ecfcf9] text-black  rounded-3xl px-3 py-2 flex flex-col h-full">
              <div className="absolute text-left text-[14px] ">สถานะ</div>
              <div className="flex-1 flex items-center justify-center text-[20px] font-bold">
                กำลังชาร์จ
              </div>
            </div>
            <div className="bg-gradient-to-b from-yellow-300 to-[#ecfcf9] text-black  rounded-3xl px-3 py-2 flex flex-col h-full">
              <div className="absolute text-left text-[14px]">อุณหภูมิ</div>
              <div className="flex-1 flex items-center justify-center text-[20px] font-bold">
                50°C
              </div>
            </div>

            <div className="bg-gradient-to-b from-gray-300 to-[#ecfcf9] text-black rounded-3xl px-3 py-2 flex flex-col h-full">
              <div className="absolute text-left text-base ">ชาร์จเต็มใน :</div>
              <div className="flex-1 flex items-center justify-center text-[20px] font-bold">
                เวลา
              </div>
            </div>
          </div>
          <div
            className="relative flex w-full h-[150px] text-black rounded-3xl overflow-hidden mb-5"
            style={{
              backgroundImage: "linear-gradient(to bottom, #ecfcf9 , #008da9)",
            }}
          >
            {/* กล่องซ้าย */}
            <div className="flex-1 flex flex-col px-2">
              <div className=" absolute text-base text-center pt-2">
                จำนวนหน่วยไฟที่ใช้
              </div>
              <div className="flex-1 flex items-center justify-center">
                <div className="text-4xl font-semibold text-white">0.8 kWh</div>
              </div>
            </div>

            {/* เส้นแบ่งกลาง */}
            <div className="w-[2.5px] h-[75%] bg-black self-center"></div>

            {/* กล่องขวา */}
            <div className="flex-1 flex flex-col px-2">
              <div className="absolute text-base text-center pt-2">
                ค่าชาร์จ
              </div>
              <div className="flex-1 flex items-center justify-center">
                <div className="text-4xl font-semibold text-white">3.8 บาท</div>
              </div>
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
