import Header from "@/components/common/Header";
import UploadBox from "@/components/upload/uploadBox";
import { ShieldAlert } from "lucide-react";




export default function Upload() {
  
  return (
    <main className="flex w-full flex-col items-center bg-[#000814] text-white h-screen">
      <Header />

      <section className="flex items-center justify-center px-4 py-30 bg-[#000814] text-white overflow-hidden">
        <div className="relative z-10 w-full max-w-4xl">
          {/* Icon */}
          <div className="flex justify-center mb-8">
            <div className="p-4 rounded-2xl bg-cyan-400/10 border border-cyan-400/30 shadow-lg shadow-cyan-500/20">
              <ShieldAlert className="w-10 h-10 text-cyan-400" />
            </div>
          </div>

          {/* Heading */}
          <div className="text-center mb-10">
            <h1 className="text-3xl sm:text-5xl font-bold mb-4">
              Media Analysis
            </h1>

            <p className="text-blue-200/80 max-w-xl mx-auto text-base tracking-wide sm:text-lg">
              Upload an image or video. Our multi-modal AI scans for facial
              inconsistencies, blending artifacts, and digital manipulation.
            </p>
          </div>

          {/* Drag & Drop Area */}
          <UploadBox />
        </div>
      </section>


    </main>
  );
}
