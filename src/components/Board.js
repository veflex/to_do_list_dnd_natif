import React from "react";

const Board = props => {
  return (
    <div
      id={props.id}
      className={props.className}
      onDrop={props.drop}
      onDragOver={props.dragOver}
    >
      {props.children}
    </div>
  );
};

export default Board;
