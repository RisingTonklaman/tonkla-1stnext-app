"use client";
import React from "react";
import RedButton from "@/components/reusecomponents/RedButton";
import Biglayout from "@/components/for-user-info-page/Biglayout";

export default function ChargingSession() {
  return (
    <>
      <Biglayout
        buttonchildren={
          <div className="w-[350px] h-[54px] mx-auto">
            <RedButton
              ButtonText="หยุดการชาร์จ"
              onClick={() => console.log("hello tonklaman")}
            />
          </div>
        }
      />
    </>
  );
}
