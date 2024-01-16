import React, { useEffect, useState } from "react";
import List from "./List";
import Trie from "../trie";
import words from "../words";

const UserInput = ({ setSelects, suggs, setSugges }) => {
  var ini_trie = new Trie();
  words.forEach((user) => {
    ini_trie.insert(user);
  });
  const [inputValue, setInputValue] = useState("");
  const [matches, setMatches] = useState([]);
  const [trie, setTrie] = useState(ini_trie);

  useEffect(() => {
    if (inputValue !== "") {
      const matchingStrings = trie.getAllWordsWithPrefix(inputValue);
      setMatches(matchingStrings);
      console.log("---------------");
      console.log(matchingStrings);
    } else {
      setMatches([]);
    }
  }, [inputValue]);
  useEffect(() => {
    const trie1 = new Trie();
    suggs.forEach((user) => {
      trie1.insert(user);
    });
    setTrie(trie1);
  }, [suggs]);
  const handleInputChange = (e) => {
    console.log(e.target.value);
    setInputValue(e.target.value);
  };
  return (
    <div style={{ display: "inline", background: "blue", width: "10%" }}>
      <div
        style={{
          display: "inline",
          position: "absolute",
          background: "white",
        }}
      >
        <input
          style={{ display: "inline", border: "none", outline: "none" }}
          type="text"
          value={inputValue}
          onChange={handleInputChange}
        />

        <div
          on={() => console.log("sfkjah")}
          style={{
            // background: "red",
            position: "relative",
            boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.2)",
          }}
        >
          {matches.map((word) => (
            <List
              key={word}
              word={word}
              setInputValue={setInputValue}
              setMatches={setMatches}
              setSelects={setSelects}
              setSugges={setSugges}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserInput;
