import LogoHeader from "@/components/Layout/LogoHeader";
import { ReactNode } from "react";

interface props {
  children: ReactNode;
}
const BackgroundLayout = ({ children }: props) => {
  return (
    <div className="relative h-screen w-full bg-[url('/background.png')] bg-cover bg-center flex flex-col justify-between">
      <LogoHeader />

      {children}
    </div>
  );
};

export default BackgroundLayout;
