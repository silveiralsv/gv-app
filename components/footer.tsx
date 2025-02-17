import Image from "next/image";
import { MdMailOutline } from "react-icons/md";

export default function Footer() {
  return (
    <div className="relative aspect-auto flex flex-col gap-16 py-10">
      <Image
        src="/footer-image.png"
        alt="logo"
        fill
        className="object-cover object-top z-40"
      />

      <div className="relative h-20 md:h-52  mx-auto top-5 aspect-[2351/977]">
        <Image className="z-50" src="/footer-logo.png" alt="logo" fill />
      </div>
      <div className="z-40 relative w-full flex items-center justify-center text-xs">
        <FooterItem>
          <MdMailOutline />
          contato@gheorghiuvieira.com
        </FooterItem>
      </div>
    </div>
  );
}

type FooterItemProps = React.PropsWithChildren;
function FooterItem({ children }: FooterItemProps) {
  return (
    <p className="text-white/80 text-sm flex gap-2 items-center">{children}</p>
  );
}
