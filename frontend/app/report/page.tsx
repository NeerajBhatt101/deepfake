"use client";

import React, { useState, useRef } from "react";
import Header from "@/components/common/Header";
import { MessageCircle, MessageSquare, Paperclip } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export default function ReportPage() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState<File | null>(null);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleAttachClick = () => {
    fileInputRef.current?.click();
  };

  const handleSubmit = () => {
    if (!fullName || !email || !subject || !description) {
      toast.error("Please fill in all required fields.");
      return;
    }

    // Placeholder for backend API call
    toast.success("Report submitted successfully!");
    // Reset form
    setFullName("");
    setEmail("");
    setSubject("");
    setDescription("");
    setFile(null);
  };

  return (
    <main className="flex flex-col min-h-screen w-full bg-[#000814] text-white">
      {/* Header */}
      <Header />

      {/* Intro Section */}
      {/* <section className="flex flex-col items-center text-center py-16 px-4 sm:px-6 lg:px-8"> 
        <MessageSquare  size={38} className="text-blue-400 mb-4" />
        <h1 className="text-3xl font-bold mb-3">Report an Issue</h1>
        <p className="text-blue-200 max-w-xl">
          Encountered a false positive? Found harmful content? Let our trust and
          safety team know so we can improve our models.
        </p>
      </section> */}

<section className="flex flex-col items-center text-center py-16 px-4 sm:px-6 lg:px-8">
  {/* Icon with glowing square */}
  <div className="w-14 h-14 mb-4 flex items-center justify-center 
                  border-1 border-cyan-400/30 rounded-2xl
                  bg-cyan-600/10
                  ">
    <MessageSquare size={24} className="text-cyan-500/80 font-bold " />
  </div>

  <h1 className="text-4xl font-bold mb-3 text-gray-100">Report an Issue</h1>
  <p className="text-gray-500 max-w-xl">
    Encountered a false positive? Found harmful content? Let our trust and
    safety team know so we can improve our models.
  </p>
</section>

      {/* Report Form */}
      <section className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="flex flex-col gap-6 bg-[#0d1424] p-8 rounded-3xl shadow-lg shadow-[#000000]/30 border border-gray-800/70">
          {/* Full Name and Email */}
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 flex flex-col">
              <label className="text-sm text-blue-200 mb-1">Full Name</label>
              <input
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="Your full name"
                className="bg-[#12172A] border border-gray-700 rounded-xl p-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="flex-1 flex flex-col">
              <label className="text-sm text-blue-200 mb-1">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="bg-[#12172A] border border-gray-700 rounded-xl p-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Subject */}
          <div className="flex flex-col">
            <label className="text-sm text-blue-200 mb-1">Subject</label>
            <input
              type="text"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              placeholder="Briefly summarize the issue"
              className="bg-[#12172A] border border-gray-700 rounded-xl p-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Detailed Description */}
          <div className="flex flex-col">
            <label className="text-sm text-blue-200 mb-1">Description</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Provide a detailed description of the issue"
              rows={5}
              className="bg-[#12172A] border border-gray-700 rounded-xl p-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
            />
          </div>

          {/* File Upload */}
          <div
            onClick={handleAttachClick}
            className="relative cursor-pointer flex flex-col items-center justify-center border-2 border-dashed border-gray-600 rounded-xl p-8 text-center hover:border-blue-500 transition-colors"
          >
            {/* <Clip size={32} className="text-blue-400 mb-2" /> */}
            <Paperclip  className="text-gray-200/90"/>
             <p className="text-gray-400/80">
             Attach a file or a screenshot
             </p>
             
            
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileChange}
              className="hidden"
            />
            {file && (
              <p className="text-xs text-green-400 mt-2 truncate max-w-full">
                {file.name}
              </p>
            )}
          </div>

         


<div className="mt-4 px-1">
  <Button
    onClick={handleSubmit}
    className="w-full bg-gradient-to-r py-6 rounded-lg from-blue-500 to-purple-500 text-gray-200 font-bold text-md transition-all duration-200 
                 shadow-lg shadow-blue-500/30
               hover:shadow-blue-500/40"
  >
    Submit Report
  </Button>
</div>

        </div>
      </section>
    </main>
  );
}