import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Switchboard — NYSGPT",
  description:
    "A keyboard-driven operator console for the NYSGPT design gallery, with a live preview of every exploration.",
};

// Mounted as a full-bleed iframe of the deployed switchboard (separate static site).
export default function SwitchboardPage() {
  return (
    <iframe
      src="https://nysgpt-landing.vercel.app/index-switchboard.html"
      title="NYSGPT switchboard"
      style={{
        position: "fixed",
        inset: 0,
        width: "100vw",
        height: "100vh",
        border: 0,
        zIndex: 100,
      }}
    />
  );
}
