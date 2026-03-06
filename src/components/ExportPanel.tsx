"use client";

import React from "react";
import { useState } from "react";

export default function ExportPanel() {
  const [exporting, setExporting] = useState(false);

  const getCanvas = (): HTMLCanvasElement | null => {
    return document.getElementById("avatar-canvas") as HTMLCanvasElement;
  };

  const downloadFile = (dataUrl: string, filename: string) => {
    const link = document.createElement("a");
    link.href = dataUrl;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const exportPNG = () => {
    const canvas = getCanvas();
    if (!canvas) return alert("Avatar canvas not found");

    const dataUrl = canvas.toDataURL("image/png");
    downloadFile(dataUrl, "avatar.png");
  };

  const exportSVG = () => {
    const canvas = getCanvas();
    if (!canvas) return alert("Avatar canvas not found");

    const dataUrl = canvas.toDataURL("image/png");

    const svg = `
      <svg xmlns="http://www.w3.org/2000/svg" width="${canvas.width}" height="${canvas.height}">
        <image href="${dataUrl}" width="100%" height="100%" />
      </svg>
    `;

    const blob = new Blob([svg], { type: "image/svg+xml" });
    const url = URL.createObjectURL(blob);

    downloadFile(url, "avatar.svg");

    URL.revokeObjectURL(url);
  };

  const exportGIF = async () => {
    const canvas = getCanvas();
    if (!canvas) return alert("Avatar canvas not found");

    setExporting(true);

    // Simple fallback animation capture
    const frames: string[] = [];

    for (let i = 0; i < 5; i++) {
      frames.push(canvas.toDataURL("image/png"));
      await new Promise((r) => setTimeout(r, 150));
    }

    // For now we export first frame as GIF placeholder
    // (real GIF encoder can be added later)
    downloadFile(frames[0], "avatar.gif");

    setExporting(false);
  };

  return (
    <div
      style={{
        marginTop: 20,
        padding: 16,
        border: "1px solid #ddd",
        borderRadius: 8,
        maxWidth: 400
      }}
    >
      <h2>Export Avatar</h2>

      <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
        <button onClick={exportPNG}>Download PNG</button>

        <button onClick={exportSVG}>Download SVG</button>

        <button onClick={exportGIF} disabled={exporting}>
          {exporting ? "Generating..." : "Download GIF"}
        </button>
      </div>
    </div>
  );
}