import { createContext } from "react";
import { useState } from "react";

const NotesContext = createContext();

function Provider({ children }) {
  const [notes, setNotes] = useState([]);
  const [text, setText] = useState("");

  const createNote = () => {
    const createdNotes = [
      ...notes,
      {
        id: Math.round(Math.random() * 999999),
        text,
      },
    ];
    setNotes(createdNotes);
    setText("");
  };
  const sharedValuesAndMethods = {
    notes,
    createNote,
    text,
    setText,
  };

  return (
    <NotesContext.Provider value={sharedValuesAndMethods}>
      {children}
    </NotesContext.Provider>
  );
}

export { Provider };
export default NotesContext;
