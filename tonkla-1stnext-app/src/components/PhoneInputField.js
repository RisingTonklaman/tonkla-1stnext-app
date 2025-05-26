"use client";
import Image from "next/image";
import { useRef } from "react";


export default function PhoneInputField({ phone, onChange }) {
  return (
    <div className="flex items-center border-2 border-cyan-400 bg-gray-200 rounded-[20px] w-[350px] h-16 mx-auto overflow-hidden shadow-[4px_4px_8px_rgba(0,0,0,0.3)]">
      <div className="relative flex items-center justify-center w-12 h-12 rounded-full ml-2">
        <Image src="/phone-icon.png" alt="Phone" fill className="object-contain" />
      </div>
      <div className="h-8 w-px bg-cyan-400 mx-3" />
      <input
        type="tel"
        placeholder="เบอร์โทรศัพท์"
        className="flex-1 bg-gray-200 py-4 pr-4 outline-none text-base placeholder:text-gray-500"
        value={phone}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}



export function TextBox({ className = "", width = "w-[350px]", height = "h-16", inputRef, ...props }) {
  return (
    <div
      className={`flex items-center border-2 border-cyan-400 bg-gray-200 rounded-[20px] 
        ${width} ${height} mx-auto overflow-hidden shadow-[4px_4px_8px_rgba(0,0,0,0.3)] ${className}`}
    >
      <input
        ref={inputRef}
        //className="flex-1 bg-gray-200 py-4 pr-4 outline-none text-center text-base placeholder:text-gray-500"
          className="flex-1 h-full bg-gray-200 text-center text-2xl py-0 px-2 outline-none placeholder:text-gray-500"

        {...props}
      />
    </div>
  );
}
export function AutoTextBoxRow({ count = 4, height = "h-16", gapRatio = 0.25, ...props }) {
  if (count < 1) return null;

  const boxWidthPercent = 100 / (count + (count - 1) * gapRatio);

  return (
    <div className="flex justify-center items-center w-full px-4">
      {[...Array(count)].map((_, index) => (
        <div
          key={index}
          style={{
            width: `${boxWidthPercent}%`,
            marginRight: index !== count - 1 ? `${boxWidthPercent * gapRatio}%` : 0,
          }}
        >
          <TextBox
            height={height}
            width=""
            className="text-center text-2xl"
            maxLength={1}
            {...props}
          />
        </div>
      ))}
    </div>
  );
}


export function FixedTextBoxRow({
  count = 4,
  width = "w-[60px]",
  height = "h-16",
  gapPx = 4,
  inputClassName = "",
  onChange = () => {},
  ...props
}) {
  const inputRefs = useRef([]);

  return (
    <div className="flex justify-center items-center">
      {[...Array(count)].map((_, index) => (
        <div
          key={index}
          style={{ marginRight: index !== count - 1 ? `${gapPx}px` : 0 }}
        >
          <TextBox
            inputRef={(el) => (inputRefs.current[index] = el)}
            width={width}
            height={height}
            className={`text-center text-2xl ${inputClassName}`}
            maxLength={1}
            onChange={(e) => {
              onChange(e, index);
              // ถ้ามีค่าถึง 1 ตัว ให้ไปช่องถัดไป
              if (e.target.value.length === 1 && index < count - 1) {
                inputRefs.current[index + 1]?.focus();
              }
            }}
            {...props}
          />
        </div>
      ))}
    </div>
  );
}



