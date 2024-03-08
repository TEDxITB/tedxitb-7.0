"use client";

import { useAudio } from "./audio";
import { ScanSVG } from "./scan-svg";
import { Button } from "@/components/ui/button";
import { Loader2, RotateCw } from "lucide-react";
import React, { useEffect, useState } from "react";
import { QrReader } from "react-qr-reader";
import { toast } from "sonner";

interface QRResponse {
  success?: TicketSuccessResponse;
  error?: TicketErrorResponse;
}

interface TicketSuccessResponse {
  userId: string;
  name: string;
  email: string;
  ticketId: string;
}

interface TicketErrorResponse {
  error: string;
}

type ScannerState = "scanning" | "loading" | "result";

const Scanner = () => {
  // QR Scan result state
  const [qr, setQr] = useState<string | null>(null);

  // QR Sound Effect
  const [_, toggle] = useAudio("/sound/barcode-audio.mp3");

  // Scanning state
  // "scanning": QR Scanner State
  // "loading": Loading State
  // "result" (Success/Error) data state
  const [scanState, setScanState] = useState<ScannerState>("scanning");

  // Response data state from the server
  const [response, setResponse] = useState<QRResponse | undefined>();

  // Reset all state
  const handleReset = () => {
    setQr(null);
    setScanState("scanning");
    setResponse(undefined);
  };

  useEffect(() => {
    if (scanState == "loading" && qr) {
      // Reset state
      const loadingToast = toast.loading("Loading...", {
        description: "Please wait...",
        duration: Infinity,
      });

      // Send POST Request
      const formData = new FormData();
      formData.append("ticketId", qr);
      fetch("/api/verify-ticket", {
        method: "POST",
        body: formData,
      }).then(async (res) => {
        const resJSON = (await res.json()) as TicketSuccessResponse &
          TicketErrorResponse;
        toast.dismiss(loadingToast);

        // Error response from fetch
        if (!res.ok) {
          toast.error("Error", { description: resJSON.error });
          setResponse({ error: { error: resJSON.error } });
          setScanState("result");

          return;
        }

        // Success response
        toast.success("Success", { description: "Ticket Verified!" });
        setResponse({ success: resJSON });
        setScanState("result");
      });
    }
  }, [scanState, qr]);

  return (
    <section className="flex w-full max-w-md flex-col gap-3">
      {/* Title */}
      <h1 className="text-center font-anderson text-3xl font-bold uppercase tracking-wider text-white lg:text-5xl">
        Verify Ticket
      </h1>

      {/* Conditions */}
      {scanState === "scanning" ? (
        // SCANNING STATE
        // REACT STRICT MODE MUST BE TURNED OFF TO PREVENT COMPONENT FROM FAIL UNMOUNTING
        <div className="flex flex-col gap-3">
          {/* Short Description */}
          <p className="text-center font-anderson text-base text-white lg:text-lg">
            Scan Ticket QR Code to Verify!
          </p>

          <div className="relative overflow-hidden rounded-lg">
            <ScanSVG />
            <QrReader
              videoStyle={{
                objectPosition: "center",
                objectFit: "cover",
              }}
              className="aspect-square w-full max-w-md overflow-hidden"
              key={scanState}
              constraints={{ facingMode: "environment" }}
              scanDelay={1000}
              onResult={(result, error) => {
                // Error, do nothing
                if (error || !result) {
                  return;
                }

                // Play audio
                toggle();

                // Set data
                setQr(result.getText());

                // Set loading state
                setScanState("loading");
              }}
            />
          </div>
        </div>
      ) : scanState === "loading" ? (
        // LOADING STATE
        <div className="flex flex-col items-center gap-3">
          <p className="text-center font-anderson text-base text-white lg:text-xl">
            Validating ticket, please wait...
          </p>
          <Loader2 className="h-12 w-12 animate-spin text-ted-red" />
        </div>
      ) : response && response.error ? (
        // RESULT STATE (ERROR)
        <div className="flex flex-col items-center gap-3 font-anderson text-base text-white lg:text-lg">
          <p>Error: {response.error.error}</p>
          <Button type="button" size="lg" onClick={handleReset}>
            Scan Again <RotateCw className="ml-2 h-5 w-5" />
          </Button>
        </div>
      ) : (
        // RESULT STATE (SUCCESS)
        <div className="flex flex-col items-center gap-3 font-anderson text-base text-white lg:text-lg">
          <ul>
            <li>User ID: {response?.success?.userId ?? "-"}</li>
            <li>Name: {response?.success?.name ?? "-"}</li>
            <li>Email: {response?.success?.email ?? "-"}</li>
            <li>User Ticket ID: {response?.success?.ticketId ?? "-"}</li>
          </ul>
          <Button type="button" size="lg" onClick={handleReset}>
            Scan Again <RotateCw className="ml-2 h-5 w-5" />
          </Button>
        </div>
      )}
    </section>
  );
};

export default Scanner;
