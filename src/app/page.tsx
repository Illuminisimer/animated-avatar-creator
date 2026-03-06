"use client";

import AvatarCanvas from "../components/AvatarCanvas";
import BackgroundSelector from "../components/BackgroundSelector";
import ExportPanel from "../components/ExportPanel";

export default function Home() {
  return (
    <main style={{ padding: 20 }}>
      <h1>Animated Avatar Creator</h1>

      <AvatarCanvas />

      <BackgroundSelector />

      <ExportPanel />
    </main>
  );
}