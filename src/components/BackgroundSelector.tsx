"use client";

export default function BackgroundSelector() {

  function setBackground(color: string) {

    const canvas = document.getElementById("avatar-canvas");

    if (canvas)
      canvas.style.background = color;

  }

  return (

    <div style={{ marginTop: 20 }}>

      <h3>Background Library</h3>

      <button onClick={() => setBackground("transparent")}>
        Transparent
      </button>

      <button onClick={() => setBackground("#ffffff")}>
        White
      </button>

      <button onClick={() => setBackground("#87CEEB")}>
        Sky Blue
      </button>

      <button onClick={() => setBackground("#FFB6C1")}>
        Pink
      </button>

      <button onClick={() => setBackground("#90EE90")}>
        Light Green
      </button>

    </div>

  );

}