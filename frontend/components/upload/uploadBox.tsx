"use client";

import { detectDeepfake } from "@/lib/api/deepfake";
import React, { useState, useRef } from "react";
import { Dot, UploadCloud } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function UploadBox() {
  const router = useRouter();

  const [dragActive, setDragActive] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [analyzing, setAnalyzing] = useState(false);
  const [analysisStep, setAnalysisStep] = useState("");

  const inputRef = useRef<HTMLInputElement>(null);

  const handleBrowseClick = () => {
    inputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const selected = e.target.files[0];
      setFile(selected);
      setPreview(URL.createObjectURL(selected));
    }
  };

  const handleDragEnter = (e: React.DragEvent) => {
    e.preventDefault();
    setDragActive(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setDragActive(false);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const selected = e.dataTransfer.files[0];
      setFile(selected);
      setPreview(URL.createObjectURL(selected));
    }
  };

  const formatSize = (size: number) => {
    return (size / (1024 * 1024)).toFixed(2) + " MB";
  };
  // analyse code 
  // const startAnalysis = () => {
  //   if (!file) {
  //     toast.error("Upload failed. Please select a file.");
  //     return;
  //   }

  //   setAnalyzing(true);
  //   setAnalysisStep("Extracting facial landmarks...");

  //   setTimeout(
  //     () => setAnalysisStep("Scanning compression artifacts..."),
  //     1500
  //   );
  //   setTimeout(() => setAnalysisStep("Evaluating GAN probability..."), 3000);
  //   setTimeout(() => setAnalysisStep("Generating authenticity score..."), 4500);

  //   setTimeout(() => {
  //     setAnalyzing(false);

  //     // Simulate analysis result
  //     const status = Math.random() > 0.5 ? "real" : "fake";
  //     const percentage = status === "real" ? 92 : 87;

  //     toast.success("Analysis complete! Redirecting to report...");

  //     // ✅ Redirect to dynamic route /upload/[id]
  //     const reportId = Date.now();
  //     router.push(
  //       `/upload/${reportId}?fileName=${encodeURIComponent(
  //         file.name
  //       )}&status=${status}&percentage=${percentage}`
  //     );
  //   }, 4000);
  // };

  const startAnalysis = async () => {
    if (!file) {
      toast.error("Upload failed. Please select a file.");
      return;
    }
  
    setAnalyzing(true);
    setAnalysisStep("Extracting facial landmarks...");
  
    setTimeout(() => setAnalysisStep("Scanning compression artifacts..."), 1500);
    setTimeout(() => setAnalysisStep("Evaluating GAN probability..."), 3000);
    setTimeout(() => setAnalysisStep("Generating authenticity score..."), 4500);
  
    try {
      // REAL API CALL (NEW)
      const data = await detectDeepfake(file);
  
      const status = data.result; // "real" | "fake"
      const percentage = Math.round((data.confidence || 0) * 100);
  
      toast.success("Analysis complete! Redirecting to report...");
  
      // const reportId = data.id || Date.now();
      const reportId = crypto.randomUUID();
  
      router.push(
        `/upload/${reportId}?fileName=${encodeURIComponent(
          file.name
        )}&status=${status}&percentage=${percentage}`
      );
    } catch (err) {
      toast.error("Analysis failed. Try again.");
      console.error(err);
    } finally {
      setAnalyzing(false);
    }
  };


  return (
    <div
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      className={`relative group border-2 border-dashed rounded-2xl p-10 text-center transition-all duration-300

      ${
        dragActive
          ? "border-cyan-400 bg-cyan-400/10 shadow-lg shadow-cyan-500/20 scale-[1.02]"
          : "border-[#265584] bg-[#0d1424] hover:border-cyan-400/50 hover:bg-[#101521]"
      }
      `}
    >
      {/* hidden input */}
      <input
        ref={inputRef}
        type="file"
        accept="image/*,video/*"
        onChange={handleFileChange}
        className="hidden"
      />

      {!file && (
        <>
          <UploadCloud className="mx-auto mb-4 w-14 h-14 text-cyan-400 group-hover:scale-110 transition-transform duration-300" />

          <h2 className="text-xl font-semibold mb-2">Drag & Drop media here</h2>

          <p className="text-sm text-blue-200/60">
            Supports high-resolution images and videos up to 50MB.
          </p>

          <p className="text-sm text-blue-200/60 mb-8">
            Formats: JPEG, PNG, MP4, MOV.
          </p>

          <Button
            onClick={handleBrowseClick}
            className="bg-cyan-500 hover:bg-cyan-400 text-black font-semibold px-8 py-5 shadow-lg shadow-cyan-500/20"
          >
            Browse File
          </Button>
        </>
      )}

      {file && preview && (
        <div className="flex items-center gap-6 bg-[#0d1424] p-2 text-left">
          <div>
            {file.type.startsWith("image") ? (
              <Image
                src={preview}
                alt="preview"
                width={96}
                height={96}
                className="rounded-lg object-cover"
              />
            ) : (
              <video
                src={preview}
                controls
                className="w-24 h-24 rounded-lg object-cover"
              />
            )}
          </div>

          <div className="flex flex-col gap-3">
            <div>
              <p className="font-semibold text-white">{file.name}</p>

              <p className="text-sm text-blue-200/70 flex items-center">
                {formatSize(file.size)}
                <Dot size={20} />
                {file.type}
              </p>
            </div>
            {!analyzing ? (
              <Button
                onClick={startAnalysis}
                className="bg-gradient-to-r py-5 from-blue-500 to-purple-500 text-gray-200 font-semibold text-md transition-all duration-200
              hover:-translate-y-1 hover:scale-100 shadow-lg shadow-blue-500/30
              hover:shadow-blue-500/40"
              >
                Analyze for Deepfake
              </Button>
            ) : (
              <p className="text-gray-200 font-light text-sm animate-pulse">
                {analysisStep}
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}