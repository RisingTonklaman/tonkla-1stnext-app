// components/LogoHeaderWithMenu.tsx
"use client";
import { useState } from "react";
import LogoHeader0 from "../LogoHeader0";
import SlideUpMenu from "../SlideUpMenu";

export default function LogoHeader() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <LogoHeader0 open={open} setOpen={setOpen} />
      <SlideUpMenu open={open} setOpen={setOpen} />
    </>
  );
}
