import React from "react";

export function NoInput(props) {
  return (
    <div className="control">
      <i className="far fa-comment-dots comment-icon"></i>
      <input
        className="noinput__input"
        type="text"
        placeholder="NoInput Text"
        value={props.text}
      />
      <i className="fas fa-times-circle remove-icon"></i>
    </div>
  );
}
