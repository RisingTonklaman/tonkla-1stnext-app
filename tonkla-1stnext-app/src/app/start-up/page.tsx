"use client";
import { useRouter } from "next/navigation";
import Biglayout from "@/components/for-start-up/Biglayout";
import RedButton from "@/components/reusecomponents/RedButton";

const StartPage = () => {
  const onSubmit = () => {
    console.log("helloworld");
    router.push("/user-info");
  };
  const router = useRouter();

  return (
    <Biglayout
      children={<RedButton ButtonText="เริ่มชาร์จ" onClick={onSubmit} />}
    />
  );
};

export default StartPage;
