import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [isOver, setOver] = useState(false);
  const [text, setText] = useState(name);

  function handleChange(event) {
    setName(event.target.value);
  }

  function handleMouseover() {
    setOver(true);
  }

  function handleMouseout() {
    setOver(false);
  }

  function handleClick(event) {
    setText(name);
    event.preventDefault();
  }
  return (
    <div className="container">
      <h1>Hello {text}</h1>
      <form onSubmit={handleClick}>
        <input
          onChange={handleChange}
          type="text"
          placeholder="What's your name?"
          value={name}
        />
        <button
          type="submit"
          onMouseOut={handleMouseout}
          onMouseOver={handleMouseover}
          style={{ backgroundColor: isOver ? "black" : "white" }}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
