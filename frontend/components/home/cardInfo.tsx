"use client";

import {Card, CardContent } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface InfoCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function CardInfo({ icon: Icon, title, description }: InfoCardProps) {
  return (
    <Card className="bg-[#09162a] border border-cyan-400/20 shadow-lg shadow-cyan-500/10 hover:shadow-cyan-400/30 transition-all duration-300 rounded-xl p-6 flex flex-col gap-5 pb-15">
      
    {/* Icon top-left */}
    <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-cyan-400/10 border border-cyan-400/30 shadow-lg shadow-cyan-500/20">
      <Icon className="w-10 h-10 text-cyan-500 animate-pulse" />
    </div>

    {/* Title */}
    <h4 className="text-xl font-semibold text-white">{title}</h4>

    {/* Description */}
    <CardContent className="p-0 text-blue-100/80 text-sm sm:text-base">
      {description}
    </CardContent>
  </Card>
  );
}