"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Mail, FileText } from "lucide-react";
import Image from "next/image";
import { useEffect } from "react";
import { createPortal } from "react-dom";

export interface Executive {
  name: string;
  position: string;
  email: string;
  image: string;

  description: string;
  department: string;
}

interface ExecutiveModalProps {
  executive: Executive | null;
  onClose: () => void;
}

export default function ExecutiveModal({ executive, onClose }: ExecutiveModalProps) {
  // Prevent scrolling when modal is open
  useEffect(() => {
    if (executive) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [executive]);

  // Handle ESC key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  if (!executive) return null;

  // Use portal to render at root level
  return createPortal(
    <AnimatePresence>
      {executive && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-background/80 backdrop-blur-sm"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", duration: 0.5, bounce: 0.3 }}
            className="relative w-full max-w-3xl h-[60vh] md:h-[450px] rounded-2xl border border-border bg-card shadow-2xl overflow-hidden flex flex-col md:flex-row"
            role="dialog"
            aria-modal="true"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-background/50 backdrop-blur-md hover:bg-muted transition-colors border border-border/50"
            >
              <X className="h-5 w-5 cursor-pointer" />
            </button>

            {/* Image Section */}
            <div className="relative h-1/3 md:h-full md:w-5/12 shrink-0">
              <Image
                src={executive.image}
                alt={executive.name}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-background/80 via-transparent to-transparent md:hidden" />
            </div>

            {/* Content Section */}
            <div className="flex flex-col h-2/3 md:h-full md:w-7/12 overflow-hidden bg-card">
              {/* Header - Fixed */}
              <div className="p-6 md:p-8 pb-4 shrink-0 border-b border-border/50">
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground mb-2">
                  {executive.name}
                </h2>
                <p className="text-lg md:text-xl text-primary font-medium">
                  {executive.position}
                </p>
                <div className="inline-block mt-3 px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium border border-primary/20">
                    {executive.department}
                </div>
              </div>

              {/* Scrollable Description */}
              <div className="flex-1 overflow-y-auto p-6 md:p-8 pt-4 custom-scrollbar">
                <div className="flex items-start gap-3 text-muted-foreground mb-6">
                  <FileText className="h-5 w-5 shrink-0 mt-1 text-primary/60" />
                  <p className="leading-relaxed whitespace-pre-line">
                    {executive.description}
                  </p>
                </div>

                {/* Email - At bottom of content or typically part of scroll to avoid cluttering fixed areas */}
                 <div className="flex items-center gap-3 text-muted-foreground pt-4 border-t border-border/50">
                  <Mail className="h-5 w-5 shrink-0 text-primary/60" />
                  <a 
                    href={`mailto:${executive.email}`}
                    className="hover:text-primary transition-colors hover:underline"
                  >
                    {executive.email}
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>,
    document.body
  );
}
