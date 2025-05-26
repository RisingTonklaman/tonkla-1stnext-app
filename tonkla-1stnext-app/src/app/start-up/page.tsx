"use client";
import { useRouter } from "next/navigation";

import RedButton from "@/components/RedButton";

const StartPage = () => {
  const onSubmit = () => {
    console.log("helloworld");
    router.push("/user-info");
  };
  const router = useRouter();

  return (
    <div className="flex items-center justify-center h-[50%] mt-[10vh]">
      <RedButton ButtonText="เริ่มชาร์จ" onClick={onSubmit} />
    </div>
  );
};

export default StartPage;
