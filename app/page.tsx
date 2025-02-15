import Footer from "@/components/footer";
import Image from "next/image";

export default function Home() {
  return (
    <main className="w-full h-screen bg-secondary ">
      <div className="relative w-screen h-screen flex items-center justify-center ">
        <Image src="/office.png" fill alt="office" className="object-cover" />
        <h1 className="z-50">Test</h1>
      </div>

      <Footer />
    </main>
  );
}
