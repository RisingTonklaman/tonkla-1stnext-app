"use client";
import Biglayout from "@/components/for-auth-page/BigLayout";
import { useState } from "react";
import { OTPInputGroup } from "@/components/for-auth-page/OTPInputGroup";
import RedButton from "@/components/reusecomponents/RedButton";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

const AuthPage = () => {
  const phone = useSelector((state: RootState) => state.login.phone);
  const [otpDigits, setOtpDigits] = useState<string[]>(["", "", "", ""]);

  const handleOtpChange = (index: number, value: string) => {
    const updated = [...otpDigits];
    updated[index] = value;
    setOtpDigits(updated);
  };

  const onSubmit = () => {
    // const code = otpDigits.join("");
    // console.log("Submit code:", code);
    console.log("hello world");
  };

  return (
    <>
      <Biglayout
        phone={phone}
        children1={
          <OTPInputGroup values={otpDigits} onChange={handleOtpChange} />
        }
        children2={<RedButton ButtonText="ถัดไป" onClick={onSubmit} />}
      />
    </>
  );
};

export default AuthPage;
