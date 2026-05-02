"use client";

import { Cpu, ShieldCheck, Zap } from "lucide-react";
import Card from "./cardInfo";

export default function CardSection() {
  const cards = [
    {
      icon: Cpu,
      title: "AI Artifact Detection",
      description: "Built on millions of data points to spot the microscopic artifacts left by AI generation tools."
    },
    {
      icon: ShieldCheck,
      title: "Secure & Reliable",
      description: "Ensures complete data privacy and trust while verifying the authenticity of digital media."
    },
    {
      icon: Zap,
      title: "Fast Analysis",
      description: "Process videos and images in seconds with high accuracy using advanced AI."
    }
  ];

  return (
    <section className="py-20 bg-[#000814]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="text-center mb-12">
          <h3 className="text-3xl sm:text-4xl font-extrabold text-white">
            Enterprise-Grade Detection
          </h3>
          <p className="mt-4 text-blue-100/80 max-w-2xl mx-auto">
            Built on millions of data points to spot the microscopic artifacts left by AI generation tools.
          </p>
        </div>

        <div className="grid grid-cols-1 pt-5 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card, idx) => (
            <Card
              key={idx}
              icon={card.icon}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}