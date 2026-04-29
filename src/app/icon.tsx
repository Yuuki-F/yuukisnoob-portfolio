import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#f7f1e3",
          color: "#0a0a0a",
          fontSize: 52,
          fontWeight: 900,
          fontFamily: "system-ui, -apple-system, sans-serif",
          letterSpacing: "-0.05em",
          border: "4px solid #0a0a0a",
        }}
      >
        Y
        <span style={{ color: "#e63946" }}>.</span>
      </div>
    ),
    { ...size }
  );
}
