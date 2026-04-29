import { ImageResponse } from "next/og";

export const alt = "yuuki — roblox scripter";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          background: "#f7f1e3",
          color: "#0a0a0a",
          padding: "60px 80px",
          fontFamily: "system-ui, -apple-system, sans-serif",
          position: "relative",
        }}
      >
        {/* halftone-ish dots via radial gradient background */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "radial-gradient(circle, rgba(10,10,10,0.18) 1.5px, transparent 2px)",
            backgroundSize: "16px 16px",
            opacity: 0.6,
          }}
        />
        {/* red splat */}
        <div
          style={{
            position: "absolute",
            top: -200,
            right: -200,
            width: 600,
            height: 600,
            borderRadius: "50%",
            backgroundImage:
              "radial-gradient(circle, rgba(230,57,70,0.6) 1.5px, transparent 2px)",
            backgroundSize: "12px 12px",
          }}
        />

        <div
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            gap: 16,
          }}
        >
          <div
            style={{
              fontSize: 36,
              fontStyle: "italic",
              color: "#e63946",
              fontWeight: 700,
            }}
          >
            roblox scripter · ships fast
          </div>
          <div
            style={{
              fontSize: 240,
              fontWeight: 900,
              lineHeight: 0.85,
              letterSpacing: "-0.04em",
              display: "flex",
              alignItems: "baseline",
            }}
          >
            YUUKI
            <span style={{ color: "#e63946" }}>.</span>
          </div>
          <div
            style={{
              display: "flex",
              gap: 24,
              fontSize: 32,
              fontWeight: 700,
              marginTop: 24,
            }}
          >
            <div
              style={{
                background: "#0a0a0a",
                color: "#f7f1e3",
                padding: "8px 20px",
                boxShadow: "6px 6px 0 #0a0a0a",
              }}
            >
              1B+ VISITS
            </div>
            <div
              style={{
                background: "#e63946",
                color: "#f7f1e3",
                padding: "8px 20px",
                boxShadow: "6px 6px 0 #0a0a0a",
              }}
            >
              80K PEAK CCU
            </div>
            <div
              style={{
                background: "#4361ee",
                color: "#f7f1e3",
                padding: "8px 20px",
                boxShadow: "6px 6px 0 #0a0a0a",
              }}
            >
              7 YRS DEEP
            </div>
          </div>
        </div>

        <div
          style={{
            position: "absolute",
            bottom: 60,
            right: 80,
            fontSize: 28,
            color: "#0a0a0a",
            opacity: 0.7,
          }}
        >
          yuukisnoob.dev
        </div>
      </div>
    ),
    { ...size }
  );
}
