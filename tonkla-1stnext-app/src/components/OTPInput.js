// components/OTPInputGroup.jsx
"use client";
import { useRef } from "react";

export const OTPInputGroup = ({ values, onChange }) => {
  const inputsRef = useRef([]);

  const handleInputChange = (index, e) => {
    const value = e.target.value.slice(-1); // รับแค่ตัวสุดท้าย
    onChange(index, value);

    // โฟกัสช่องถัดไปอัตโนมัติ
    if (value && index < 3) {
      inputsRef.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && !values[index] && index > 0) {
      inputsRef.current[index - 1]?.focus();
    }
  };

  return (
    <div className="flex justify-center  mb-6">
      {values.map((digit, index) => (
        <input
          key={index}
          ref={(el) => (inputsRef.current[index] = el)}
          type="tel"
          inputMode="numeric"
          maxLength={1}
          value={digit}
          onChange={(e) => handleInputChange(index, e)}
          onKeyDown={(e) => handleKeyDown(index, e)}
  className="w-16 h-16 mt-3 bg-gray-200 text-center text-2xl border-2 border-cyan-400 rounded-2xl outline-none placeholder:text-gray-500 mx-[5px]"
        />
      ))}
    </div>
  );
};
