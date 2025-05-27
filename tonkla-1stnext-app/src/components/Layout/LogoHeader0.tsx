// components/LogoHeader.tsx
"use client";
import Image from "next/image";

export default function LogoHeader0({
  setOpen,
  open,
}: {
  setOpen: (value: boolean) => void;
  open: boolean;
}) {
  return (
    <div className="flex justify-between items-center p-4">
      <div className="w-18 h-18 relative">
        <Image src="/logo.png" alt="Logo" fill className="object-contain" />
      </div>
      <button className="w-8 h-8 relative" onClick={() => setOpen(!open)}>
        <Image src="/menu.png" alt="Menu" fill className="object-contain" />
      </button>
    </div>
  );
}
