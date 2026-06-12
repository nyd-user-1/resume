import mdx from "@next/mdx";

const withMDX = mdx({
  extension: /\.mdx?$/,
  options: {},
});

// The nysgpt-landing static foundry (its own Vercel deploy) is proxied in under
// resume's own domain so experiments live at resume.nysgpt.com/* with clean URLs
// and no cross-domain iframe. It's a reverse proxy, not a copy: anything pushed to
// the landing deploy auto-appears here. The site is flat self-contained HTML whose
// only internal links are sibling *.html files, so a .html catch-all covers every
// current and future page (index-*.html views + variant-*.html designs).
const LANDING = "https://nysgpt-landing.vercel.app";

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["ts", "tsx", "md", "mdx"],
  transpilePackages: ["next-mdx-remote"],
  async rewrites() {
    return [
      { source: "/designs", destination: `${LANDING}/index.html` },
      { source: "/switchboard", destination: `${LANDING}/index-switchboard.html` },
      { source: "/:file([^/]+\\.html)", destination: `${LANDING}/:file` },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.google.com",
        pathname: "**",
      },
    ],
  },
  sassOptions: {
    compiler: "modern",
    silenceDeprecations: ["legacy-js-api"],
  },
};

export default withMDX(nextConfig);
