"use client";

import React, { useEffect, useRef } from "react";

export default function AvatarCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.fillStyle = "#4f46e5";
    ctx.fillRect(0, 0, 512, 512);

    ctx.fillStyle = "white";
    ctx.font = "bold 60px sans-serif";
    ctx.fillText("Avatar", 120, 260);
  }, []);

  return <canvas id="avatar-canvas" ref={canvasRef} width={512} height={512} />;
}