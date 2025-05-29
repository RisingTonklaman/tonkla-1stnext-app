import { FaBolt } from "react-icons/fa";
import React from "react";

interface TopLayoutProps {
  topChildren: React.ReactNode;
}

export default function TopLayout({ topChildren }: TopLayoutProps) {
  return (
    <div className="flex justify-center items-center h-[45vh]">
      <div className="relative w-[200px] h-[200px]">
        {/* วงกลมสีฟ้านอกสุด + เจาะรูด้วย mask */}
        <svg
          width="238"
          height="238"
          className="absolute -top-[19px] -left-[19px] z-10 animate-spin-slow"
        >
          <defs>
            <mask id="circle-hole-mask">
              <rect width="100%" height="100%" fill="white" />
              <circle cx="119" cy="119" r="106" fill="black" />
            </mask>

            <radialGradient id="circle-gradient" cx="0%" cy="0%" r="100%">
              <stop offset="0%" stopColor="#4afffc" />
              <stop offset="100%" stopColor="#0d2b2b" />
            </radialGradient>
          </defs>

          <circle
            cx="119"
            cy="119"
            r="119"
            fill="url(#circle-gradient)"
            mask="url(#circle-hole-mask)"
          />
        </svg>

        {/* วงในดำ */}
        <div className="relative z-20 w-full h-full bg-gradient-to-r from-[#003028] to-black rounded-full flex flex-col items-center justify-center">
          <FaBolt className="text-cyan-400 text-[32px] mb-1" />
          <div className="text-cyan-400 text-[25px] font-semibold">70%</div>
          <div className="text-white text-[50px] font-bold leading-tight">
            500
          </div>
          <div className="text-white text-[20px]">km</div>
        </div>
      </div>

      {/* ส่วนที่รับ topChildren */}
      {topChildren && (
        <div className="absolute top-4 right-4">{topChildren}</div>
      )}
    </div>
  );
}
