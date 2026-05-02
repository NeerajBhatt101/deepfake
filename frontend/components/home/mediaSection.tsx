"use client";

import { Button } from "@/components/ui/button";
import {CloudUpload } from "lucide-react";
import Link from "next/link";

export default function UploadMediaSection() {
  return (
    <section className="relative py-25 bg-[#000814] overflow-hidden ">

    

      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center py-25">

        {/* Glass Card */}
        <div className="
          backdrop-blur-xl
          bg-white/5
          border border-cyan-400/20
          shadow-[0_0_10px_rgba(34,211,238,0.15)]
          rounded-2xl
          p-10 sm:p-14 flex flex-col items-center justify-center 
        ">

          {/* Icon */}
          <div className="
            flex items-center justify-center
            w-16 h-16 mx-auto mb-6
            rounded-2xl
            
          ">
            <CloudUpload className="w-15 h-15 text-blue-500" />
          </div>

          {/* Heading */}
          <h2 className="
            text-3xl sm:text-4xl
            font-extrabold
            text-blue-200
          ">
            Ready to Verify Your Media?
          </h2>

          {/* Description */}
          <p className="mt-6 text-blue-200/60 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
            Upload any image or video file. Our AI will analyze it and provide
            a detailed forensic authenticity report in seconds.
          </p>

          {/* Button */}
          <div className="mt-8">
            <Link href="/upload">
              <Button
                size="lg"
                className="
                  group
                  px-8 py-6
                  text-lg font-semibold
                  tracking-tight
                  bg-blue-200
                  hover:bg-gray-400
                  text-gray-900
                  shadow-lg shadow-cyan-500/30
                  hover:shadow-cyan-400/40
                  transition-all duration-300
                  transform hover:-translate-y-1
                  flex items-center gap-2
                "
              >
                Upload Media Now
                
              </Button>
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
}