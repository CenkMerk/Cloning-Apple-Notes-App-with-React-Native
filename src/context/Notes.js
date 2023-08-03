import { createContext } from "react";
import { useState } from "react";

const NotesContext = createContext();

function Provider({ children }) {
  const [notes, setNotes] = useState([]);
  const [text, setText] = useState("");
  const [showNoteId, setShowNoteId] = useState(null);

  const createNote = () => {
    const createdNotes = [
      ...notes,
      {
        id: Math.round(Math.random() * 999999),
        text,
      },
    ];
    text.length > 0 ? setNotes(createdNotes) : null;
    setText("");
  };

  const editNote = () => {
    const updatedNotes = notes.map((note) => {
      if (note.id === showNoteId) {
        return { showNoteId, text };
      }
      return note;
    });
    setNotes(updatedNotes);
    setText("");
  };

  const deleteNote = () => {
    const afterDeletingNotes = notes.filter((note) => {
      return note.id !== showNoteId;
    });
    setNotes(afterDeletingNotes);
  };

  const sharedValuesAndMethods = {
    notes,
    createNote,
    text,
    setText,
    editNote,
    setShowNoteId,
    deleteNote
  };

  return (
    <NotesContext.Provider value={sharedValuesAndMethods}>
      {children}
    </NotesContext.Provider>
  );
}

export { Provider };
export default NotesContext;
