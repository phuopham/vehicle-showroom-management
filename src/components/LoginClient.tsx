import { useState } from "react";
import { useRouter } from "next/router";
import { Navbar } from "@/components/layout/navbar";
import Image from "next/image";
import axios from "axios";

export const LoginClient = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  
  const router = useRouter();
  const baseApi = "http://localhost:5152";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const requestData = {
      userEmail: email,
      userPassword: password,
    };

    axios
      .post(`${baseApi}/Auth/signin`, requestData)
      .then((response) => {
        if (response.status === 200) {
          router.push("/dashboard");
        } else {
          // Handle other status codes if needed
        }
      })
      .catch((err) => {
        setError("Invalid credentials. Please try again.");
      });
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
              alt="Logo"
            />
          </div>
          <h1 className="text-4xl font-bold mb-5">Login</h1>
          <p className="text-[#C91416] mb-4">Sign into your account</p>
          <form className="flex flex-col justify-center items-center" onSubmit={handleSubmit}>
            {/* Input fields */}
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
};
