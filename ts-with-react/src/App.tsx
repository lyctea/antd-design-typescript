import React from "react";
import logo from "./logo.svg";
import "./App.css";
import useMousePosition from "./hooks/useMousePosition";
import LikeButton from "./components/LikeButton";

const App: React.FC = () => {
  const positions = useMousePosition();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          X: {positions.x}, Y: {positions.y}
        </p>
        <LikeButton  />
      </header>
    </div>
  );
};

export default App;
