//This file defines the React Context where data is shared and state management is done.

import { createContext } from "react";
import { useState } from "react";

// Create a context object
const NotesContext = createContext();

function Provider({ children }) {
  // State variables to manage notes, text input, and the id of the note to edit and delete
  const [notes, setNotes] = useState([]);
  const [text, setText] = useState("");
  const [showNoteId, setShowNoteId] = useState(null);

  // Function to create a new note and add it to the notes list
  const createNote = () => {
    const createdNotes = [
      ...notes,
      {
        id: Math.round(Math.random() * 999999),
        text,
      },
    ];
    // Add the new note to the notes list if the text is not empty
    text.length > 0 ? setNotes(createdNotes) : null;
    setText(""); // Clear the text input
  };

  // Function to edit an existing note
  const editNote = () => {
    if (text.length === 0) {
      // If the text is empty, delete the note
      return deleteNote(showNoteId);
    }

    // Update the notes list with the edited note
    const updatedNotes = notes.map((note) => {
      if (note.id === showNoteId) {
        return { showNoteId, text };
      }
      return note;
    });
    setNotes(updatedNotes); //Update the notes list
    setText(""); //Clear the text input
  };

  // Function to delete a note from the notes list based on its id
  const deleteNote = (id) => {
    const afterDeletingNotes = notes.filter((note) => {
      return note.id !== id;
    });
    setNotes(afterDeletingNotes);// Update the notes list after deleting the note
  };


  // Create an object containing shared values and methods to be passed to consuming components
  const sharedValuesAndMethods = {
    notes,
    createNote,
    text,
    setText,
    editNote,
    showNoteId,
    setShowNoteId,
    deleteNote,
  };

  return (
    <NotesContext.Provider value={sharedValuesAndMethods}>
      {children}
    </NotesContext.Provider>
  );
}

export { Provider };
export default NotesContext;
