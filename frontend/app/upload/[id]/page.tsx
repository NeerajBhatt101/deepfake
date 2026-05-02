"use client";

import { useSearchParams, useRouter } from "next/navigation";
import {
  ShieldCheck,
  ArrowLeft,
  TriangleAlert,
  Info,
  Share2,
  Download,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/common/Header";

export default function ReportPage() {
  const searchParams = useSearchParams();
  const router = useRouter();

  // Read query params from upload page
  const reportId = searchParams.get("id") ?? "N/A";
  const fileName = searchParams.get("fileName") ?? "Unknown file";
  
  const statusParam = searchParams.get("status");
  const status = statusParam === "fake" ? "fake" : "real";
  
  const percentage = Number(searchParams.get("percentage") ?? 0);

  // Corrected logic: status string -> boolean
  const isReal = status === "real";

  return (
    <main className="flex w-full flex-col items-center bg-[#000814] text-white min-h-screen p-6">
      {/* Header */}
      <Header />

      {/* Back Button */}
      <div className="w-full max-w-4xl mb-8 py-16">
        <p
          onClick={() => router.push("/upload")}
          className="text-gray-400 text-lg cursor-pointer mb-6 hover:text-gray-100 flex gap-1 font-semibold items-center px-3 group"
        >
          <ArrowLeft
            size={20}
            className="transition-transform duration-300 group-hover:-translate-x-1"
          />
          Back to Upload
        </p>
      </div>

      {/* Report Container */}
      <div className="w-full max-w-4xl flex flex-col md:flex-row rounded-3xl shadow-lg shadow-[#000000]/30 border border-gray-800/80">
        {/* Left Side */}
        <div
          className={`flex flex-col py-18 md:py-15 rounded-tl-3xl rounded-bl-2xl items-center gap-4 md:w-1/2 pr-6 ${
            isReal ? "bg-[#0A1020]" : "bg-[#211426]"
          }`}
        >
          {/* Circle with percentage */}
          <div
            className={`w-40 h-40 rounded-full flex items-center justify-center text-2xl font-bold shadow-[0_0_25px_rgba(0,0,0,0.6)] ${
              isReal
                ? "border-12 border-green-500 bg-[#0A1020] shadow-green-500/40"
                : "border-12 border-red-500 shadow-red-500/40"
            }`}
            style={{
              boxShadow:
                "0 0 25px rgba(0,0,0,0.6), inset 0 0 20px rgba(0,0,0,0.7)",
            }}
          >
            <p className="font-black text-4xl text-gray-100">{percentage}%</p>
          </div>

          {/* Shield icon and status */}
          <div className="flex items-center gap-3 mt-4">
            {isReal ? (
              <ShieldCheck className="w-8 h-8 text-green-500" />
            ) : (
              <TriangleAlert className="w-8 h-8 text-red-500" />
            )}
            <span
              className={`font-semibold text-3xl ${
                isReal ? "text-blue-100" : "text-blue-100"
              }`}
            >
              {isReal ? "Real" : "Fake"}
            </span>
          </div>

          {/* Explanation paragraph */}
          <p className="text-blue-200/80 text-center tracking-wide mt-3 px-10">
            {isReal
              ? "No significant artifacts of manipulation were found. The media appears authentic."
              : "Our neural network detected strong indicators of synthetic manipulation."}
          </p>
        </div>

        {/* Right Side */}
        <div className="flex flex-col gap-4 md:w-1/2 p-8">
          <div className="flex flex-row gap-2 ">
            <Info size={24} className="text-blue-500/80 mt-1" />
            <h2 className="text-xl text-blue-100 font-semibold mb-6">
              Analysis Details
            </h2>
          </div>
          <div className="flex flex-col gap-4 text-blue-200/80 text-sm">
            <div className="border flex flex-row p-4 items-center border-blue-200/20 rounded-xl bg-[#12172A] justify-between">
              <span className="font-semibold text-blue-200/60">Report ID:</span>
              <span className="text-blue-200 font-semibold ">{reportId}</span>
            </div>

            <div className="border flex flex-row p-4 items-center border-blue-200/20 rounded-xl bg-[#12172A] justify-between">
              <span className="font-semibold text-blue-200/60">File Name:</span>
              <span className="text-blue-200 font-semibold ">{fileName}</span>
            </div>

            <div className="border flex flex-row px-4 py-3 items-center border-blue-200/20 rounded-xl bg-[#12172A] justify-between">
              <span className="font-semibold text-blue-200/60">Status:</span>
              <span className="text-blue-500 text-lg font-semibold tracking-wide">
                Completed
              </span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex w-full flex-col sm:flex-row gap-4 mt-5">
            <Button className="flex-1 h-auto border border-blue-200/20 bg-[#12172A] rounded-xl py-4 hover:bg-[#1A2036] flex items-center justify-center gap-2">
              <Share2 size={20} />
              Share Report
            </Button>

            <Button className="flex-1 h-auto border border-blue-200/20 rounded-xl py-4 bg-[#585af3] hover:bg-[#5669f3] flex items-center justify-center gap-2">
              <Download size={20} />
              PDF Cert
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}