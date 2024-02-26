import { useState } from "react";
import "./App.css";
function App() {
  const [count, setCount] = useState("");
  const [age, setAge] = useState(0);
  const [Counter, setCounter] = useState(0);
  const [theme, setTheme] = useState("");
  return (
    <div className={`App ${theme}`}>
      <button
        onClick={() => {
          setTheme(theme == "" ? "dark" : "");
        }}
        style={{ marginBottom: "36px" }}
      >
        Toggle Theme
      </button>

      <div
        onChange={() => {
          setTheme(theme == "" ? "dark" : "");
        }}
        style={{ marginBottom: "26px" }}
        className="btn-container"
      >
        <i className="fa fa-sun-o" aria-hidden="true"></i>
        <label className="switch btn-color-mode-switch">
          <input type="checkbox" name="color_mode" id="color_mode" value="1" />
          <label
            htmlFor="color_mode"
            data-on="Dark"
            data-off="Light"
            className="btn-color-mode-switch-inner"
          ></label>
        </label>
        <i className="fa fa-moon-o" aria-hidden="true"></i>
      </div>

      <div>
        <button
          onClick={() => {
            setTheme("light");
          }}
          style={{ marginRight: "26px" }}
        >
          light
        </button>
        <button
          onClick={() => {
            setTheme("dark");
          }}
          style={{ marginRight: "26px" }}
        >
          Dark
        </button>
        <button
          onClick={() => {
            setTheme("gray");
          }}
          style={{ marginRight: "26px" }}
        >
          gray
        </button>
        <button
          onClick={() => {
            setTheme("pink");
          }}
        >
          pink
        </button>
      </div>
      <h2>your name is : {count} </h2>
      <button
        onClick={() => {
          setCount("mohammed ali");
        }}
      >
        change your name
      </button>
      <h2>your age is : {age} </h2>
      <button
        onClick={() => {
          setAge(23);
        }}
      >
        age
      </button>
      <button
        style={{ marginTop: "26px" }}
        onClick={() => {
          setCounter(Counter + 1);
        }}
      >
        counter is {Counter}
      </button>
    </div>
  );
}

export default App;
