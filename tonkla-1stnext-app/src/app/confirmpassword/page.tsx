"use client";
import { useState, ChangeEvent } from "react";
import ConfirmPasswordInputGroup from "@/components/ConfirmPasswordInputGroup";

export default function ConfirmPasswordPage() {
  const [inputConfirmPassword, setInputConfirmPassword] = useState({
    username: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputConfirmPassword({
      ...inputConfirmPassword,
      [event.target.name]: event.target.value,
    });

    console.log(event);
  };

  return (
    <>
      <form className="text-center px-6 mt-120">
        <h2
          className="text-2xl sm:text-3xl font-bold text-blue-900 mb-1"
          style={{ textShadow: "1px 1px 2px rgba(0,0,0,0.3)" }}
        >
          สวัสดี, {inputConfirmPassword.username || "ผู้ใช้ใหม่"}
        </h2>
        <p
          className="text-base text-blue-800 mb-6 drop-shadow-sm"
          style={{ textShadow: "1px 1px 2px rgba(0,0,0,0.3)" }}
        >
          กรุณาตั้งรหัสผ่านของคุณ
        </p>
        <ConfirmPasswordInputGroup handleChange={handleChange} />
      </form>
    </>
  );
}
