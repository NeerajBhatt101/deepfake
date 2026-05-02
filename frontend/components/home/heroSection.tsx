"use client";

import { ArrowRight, Brain } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="relative flex flex-1 w-full py-15 sm:py-36">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div
          className="
        w-[600px] h-[600px]
        bg-cyan-500/25
        rounded-full
        blur-[140px]
      "
        />
      </div>
      {/* Background glow */}

      {/* Glass Card */}
      <div className="relative mx-auto max-w-7xl px-5">
        {/* Icon */}
        <div
          className="
      flex items-center justify-center w-16 h-16
      md:w-20 md:h-20 mx-auto mb-6
      rounded-2xl
      bg-cyan-400/10
      border border-cyan-400/30
      shadow-lg shadow-cyan-500/20
    "
        >
          <Brain className="w-10 h-10 md:h-12 md:w-12 text-cyan-500 animate-pulse" />
        </div>

        {/* Heading */}
        <h1
          className="
      text-3xl sm:text-5xl md:text-7xl
      font-bold
      tracking-tight
      leading-tight
     text-center
    "
        >
          <span
            className="bg-gradient-to-r
  from-gray-400
  via-gray-100
  to-gray-400
  bg-clip-text
  text-transparent"
          >
            Uncover the Truth Behind
          </span>
          <br />
          <span
            className="bg-gradient-to-r
  from-blue-600
  via-purple-500
  to-cyan-600
  bg-clip-text
  text-transparent"
          >
            Digital Media
          </span>
        </h1>

        {/* Description */}
        <p
          className="
      mt-6
      text-blue-100/80
      text-base sm:text-lg md:text-xl
      tracking-widest
     
      max-w-2xl mx-auto text-center
    "
        >
          Instantly detect deepfake videos and images using advanced AI. Verify
          authenticity, prevent misinformation, and trust every piece of digital
          content.
        </p>

        {/* Buttons */}
        <div
          className="
      mt-8
      flex flex-col sm:flex-row
      gap-6
      justify-center
      items-center
    "
        >
          <Link href="/upload" className="w-full sm:w-auto">
            <Button
              size="lg"
              className="
             w-full sm:w-auto
    px-10 py-6
    text-base font-semibold
    bg-cyan-500
    hover:bg-cyan-400
    text-black
    shadow-lg shadow-cyan-500/30
    hover:shadow-cyan-400/40
    transition-all duration-300
    flex items-center justify-center gap-2
    transform hover:-translate-y-1
          "
            >
              Start Analysis
              <ArrowRight className="w-5 h-5 text-black transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
          </Link>

          <Link href="/how-it-works" className="w-full sm:w-auto">
            <Button
              variant="outline"
              size="lg"
              className="
            w-full sm:w-auto
            px-10 py-6
            text-base font-semibold
            border-cyan-400/40
            text-cyan-300
            hover:bg-cyan-400/10
            hover:border-cyan-300
            transition-all duration-300
          "
            >
              How It Works
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
