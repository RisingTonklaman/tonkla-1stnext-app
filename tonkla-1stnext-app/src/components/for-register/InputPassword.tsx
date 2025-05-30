"use client";
import useDigitInput from "react-digit-input";

interface PasswordProps {
  value: string;
  setValue: (value: string) => void;
}

export default function InputPassword({ value, setValue }: PasswordProps) {
  const digits = useDigitInput({
    acceptedCharacters: /^[0-9]$/,
    length: 4,
    value,
    onChange: setValue,
  });

  return (
    <div className="flex gap-3 mb-4 mt-8">
      {digits.map((digitProps, idx) => (
        <input
          key={idx}
          {...digitProps}
          inputMode="decimal"
          className="w-12 h-12 border-2 border-blue-400 rounded-lg text-center text-xl focus:outline-none focus:border-blue-600"
        />
      ))}
    </div>
  );
}
