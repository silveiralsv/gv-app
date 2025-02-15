import Image from "next/image";

export default function Footer() {
  return (
    <div className="relative h-96">
      <Image
        src="/footer-image.png"
        alt="logo"
        fill
        className="object-cover object-top"
      />

      <div className="relative h-40 w-[430px] mx-auto top-5">
        <Image className="z-50" src="/footer-logo.png" alt="logo" fill />
      </div>
    </div>
  );
}
