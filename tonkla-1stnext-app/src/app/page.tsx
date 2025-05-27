"use client";
import BigLayout from "@/components/for-first-page/BigLayout";
import TitleText from "@/components/for-first-page/TitleText";
import StartButton from "@/components/for-first-page/StartButton";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();

  const toLogin = () => {
    router.push("/login");
  };
  return (
    <BigLayout
      children1={<TitleText />}
      children2={<StartButton text="เริ่มการชาร์จ" onClick={toLogin} />}
    />
  );
};

export default Page;
