"use client";
import Image from "next/image";
interface value {
  phone: number | string;
  onChange: Function;
}

export default function PhoneInputField({ phone, onChange }: value) {
  return (
    <div className="flex items-center border-2 border-cyan-400 bg-gray-200 rounded-[20px] w-[350px] h-16 mx-auto overflow-hidden shadow-[4px_4px_8px_rgba(0,0,0,0.3)]">
      <div className="relative flex items-center justify-center w-12 h-12 rounded-full ml-2">
        <Image
          src="/phone-icon.png"
          alt="Phone"
          fill
          className="object-contain"
        />
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
