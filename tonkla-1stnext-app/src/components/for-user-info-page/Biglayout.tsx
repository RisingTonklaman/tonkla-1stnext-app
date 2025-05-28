import { FaBolt } from "react-icons/fa";
import Bottomlayout from "@/components/for-user-info-page/bottomlayout";
import Toplayout from "@/components/for-user-info-page/toplayout";

interface BiglayoutProps {
  children1: React.ReactNode;
  children2: React.ReactNode;
  buttonchildren: React.ReactNode;
}

export default function Biglayout({
  /*children1,
  children2,*/
  buttonchildren,
}: BiglayoutProps) {
  return (
    <div className="h-screen flex flex-col justify-between">
      <Toplayout topChildren={""} />

      <Bottomlayout buttonChildren={buttonchildren} />
    </div>
  );
}
