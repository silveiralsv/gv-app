"use client";
import { IoLogoWhatsapp } from "react-icons/io";
import { Button } from "./ui/button";

export default function WhatsappButton() {
  const handleOnclick = () => {
    window.open("https://wa.me/5511952242504", "_blank");
  };

  return (
    <Button
      className="w-16 h-16 fixed bottom-5 right-5 z-50 flex items-center justify-center bg-white/80 gap-0 hover:bg-white"
      size="icon"
      onClick={handleOnclick}
    >
      <IoLogoWhatsapp
        className="fill-green-500 "
        style={{ width: "85%", height: "85%" }}
      />
    </Button>
  );
}
