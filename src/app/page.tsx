"use client";

import { Navbar } from "@/components/layout/navbar";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="w-full h-[100vh] flex justify-center items-center">
        <div className="w-1/3 h-[600px] bg-gradient-to-r from-[#F7DBF0] to-[#FCD8D4] bg-opacity-50 rounded-2xl flex flex-col justify-start items-center my-2">
          <div className="my-8">
            <Image
              className="w-full h-auto"
              src={"/logo.png"}
              height={120}
              width={120}
              alt={""}
            />
          </div>
          <h1 className="text-4xl font-bold mb-5">Login</h1>
          <p className="text-[#C91416] mb-4">Sign into your account</p>
          <form className="flex flex-col justify-center items-center">
            <div className="mb-3">
              <input
                type="text"
                className="px-4 py-2 rounded-lg"
                placeholder="Email"
                required
              />
            </div>
            <div className="mb-6">
              <input
                type="text"
                className="px-4 py-2 rounded-lg"
                placeholder="Password"
                required
              />
            </div>
            <button
              className="px-8 py-3 bg-[#EC6453] text-white text-sm font-bold rounded-lg"
              type="submit"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
