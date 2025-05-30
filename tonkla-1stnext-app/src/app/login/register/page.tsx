"use client";
import { useState } from "react";
import RedButton from "@/components/reusecomponents/RedButton";
import InputPassword from "@/components/for-register/InputPassword";
import BigLayout from "@/components/for-register/BigLayout";

export default function Page() {
  const [value, setValue] = useState("");

  return (
    <BigLayout>
      <InputPassword value={value} setValue={setValue} />
      <RedButton
        ButtonText="ระบุรหัสผ่านเป็นตัวเลข 4 ตัว"
        style="w-full bg-red-500 text-white py-2 rounded-2xl font-bold hover:bg-red-600 transition mt-8"
        onClick={() => {
          console.log("Password:", value);
        }}
      />
    </BigLayout>
  );
}
