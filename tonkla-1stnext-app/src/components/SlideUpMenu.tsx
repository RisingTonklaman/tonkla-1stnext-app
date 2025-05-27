"use client";
import React from "react";

export default function SlideUpMenu({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (v: boolean) => void;
}) {
  return (
    <div
      className={`
        fixed inset-0 z-50
        transition-all duration-700 ease-in-out
        ${
          open
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }
      `}
      onClick={() => setOpen(false)} // ✅ กดพื้นหลัง = ปิด
    >
      {/* เมนูหลัก */}
      <div
        onClick={(e) => e.stopPropagation()} // ✅ กดในเมนู = ไม่ปิด
        className={`
          absolute bottom-0 left-0 w-full
          transform transition-transform duration-700
          ${open ? "translate-y-0" : "translate-y-full"}
        `}
      >
        <div className="bg-[#0B1F30]/90 rounded-t-2xl p-4 text-white shadow-md h-[60vh] text-[20px]">
          {/* ส่วนบน */}
          <div className="h-[33%] w-full relative">
            <div className="flex flex-col justify-center h-full gap-2 px-4">
              <div className="flex flex-col items-start gap-4 ml-[10%]">
                <div className="flex items-center gap-2">
                  <picture>
                    <img
                      src="/phone-icon.png"
                      alt="Phone"
                      className="h-18 w-18 object-contain"
                    />
                  </picture>
                  <span className="text-cyan-400 text-[150%]">
                    &nbsp;: 099-999-9999
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <picture>
                    <img
                      src="/money_logo.png"
                      alt="Money"
                      className="h-18 w-18 object-contain"
                    />
                  </picture>
                  <span className="text-green-400 text-[150%]">
                    &nbsp;: 50 บาท
                  </span>
                </div>
              </div>
            </div>
            <div className="w-[90%] h-[2px] absolute bottom-0 left-1/2 -translate-x-1/2 bg-cyan-400 rounded-full shadow-[0_0_6px_#22d3ee]" />
          </div>

          {/* ส่วนกลาง */}
          <div className="h-[33%] w-full relative">
            <div className="flex flex-col justify-start h-full gap-2 px-4">
              <div className="flex flex-col items-start gap-4 ml-[10%] mt-[2%]">
                <div className="flex items-center gap-2">
                  <span className="text-white text-[150%]">ชื่อสถานี:</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-white text-[150%]">สถานะตู้:</span>
                </div>
              </div>
            </div>
            <picture>
              <img
                src="/language.png"
                alt="Language"
                className="absolute bottom-2 right-4 h-14 w-14 object-contain"
              />
            </picture>
            <div className="w-[90%] h-[2px] absolute bottom-0 left-1/2 -translate-x-1/2 bg-cyan-400 rounded-full shadow-[0_0_6px_#22d3ee]" />
          </div>

          {/* ส่วนล่าง */}
          <div className="w-full px-6 pb-6">
            <h2 className="ml-[5%] font-semibold mb-2">ติดต่อเจ้าหน้าที่</h2>
            <div className="ml-[10%]">
              <p>
                <span className="font-semibold">เบอร์โทร :</span> 0991945667
              </p>
              <p>
                <span className="font-semibold">Line :</span> เริ่มการชาร์จ
              </p>
              <p>
                <span className="font-semibold">FB:</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
