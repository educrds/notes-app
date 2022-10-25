import React from "react";

function Note(props) {
  function handleClick() {
    props.onDelete(props.id);
  }
  return (
    <div className="note">
      <h1 contentEditable="true">{props.title}</h1>
      <p contentEditable="true">{props.content}</p>
      <button onClick={handleClick}>
        <img
          src="https://img.icons8.com/material-rounded/24/000000/trash.png"
          alt="icone de lixeira"
        />
      </button>
    </div>
  );
}

export default Note;
