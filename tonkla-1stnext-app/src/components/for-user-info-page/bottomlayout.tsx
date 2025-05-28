import { FaBolt } from "react-icons/fa";
import React from "react";

interface BottomLayoutProps {
  buttonChildren: React.ReactNode;
}

export default function BottomLayout({ buttonChildren }: BottomLayoutProps) {
  return (
    <div className="flex-grow bg-gradient-to-b from-teal-600 to-black text-white rounded-t-2xl shadow-lg p-4 flex flex-col">
      {/* Top Text Info */}
      <div className="text-left leading-tight mb-2">
        <p className="text-[5vw]">
          <span className="font-bold">ชื่อสถานี :</span> hello world
        </p>
        <p className="mt-1 text-[4vw]">
          <span className="font-bold">หัวชาร์จ :</span> หัว1
        </p>
      </div>

      {/* Grid Info */}
      <div className="flex flex-col gap-1">
        <div className="grid grid-cols-3 gap-2 text-center h-[40%] py-2">
          {/* Box 1 */}
          <div className="relative bg-gradient-to-b from-green-400 to-[#ecfcf9] text-black rounded-3xl px-3 py-2 flex flex-col h-full">
            <div className="text-left text-[14px]">สถานะ</div>
            <div className="flex-1 flex items-center justify-center text-[20px] font-bold">
              กำลังชาร์จ
            </div>
          </div>

          {/* Box 2 */}
          <div className="relative bg-gradient-to-b from-yellow-300 to-[#ecfcf9] text-black rounded-3xl px-3 py-2 flex flex-col h-full">
            <div className="text-left text-[14px]">อุณหภูมิ</div>
            <div className="flex-1 flex items-center justify-center text-[20px] font-bold">
              50°C
            </div>
          </div>

          {/* Box 3 */}
          <div className="relative bg-gradient-to-b from-gray-300 to-[#ecfcf9] text-black rounded-3xl px-3 py-2 flex flex-col h-full">
            <div className="text-left text-base">ชาร์จเต็มใน :</div>
            <div className="flex-1 flex items-center justify-center text-[20px] font-bold">
              เวลา
            </div>
          </div>
        </div>

        {/* Units & Price Box */}
        <div
          className="relative flex w-full h-[150px] text-black rounded-3xl overflow-hidden mb-5"
          style={{
            backgroundImage: "linear-gradient(to bottom, #ecfcf9 , #008da9)",
          }}
        >
          {/* Left Box */}
          <div className="flex-1 flex flex-col px-2">
            <div className="text-base text-center pt-2">จำนวนหน่วยไฟที่ใช้</div>
            <div className="flex-1 flex items-center justify-center">
              <div className="text-4xl font-semibold text-white">0.8 kWh</div>
            </div>
          </div>

          {/* Middle Divider */}
          <div className="w-[2.5px] h-[75%] bg-black self-center"></div>

          {/* Right Box */}
          <div className="flex-1 flex flex-col px-2">
            <div className="text-base text-center pt-2">ค่าชาร์จ</div>
            <div className="flex-1 flex items-center justify-center">
              <div className="text-4xl font-semibold text-white">3.8 บาท</div>
            </div>
          </div>
        </div>

        {/* Button Section */}
        {buttonChildren}
      </div>
    </div>
  );
}
