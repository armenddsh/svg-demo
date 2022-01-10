import React from "react";
import { Actions } from "./Actions";

export function Switch(props) {
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

          {<Actions actions={props.data.action} />}
        </div>
      </foreignObject>
    </svg>
  );
}
