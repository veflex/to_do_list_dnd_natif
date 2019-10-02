import React, { useState } from "react";

import Board from "./components/Board";
import Card from "./components/Card";

function App() {
  const [col1, setCol1] = useState(["yes", "no", "maybe"]);
  const [col2, setCol2] = useState(["i", "don't", "know"]);
  const [currentDrag, setCurrentDrag] = useState("");
  const boardDrop = (e, setCol) => {
    e.preventDefault();
    console.log("ca drop la");
    setCol(prevState => {
      const copy = [...prevState];
      copy.push(currentDrag);
      return copy;
    });
  };

  const boardDragOver = e => {
    e.preventDefault();
    console.log("drag over board");
  };
  const cardDragStart = (e, item, setCol) => {
    const target = e.target;
    e.dataTransfer.setData("card_id", target.id);
    setCurrentDrag(item);

    setTimeout(() => {
      setCol(prevState => {
        const copy = [...prevState];
        const index = copy.indexOf(item);
        copy.splice(index, 1);
        return copy;
      });
    }, 0);
  };

  const cardDragOver = e => {
    e.stopPropagation();
    return;
  };

  const cardDragEnd = e => {
    console.log(e.target);
  };
  return (
    <div className="App flexbox">
      <Board
        id="board-1"
        className="board"
        drop={e => {
          boardDrop(e, setCol1);
        }}
        dragOver={boardDragOver}
      >
        {col1.map((item, index) => {
          return (
            <Card
              id={"card-col1-" + index}
              key={"card-col1-" + index}
              className="card"
              draggable="true"
              dragStart={e => cardDragStart(e, item, setCol1)}
              dragOver={cardDragOver}
              drop={e => {
                boardDrop(e, setCol1);
              }}
            >
              <p>{item}</p>
            </Card>
          );
        })}
      </Board>

      <Board
        id="board-2"
        className="board"
        drop={e => {
          boardDrop(e, setCol2);
        }}
        dragOver={boardDragOver}
      >
        {col2.map((item, index) => {
          return (
            <Card
              id={"card-col2-" + index}
              key={"card-col2-" + index}
              className="card"
              draggable="true"
              dragStart={e => cardDragStart(e, item, setCol2)}
              dragOver={cardDragOver}
              drop={e => {
                boardDrop(e, setCol2);
              }}
            >
              <p>{item}</p>
            </Card>
          );
        })}
      </Board>
    </div>
  );
}

export default App;
