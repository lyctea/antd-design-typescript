import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import useURLLoader from "./hooks/useURLLoader";
import LikeButton from "./components/LikeButton";

interface IShowResult {
  message: string;
  status: string;
}

const App: React.FC = () => {
  const [show, setShow] = useState(true);
  const [
    data,
    loading,
  ] = useURLLoader("https://dog.ceo/api/breeds/image/random", [show]);
  const dogRes = data as IShowResult;

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <LikeButton/>
        <p>
          <button
            onClick={() => {
              setShow(!show);
            }}
          >
            Refresh dog photo
          </button>
        </p>
        {loading ? <p>loading...</p> : <img src={dogRes && dogRes.message} />}
      </header>
    </div>
  );
};

export default App;
