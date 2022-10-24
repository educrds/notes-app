import React, { useState } from "react";

function CreateArea() {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  function handleChange(event) {

    const{name, value} = event.target;

    setNote(prevNote =>{
        return{
            ...prevNote,
            [name]: value
        }
    });


  }
  return (
    <div>
      <form>
        <input
          name="title"
          placeholder="Title"
          onChange={handleChange}
          value={note.title}
        />
        <textarea
          name="content"
          placeholder="Take a note..."
          onChange={handleChange}
          rows="3"
          value={note.content}
        />
        <button>+</button>
      </form>
    </div>
  );
}

export default CreateArea;
