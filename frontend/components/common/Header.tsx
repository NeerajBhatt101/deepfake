"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Upload", path: "/upload" },
    { name: "Report", path: "/report" },
    { name: "About", path: "/about" },
  ];

  const isActive = (path: string) => pathname === path;

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Header */}
      <header className={`sticky top-0 z-50
        backdrop-blur-md opacity-98 bg-[#000814] transition-all   duration-300 w-full border-b border-indigo-900 
        ${scrolled 
          ? "bg-[#060f1d] shadow-lg shadow-cyan-500/10 backdrop-blur-md" 
          : "bg-transparent"}`}  >
        <div className="max-w-7xl mx-auto px-4 py-5 flex justify-between items-center drop-shadow-2xl">

          {/* Logo */}
          <Link
            href="/"
            className="px-5  text-xl font-bold text-cyan-400"
          >
            DeepFake
          </Link>

          {/* Right Side */}
          <div className="flex items-center gap-3">

            {/* Desktop Navigation */}
            <div className="hidden md:flex gap-6 items-center">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  className={
                    isActive(item.path)
                      ? "text-cyan-400 font-semibold"
                      : "text-blue-200 hover:text-cyan-300 transition"
                  }
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setOpen(true)}
              className="md:hidden  text-blue-200 hover:text-cyan-400"
            >
              <Menu size={26} />
            </button>

            {/* Analyse Button */}
            <Button
              onClick={() => router.push("/upload")}
              className="bg-cyan-500 mx-10 px-6 hover:bg-cyan-400 text-gray-700"
            >
              Analyse Media
            </Button>

          </div>
        </div>
      </header>

      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setOpen(false)}
      />

      {/* Sliding Panel */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-blue-950 z-50 transform transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >

        {/* Close Button */}
        <div className="flex justify-between items-center p-4 border-b border-blue-800">
          <span className="text-cyan-400 font-bold text-lg">
            Menu
          </span>

          <button
            onClick={() => setOpen(false)}
            className="text-blue-200 hover:text-cyan-400"
          >
            <X size={24} />
          </button>
        </div>

        {/* Navigation */}
        <div className="flex flex-col p-4 gap-4">
          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              onClick={() => setOpen(false)}
              className={
                isActive(item.path)
                  ? "text-cyan-400 font-semibold"
                  : "text-blue-200 hover:text-cyan-300"
              }
            >
              {item.name}
            </Link>
          ))}

          <Button
            onClick={() => {
              router.push("/upload");
              setOpen(false);
            }}
            className="mt-4 bg-cyan-500 hover:bg-cyan-400 text-black"
          >
            Analyse Media
          </Button>
        </div>

      </div>
    </>
  );
}