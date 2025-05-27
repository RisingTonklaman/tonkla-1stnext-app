"use client";
import { useState } from "react";
import Biglayout from "@/components/for-login-page/Biglayout";
import PhoneInputField from "@/components/for-login-page/PhoneInputField";
import RedButton from "@/components/reusecomponents/RedButton";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { setPhone as setPhoneFunction } from "@/store/features/loginSlice";

const LoginPage = () => {
  const [phone, setPhone] = useState<number | string>("");
  const dispatch = useDispatch();
  const router = useRouter();
  const LoginNumPhone = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    dispatch(setPhoneFunction(phone));
    router.push("/Auth");
  };
  const onchangetarget = () => {};

  return (
    <>
      <Biglayout
        children1={
          <PhoneInputField phone={phone} onchangetarget={onchangetarget} />
        }
        children2={
          <RedButton ButtonText="เข้าสู่ระบบ" onClick={LoginNumPhone} />
        }
      />
    </>
  );
};

export default LoginPage;
