import React, { useEffect, useState } from "react";
import useMousePosition from "../hooks/useMousePosition";


const MouseTracker: React.FC = () => {
  const [positions, setPositions] = useState({ x: 0, y: 0 });
  useEffect(() => {
    console.log("add Effect", positions.x);
    const updateMouse = (e: MouseEvent) => {
      setPositions({ x: e.clientX, y: e.clientY });
    };
    document.addEventListener("click", updateMouse);

    return () => {
      console.log("remove Effect", positions.x);
      document.removeEventListener("click", updateMouse);
    };
  }, []);

  return (
    <p>
      X: {positions.x}, Y: {positions.y}
    </p>
  );
};

export default MouseTracker;
