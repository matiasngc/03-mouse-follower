import { useEffect, useState } from "react";

const FollowMouse = () => {
  const [enabled, setEnabled] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  // pointer move
  useEffect(() => {
    console.log("effect ", { enabled });

    const handleMove = (event) => {
      const { clientX, clientY } = event;
      setPosition({ x: clientX, y: clientY });
    };

    if (enabled) {
      window.addEventListener("pointermove", handleMove);
    }

    // return () => window.removeEventListener('pointermove', handleMove)
    return () => {
      console.log("cleanup");
      window.removeEventListener("pointermove", handleMove);
    };
  }, [enabled]);

  // change body className
  // useEffect(() => {
  //   document.body.classList.toggle("no-cursor", enabled);

  //   return () => document.body.classList.remove("no-cursor");
  // }, [enabled]);

  return (
    <>
      <div
        style={{
          position: "absolute",
          // border: '1.2px solid #000',
          border: "1.2px solid #fff",
          backgroundColor: "#00",
          borderRadius: "50%",
          opacity: 0.8,
          pointerEvents: "none",
          left: -12,
          top: -12,
          width: 22,
          height: 22,
          transform: `translate(${position.x}px, ${position.y}px)`,
        }}
      />
      <button onClick={() => setEnabled(!enabled)}>
        {enabled ? "Desactivar" : "Activar"} seguir puntero
      </button>
    </>
  );
};

function App() {
  return (
    <main>
      <FollowMouse />
    </main>
  );
}

export default App;
