"use client";
import { ReactNode } from "react";
interface inDiv {
  children: ReactNode;
}
export default function BackgroundLayout({ children }: inDiv) {
  return (
    <div
      className="relative h-screen w-full bg-cover bg-center"
      style={{ backgroundImage: "url('/background.png')" }}
    >
      {children}
    </div>
  );
}
