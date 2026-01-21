"use client";

import { Button } from "@/components/ui/button";

export default function ResumeModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: any;
}) {
  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center"
      role="dialog"
      aria-modal="true"
    >
      <div className="bg-background w-[95%] md:w-[80%] h-[90svh] rounded-xl shadow-xl flex flex-col">

        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b shrink-0">
          <h2 className="text-lg font-semibold">Resume</h2>
          <button
            onClick={onClose}
            aria-label="Close resume"
            className="text-xl hover:opacity-70"
          >
            ✕
          </button>
        </div>

        {/* PDF Viewer */}
        <div className="flex-1 overflow-hidden">
          <iframe
            src="/resume_jan_2026.pdf"
            className="w-full h-full"
            onContextMenu={(e) => e.preventDefault()}
          />
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t shrink-0 flex justify-end">
          <a href="/resume_jan_2026.pdf" download>
            <Button>Download</Button>
          </a>
        </div>

      </div>
    </div>
  );
}
