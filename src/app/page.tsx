'use client'
import { useRouter } from "next/router";
import { Navbar } from "@/components/layout/navbar";
import Image from "next/image";
import { useState,useEffect } from "react";
import axios from "axios";
export default function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const baseApi = "http://localhost:5152"
  // email admin, password 123456
  interface LoginRequest {
    userEmail: string;
    userPassword: string;
  }
  interface LoginResponse {
    userId: string;
    userEmail: string;
    userFirstName: string;
    userLastName: string;
  }
  

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const requestData: LoginRequest = {
        userEmail: email,
        userPassword: password,
      };
      const response = await axios.post(`${baseApi}/Auth/signin`, requestData);
        if(response.status ==200){
          console.log("status==","200")
        }else{

        }

    } catch (err) {
      setError("Invalid credentials. Please try again.");
    }
  };
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
          <form className="flex flex-col justify-center items-center"  onSubmit={handleSubmit}>
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
          {error && <p className="text-red-500">{error}</p>}
        </div>
      </div>
    </>
  );
}
