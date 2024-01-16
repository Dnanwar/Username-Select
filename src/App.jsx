import logo from "./logo.svg";
import "./App.css";
import react, { useEffect, useState } from "react";
import Trie from "./trie";
import UserInput from "./components/UserInput";
import UserBubble from "./components/UserBubble";
import words from "./words";

const App = () => {
  // Get matching strings with a given prefix
  const [selects, setSelects] = useState([]);
  const [suggs, setSugges] = useState([...words]);
  const handleStateChange = (word) => {
    setSelects((selects) => [...selects, word]);
  };
  return (
    <div className="App">
      <h1 style={{ color: "#0964C5" }}>Pick User</h1>
      <div style={{ alignContent: "center" }}>
        <div
          style={{
            borderBottom: "solid",
            borderColor: "#0964C5",
            width: "70%",
            padding: "0.5%",
            textAlign: "left",
            // background:'blue',
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <div style={{ display: "inline", marginRight: "0.3%" }}>User:</div>
          <div style={{ display: "inline" }}>
            {selects.map((select) => (
              <UserBubble
                select={select}
                setSelects={setSelects}
                setSugges={setSugges}
              />
            ))}
          </div>
          <div style={{ display: "inline" }}>
            <UserInput
              style={{ display: "inline" }}
              setSelects={handleStateChange}
              suggs={suggs}
              setSugges={setSugges}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
