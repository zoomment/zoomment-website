"use client";

import { useEffect } from "react";

export default function DashboardError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div
      role="alert"
      style={{
        minHeight: "calc(100vh - 250px)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 24,
        padding: 24,
        textAlign: "center",
      }}
    >
      <span className="balloon">Couldn&apos;t load your dashboard.</span>
      <p style={{ maxWidth: 420, fontSize: 16, lineHeight: 1.55, marginTop: 8 }}>
        The comments server didn&apos;t answer. Check your connection and try
        again.
      </p>
      <button type="button" className="btn-pop btn-pop--sm" onClick={reset}>
        Try again
      </button>
    </div>
  );
}
