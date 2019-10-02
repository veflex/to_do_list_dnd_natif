import React from "react";

const Card = props => {
  console.log(props);
  return (
    <div
      id={props.id}
      className={props.className}
      draggable={props.draggable}
      onDragStart={props.dragStart}
      onDragOver={props.dragOver}
      onDragEnd={props.dragEnd}
      onDrop={props.drop}
    >
      {props.children}
    </div>
  );
};

export default Card;
