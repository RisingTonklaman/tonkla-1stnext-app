"use client";

interface StartButtonProps {
  onClick: () => void;
  text: string;
}
export default function StartButton({ onClick, text }: StartButtonProps) {
  return (
    <button
      onClick={onClick}
      className="mt-6 w-full bg-white text-black font-bold text-xl py-3 rounded-xl shadow cursor-pointer"
    >
      {text}
    </button>
  );
}
