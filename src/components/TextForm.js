import React, { useState } from "react";
import PropTypes from "prop-types";

export default function TextForm(props) {
  const handleUpClick = () => {
    setText(text.toUpperCase());
  };

  const handleLowerClick = () => {
    setText(text.toLowerCase());
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
  };

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  };

  const [text, setText] = useState("");

  let wordCout = text.split(" ").length;
  return (
    <>
      <div className="container">
        <h1 style={{color: props.mode === "light" ? "#042743" : "white"}}>
          {props.heading}
        </h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="12"
            style={{
              backgroundColor: props.mode === "light" ? "white" : "#042743",
              color: props.mode === "light" ? "#042743" : "white",
            }}
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>
          ToUpperCase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleLowerClick}>
          ToLowerCase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleCopy}>
          Copy Text
        </button>
        <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>
          Remove Extra Spaces
        </button>
      </div>
      <div className="container my-5" style={{color: props.mode === "light" ? "#042743" : "white"}}>
        <h2>Your text summary</h2>
        <p>
          {wordCout} words, {text.length} characters
        </p>
        <p>{0.008 * wordCout} minutes read</p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Enter into above textbox to preview it here"}</p>
      </div>
    </>
  );
}

TextForm.prototype = { heading: PropTypes.string.isRequired };
TextForm.defaultProps = { heading: "Enter text to analyze" };
