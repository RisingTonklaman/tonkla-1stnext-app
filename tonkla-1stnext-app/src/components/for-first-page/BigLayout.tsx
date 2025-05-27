import { ReactNode } from "react";

interface children {
  children1: ReactNode;
  children2: ReactNode;
}

export default function BigLayout({ children1, children2 }: children) {
  return (
    <div className="absolute bottom-10 w-full px-6 flex flex-col items-start">
      {children1}
      {children2}
    </div>
  );
}
