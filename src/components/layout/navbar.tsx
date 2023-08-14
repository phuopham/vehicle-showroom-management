"use client";

import { MainNav } from "@/components/layout/main-nav";
import { redirect } from "next/navigation";

export const Navbar = async () => {
  return (
    <div className="border-b mx-8 border-[#000000] absolute top-0 right-0 left-0">
      <div className="flex h-14 items-center px-4">
        <div className="ml-auto flex items-center space-x-4">toggle</div>
      </div>
    </div>
  );
};
