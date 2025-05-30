"use client";
import { useState } from "react";
import Biglayout from "@/components/for-login-page/Biglayout";
import PhoneInputField from "@/components/for-login-page/PhoneInputField";
import RedButton from "@/components/reusecomponents/RedButton";
import { useRouter, redirect } from "next/navigation";
import { useDispatch } from "react-redux";
import { setPhone as setPhoneFunction } from "@/store/features/loginSlice";
import { apiGet } from "@/services/apiService";

const LoginPage = () => {
  const [phone, setPhone] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const dispatch = useDispatch();
  const router = useRouter();

  const onchangetarget = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (/^\d{0,10}$/.test(value)) {
      setPhone(value);
      setError(null); // reset error on typing
    }
  };

  const LoginNumPhone = async (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (phone.length < 10) {
      setError("คุณควรกรอกให้ครบ 10 ตัว");
      return;
    }

    dispatch(setPhoneFunction(phone));
    setError(null);
    const response = await apiGet<any>(`/user/findUser/${phone}`);
    if (response.status === 200 && response.data?.message === "user found") {
      redirect("/Auth");
      console.log("hello world");
    } else {
      console.log("เกิดข้อผิดพลาดสเตตัส:", response.error2);
      console.log("เกิดข้อผิดพลาด:", response.error1);
    }
  };

  return (
    <Biglayout
      children1={
        <PhoneInputField
          phone={phone}
          onchangetarget={onchangetarget}
          errorMessage={error}
        />
      }
      children2={<RedButton ButtonText="เข้าสู่ระบบ" onClick={LoginNumPhone} />}
    />
  );
};

export default LoginPage;
