"use client";
export default function StartButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="mt-6 w-full bg-white text-black font-bold text-xl py-3 rounded-xl shadow"
    >
      เริ่มการชาร์จ
    </button>
  );
}
