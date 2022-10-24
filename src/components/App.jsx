import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {

const [items, setItems] = useState([]);

function addItem(inputText){
  setItems(prevItems=>{
    return[...prevItems, inputText];
  })
}


  return (
    <div>
      <Header />
      <CreateArea onAdd={addItem} />
      <Note key={1} title="Note title" content="Note content" />
      <Footer />
    </div>
  );
}

export default App;
