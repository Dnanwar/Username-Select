import React from "react";
const List = ({word,setInputValue,setMatches,setSelects,setSugges}) => {
  console.log(word);
  return (
    <div
      key={word}
      onClick={() => {
        setInputValue("");
        // setFill(true)
        setMatches([]);
        setSelects(word);
        setSugges((sugges) => sugges.filter((item) => item !== word));

      }}
    >
      <div
        style={{
          // background: "green",
          marginLeft:'5%',
          display: "inline",
        }}
      >
        {word}
      </div>
      <br />
    </div>
  );
};
export default List;
