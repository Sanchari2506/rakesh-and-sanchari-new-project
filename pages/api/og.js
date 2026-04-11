import { ImageResponse } from "@vercel/og";

export const config = {
  runtime: "edge",
};

export default function handler(req) {
  const { searchParams } = new URL(req.url);
  const title = searchParams.get("title") || "LNPR Capital";

  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          background: "#0A0A0A",
          color: "#fff",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "60px",
          fontFamily: "serif",
        }}
      >
        {/* Top Branding */}
        <div style={{ fontSize: 28, color: "#C8A96A" }}>
          LNPR Capital
        </div>

        {/* Title */}
        <div
          style={{
            fontSize: 64,
            fontWeight: "bold",
            lineHeight: 1.2,
          }}
        >
          {title}
        </div>

        {/* CTA */}
        <div style={{ fontSize: 28, color: "#C8A96A" }}>
          Read More →
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}