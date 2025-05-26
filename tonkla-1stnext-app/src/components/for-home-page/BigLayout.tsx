import React, { ReactNode } from "react";

interface BigLayoutProps {
  children: ReactNode;
}

export default function BigLayout({ children }: BigLayoutProps) {
  return (
    <div className="absolute bottom-10 w-full px-6 flex flex-col items-start">
      {children}
    </div>
  );
}
