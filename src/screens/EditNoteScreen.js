//This screen is the edit page. the selected note is edited

import { StyleSheet, TextInput, View } from "react-native";
import React, { useRef, useEffect, useContext} from "react";
//context
import NotesContext from "../context/Notes";

export default function EditNoteScreen({ route }) {
  const inputRef = useRef(null);
  const { text, setText, notes } = useContext(NotesContext);

  //Finds the note whose id matches route.params.id
  const note = notes.find((item) => item.id === route.params.id);

  useEffect(() => {
    //automatically focuses on the input field 0.3 seconds after page load
    setText(note.text);
    const timer = setTimeout(() => {
      inputRef.current.focus();
    }, 300);

    return () => clearTimeout(timer);
  }, []);
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        multiline
        selectionColor="#FFD52E"
        ref={inputRef}
        keyboardAppearance="dark"
        onChangeText={(new_text) => setText(new_text)}
        value={text}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1C1C1E",
    flex: 1,
  },
  input: {
    flex: 1,
    color: "white",
    margin: "10%",
    fontSize: 18,
  },
});
