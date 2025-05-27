"use client";
import { useRef } from "react";

interface OTPInputGroupProps {
  values: string[];
  onChange: (index: number, value: string) => void;
}

export const OTPInputGroup = ({ values, onChange }: OTPInputGroupProps) => {
  const inputsRef = useRef<(HTMLInputElement | null)[]>([]);
  const handleInputChange = (
    index: number,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = e.target.value.replace(/\D/g, "").slice(-1);
    onChange(index, value);

    if (value && index < values.length - 1) {
      inputsRef.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (
    index: number,
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (e.key === "Backspace" && !values[index] && index > 0) {
      inputsRef.current[index - 1]?.focus();
    }
    if (e.key === "ArrowLeft" && index > 0) {
      inputsRef.current[index - 1]?.focus();
    }
    if (e.key === "ArrowRight" && index < values.length - 1) {
      inputsRef.current[index + 1]?.focus();
    }
  };

  console.log(values);
  return (
    <div className="flex justify-center">
      {values.map((digit, index) => (
        <input
          key={index}
          ref={(el: HTMLInputElement | null) => {
            inputsRef.current[index] = el;
          }}
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
