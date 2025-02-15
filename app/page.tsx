import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="w-screen h-screen bg-secondary overflow-x-hidden">
      <div className="w-screen h-screen bg-green-900">Test</div>
      <div className="sticky top-0 w-screen h-screen bg-red-800-900">Test</div>

      <Footer />
    </div>
  );
}
