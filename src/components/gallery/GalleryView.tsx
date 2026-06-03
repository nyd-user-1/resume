"use client";

import { Media, MasonryGrid } from "@once-ui-system/core";
import { gallery } from "@/resources";

// Each gallery image links out to the live project it belongs to, keyed off the
// project name at the start of its `alt` (e.g. "SolarGPT Utilities" -> SolarGPT).
const PROJECT_URLS: { match: string; href: string }[] = [
  { match: "InsuranceGPT", href: "https://insurance.nysgpt.com" },
  { match: "ChildcareGPT", href: "https://childcare.nysgpt.com" },
  { match: "SolarGPT", href: "https://solar.nysgpt.com" },
  { match: "TariffsGPT", href: "https://tariffs.nysgpt.com" },
  { match: "NSRgpt", href: "https://nsr.nysgpt.com" },
  { match: "SportsGPT", href: "https://sports.nysgpt.com" },
  { match: "PolicyGPT", href: "https://nysgpt.com" },
];

function hrefForAlt(alt: string): string | undefined {
  return PROJECT_URLS.find((p) => alt.startsWith(p.match))?.href;
}

export default function GalleryView() {
  return (
    <MasonryGrid columns={2} s={{ columns: 1 }} gap="24">
      {gallery.images.map((image, index) => {
        const href = hrefForAlt(image.alt);
        const media = (
          <Media
            priority={index < 10}
            sizes="(max-width: 560px) 100vw, 50vw"
            radius="m"
            aspectRatio={image.orientation === "horizontal" ? "16 / 9" : "3 / 4"}
            src={image.src}
            alt={image.alt}
          />
        );

        if (!href) return <div key={index} style={{ marginBottom: "24px" }}>{media}</div>;

        return (
          <a
            key={index}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "block",
              marginBottom: "24px",
              borderRadius: "12px",
              overflow: "hidden",
              transition: "box-shadow 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = "0 8px 40px rgba(0,0,0,0.25)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            {media}
          </a>
        );
      })}
    </MasonryGrid>
  );
}
