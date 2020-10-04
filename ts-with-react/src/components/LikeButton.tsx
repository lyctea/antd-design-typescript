import React, { useEffect, useState } from "react";
import useMousePosition from "../hooks/useMousePosition";


const LikeButton: React.FC = () => {
  const [like, setLike] = useState(0);
  const [on, setOn] = useState(true);
  const positions = useMousePosition();

  useEffect(() => {
    document.title = `点击了${like}次`
  }, [like]) //只有like改变的时候才会触发effect

  return (
    <>
      <p> X: {positions.x}, Y: {positions.y}</p>
      <button onClick={() => setLike(like + 1)}>{like} 🀄️</button>
      <button onClick={() => setOn(!on)}>{on ? "ON" : "OFF"} 🀄️</button>
    </>
  );
};

export default LikeButton;
