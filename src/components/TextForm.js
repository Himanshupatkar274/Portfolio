import React, { useState } from "react";
import "../CSS/main.css";
export default function TextForm(props) {
  const handalUpClick = () => {
    const translatedValue = text.toUpperCase();
    setText(translatedValue);
  };
  const handalLoClick = () => {
    const translatedValue = text.toLowerCase();
    setText(translatedValue);
  };
  const handalclearClick = () => {
    const translatedValue = ''
    setText(translatedValue);
  };
  const handalChange = (event) => {
    setText(event.target.value);
  };
  const [text, setText] = useState("");

  return (
    <>
      <div className="container mt-3 mb-3">
        <h3>{props.heading}</h3>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="8"
          value={text}
          onChange={handalChange}
        ></textarea>
        <button className="btn btn-primary btn-sm my-3" onClick={handalUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary btn-sm mx-3 my-3" onClick={handalLoClick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary btn-sm mx-3 my-3" onClick={handalclearClick}>
          Clear
        </button>
      </div>
      <div className="container py-3">
        <h3>Your Text Summary</h3>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} Read</p>
        <h4>Preview</h4>
        <p>{text}</p>
      </div>
    </>
  );
}
