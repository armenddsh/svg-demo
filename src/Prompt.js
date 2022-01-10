import React from "react";

export function Prompt(props) {
  return (
    <div className="control">
      <i className="far fa-comment-dots comment-icon"></i>
      <input
        className="prompt__input"
        type="text"
        placeholder="Prompt Text"
        value={props.text}
      />
      <i className="fas fa-times-circle remove-icon"></i>
    </div>
  );
}
