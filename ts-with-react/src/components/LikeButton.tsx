import React, { useEffect, useState, useRef } from "react";
import useMousePosition from "../hooks/useMousePosition";

const LikeButton: React.FC = () => {
  const [like, setLike] = useState(0);
  const likeRef = useRef(0);
  const positions = useMousePosition();
  const domRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (domRef && domRef.current) {
      domRef.current.focus();
    }
  });

  useEffect(() => {
    document.title = `点击了${like}次`;
  }, [like]); //只有like改变的时候才会触发effect

  function handleAlertClick() {
    setTimeout(() => {
      alert("you clicked on " + likeRef.current);
    }, 3000);
  }

  return (
    <>
      <input type="text" ref={domRef} />
      <p>
        X: {positions.x}, Y: {positions.y}
      </p>
      <button
        onClick={() => {
          setLike(like + 1);
          likeRef.current++;
        }}
      >
        {like} 🀄️
      </button>
      <button onClick={handleAlertClick}> Alert! </button>
    </>
  );
};

export default LikeButton;
