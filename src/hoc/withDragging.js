import React from "react";

export function withDragging(Component) {
  return function WithDraggingComponent({ ...props }) {
    const ref = React.useRef();
    const [data, setData] = React.useState(props);
    const [isDragging, setIsDragging] = React.useState(false);
    const [offset, setOffset] = React.useState({ x: 0, y: 0 });

    const handlePointerUp = (event) => {
      setIsDragging(false);
    };

    const handlePointerDown = (event) => {
      const hsRect = ref.current.getBoundingClientRect();

      setIsDragging(true);
      setOffset({ x: event.clientX - hsRect.x, y: event.clientY - hsRect.y });
    };

    const handlePointerMove = (event) => {
      if (isDragging) {
        const dataCopy = JSON.parse(JSON.stringify(data));
        console.log("dataCopy", dataCopy);
        dataCopy.data.position.x = event.clientX - offset.x;
        dataCopy.data.position.y = event.clientY - offset.y;

        setData(dataCopy);
      }
    };

    return (
      <svg
        ref={ref}
        onPointerUp={handlePointerUp}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
      >
        <Component {...data} />
      </svg>
    );
  };
}
