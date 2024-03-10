import FormDemo from "@/components/Form";
import { Navbar } from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <>
        <Navbar/>
        <div className="p-20">
        <FormDemo/>
        </div>
    </>
  );
}
