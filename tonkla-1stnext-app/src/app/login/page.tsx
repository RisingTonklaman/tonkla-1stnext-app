"use client";
import { useState } from "react";
import Biglayout from "@/components/for-login-page/Biglayout";
import PhoneInputField from "@/components/for-login-page/PhoneInputField";
import RedButton from "@/components/reusecomponents/RedButton";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { setPhone as setPhoneFunction } from "@/store/features/loginSlice";
import { apiGet } from "@/services/apiService";

const LoginPage = () => {
  const [phone, setPhone] = useState<number | string>("");
  const dispatch = useDispatch();
  const router = useRouter();
  const LoginNumPhone = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    dispatch(setPhoneFunction(phone));
    handleSubmit();
    //router.push("/Auth");
  };
  const onchangetarget = (e: any) => {
    setPhone(e.target.value);
  };

  const handleSubmit = async () => {
    try {
      const response = await apiGet(`/user/findUser/${phone}`);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  //console.log(phone);
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
