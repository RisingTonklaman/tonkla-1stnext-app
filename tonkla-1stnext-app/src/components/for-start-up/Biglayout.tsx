import { ReactNode } from "react";
interface inDiv {
  children: ReactNode;
}
export default function Biglayout({ children }: inDiv) {
  return (
    <>
      <div className="flex items-center justify-center h-[50%] mt-[10vh]">
        {children}
      </div>
    </>
  );
}
