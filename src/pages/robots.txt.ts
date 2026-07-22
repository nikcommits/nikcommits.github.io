export function GET({ site }: { site?: URL }) {
  const sitemap = site ? `\nSitemap: ${new URL("/sitemap-index.xml", site).href}` : "";

  return new Response(`User-agent: *\nAllow: /${sitemap}\n`, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}
