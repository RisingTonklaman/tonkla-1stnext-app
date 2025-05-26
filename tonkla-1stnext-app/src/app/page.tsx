"use client";
import { useRouter } from "next/navigation";
import { ChargeController } from "@/controllers/ChargeController";
import TitleText from "@/components/TitleText";
import StartButton from "@/components/StartButton";

const Page = () => {
  const router = useRouter();
  const controller = new ChargeController(router);

  return (
    <div className="absolute bottom-10 w-full px-6 flex flex-col items-start">
      <TitleText />
      <StartButton onClick={() => controller.startCharging()} />
    </div>
  );
};

export default Page;
