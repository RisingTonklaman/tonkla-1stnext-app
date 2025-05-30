"use client";
import Biglayout from "@/components/for-auth-page/BigLayout";
import LoadingOverlay from "@/components/for-auth-page/LoadingOverlay";
import { useState, useEffect } from "react";
import { OTPInputGroup } from "@/components/for-auth-page/OTPInputGroup";
import RedButton from "@/components/reusecomponents/RedButton";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/store/store";
import { useRouter } from "next/navigation";
import { apiPost } from "@/services/apiService";
import { setAuth } from "@/store/features/authSlice";

const AuthPage = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const phone = useSelector((state: RootState) => state.login.phone);
  const [otpDigits, setOtpDigits] = useState<string[]>(["", "", "", ""]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!phone) {
      router.replace("/login"); // เปลี่ยนเส้นทางทันทีแบบไม่ให้กด back กลับมาได้
    }
  }, [phone, router]);

  const handleOtpChange = (index: number, value: string) => {
    const updated = [...otpDigits];
    updated[index] = value;
    setOtpDigits(updated);
  };

  const onSubmit = async () => {
    setIsLoading(true); // ✅ เริ่มโหลด

    const password = otpDigits.join(""); // รวม OTP เป็น password
    console.log("Phone:", phone);
    console.log("Password (OTP):", password);

    const response = await apiPost<any>("/user/login", { phone, password });

    if (
      response.status === 200 &&
      response.data?.message === "Login successfully"
    ) {
      // console.log(response.data);
      dispatch(setAuth(response.data));
      router.replace("/start-up");
    } else {
      console.log("เกิดข้อผิดพลาดสเตตัส:", response.status_error);
      console.log("เกิดข้อผิดพลาด:", response.message_error);
    }
    setIsLoading(false); // ✅ จบโหลด
  };

  return (
    <>
      <LoadingOverlay isLoading={isLoading} />
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
