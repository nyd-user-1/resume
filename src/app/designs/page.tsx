import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Design Gallery — NYSGPT",
  description:
    "A working gallery of landing-page design directions for NYSGPT — 22 live explorations across 6 families.",
};

// Mounted as a full-bleed iframe of the deployed design gallery (separate static site).
export default function DesignsPage() {
  return (
    <iframe
      src="https://nysgpt-landing.vercel.app/"
      title="NYSGPT design gallery"
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
