import React from "react";
import { Prompts } from "./Prompts";

export function Exit(props) {
  return (
    <svg
      x={props.data.position.x}
      y={props.data.position.y}
      width={props.data.position.width}
      height={props.data.position.height}
    >
      <foreignObject height="100%" width="100%">
        <div className="container">
          <div className="atom__name">
            <span>{props.data.id}</span>
          </div>

          {<Prompts prompts={props.data.config.prompts} />}
        </div>
      </foreignObject>
    </svg>
  );
}
