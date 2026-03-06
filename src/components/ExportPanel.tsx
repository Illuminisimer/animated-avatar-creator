function exportSVG() {

  const svg = document.querySelector("svg");

  if (!svg) return;

  const data = new XMLSerializer().serializeToString(svg);

  const blob = new Blob([data], { type: "image/svg+xml" });

  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");

  a.href = url;
  a.download = "avatar.svg";

  a.click();

}

<button onClick={exportSVG}>
  Export SVG
</button>