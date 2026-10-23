"use client";

import React, { useEffect } from "react";
import { AlertCircle, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Application error boundary triggered:", error);
  }, [error]);

  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-ivory/40 py-16 px-4">
      <div className="max-w-md w-full text-center bg-white p-8 sm:p-10 rounded-card border border-border shadow-soft space-y-6">
        <div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center text-status-error mx-auto">
          <AlertCircle className="w-8 h-8" />
        </div>

        <div className="space-y-2">
          <div className="text-xs uppercase tracking-widest text-status-error font-bold">
            Unexpected Error
          </div>
          <h1 className="font-serif font-bold text-2xl sm:text-3xl text-navy">
            Something went wrong
          </h1>
          <p className="text-sm text-text-secondary leading-relaxed">
            We encountered an unexpected error while loading this page. You can try refreshing or
            return to our homepage.
          </p>
        </div>

        <div className="space-y-3 pt-2">
          <Button
            onClick={() => reset()}
            variant="primary"
            size="md"
            className="w-full justify-center"
            leftIcon={<RotateCcw className="w-4 h-4" />}
          >
            Try Again
          </Button>

          <Button href="/" variant="outline" size="md" className="w-full justify-center">
            Go to Homepage
          </Button>
        </div>
      </div>
    </div>
  );
}
