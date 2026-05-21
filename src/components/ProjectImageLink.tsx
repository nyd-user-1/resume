"use client";

import { Media } from "@once-ui-system/core";

interface ProjectImageLinkProps {
  src: string;
  alt: string;
  href: string;
}

export const ProjectImageLink: React.FC<ProjectImageLinkProps> = ({ src, alt, href }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    style={{ display: "block", borderRadius: "12px", overflow: "hidden", transition: "box-shadow 0.3s ease, transform 0.3s ease" }}
    onMouseEnter={e => { e.currentTarget.style.boxShadow = "0 8px 40px rgba(0,0,0,0.25)"; e.currentTarget.style.transform = "scale(1.01)"; }}
    onMouseLeave={e => { e.currentTarget.style.boxShadow = "none"; e.currentTarget.style.transform = "scale(1)"; }}
  >
    <Media priority radius="m" alt={alt} src={src} />
  </a>
);
