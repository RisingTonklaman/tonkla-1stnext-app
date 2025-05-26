"use client";
export default function BackgroundLayout({ children }) {
  return (
    <div
      className="relative h-screen w-full bg-cover bg-center"
      style={{ backgroundImage: "url('/background.png')" }}
    >
      {children}
    </div>
  );
}
