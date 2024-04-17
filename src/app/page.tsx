import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <Navbar />
    <main className="bg-[#001433]">
    <div className="md:px-24 px-5 py-32">
      <h1 className="text-white font-[Gilroy] md:leading-[80px] leading-[50px] text-center text-[33px] md:text-[64px]">Streamlined Receipts & Payments for SMEs: <span className="text-[#006FEE]">Effortless Solutions</span></h1>
      <p className="text-white text-center md:text-lg font-[Gilroy-Regular] md:mt-2 mt-3">Simplifying Receipts and Payments for Small and Medium Enterprises. Generate receipts and manage payments effortlessly. Join us for seamless financial management!</p>
    </div>
    </main>
    </>
   
  );
}
