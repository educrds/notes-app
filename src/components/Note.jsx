import React from "react";

function Note(props) {
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button>
        <img src="https://cdn-icons-png.flaticon.com/24/1214/1214428.png"></img>
      </button>
    </div>
  );
}

export default Note;
