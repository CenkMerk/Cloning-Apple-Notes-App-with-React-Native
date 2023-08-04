import { StyleSheet, Text, TextInput, View } from "react-native";
import React, { useRef, useEffect, useContext, useState } from "react";
//context
import NotesContext from "../context/Notes";

export default function EditNoteScreen({ route }) {
  const inputRef = useRef(null);
  const { text, setText, notes } = useContext(NotesContext);

  const note = notes.find((item) => item.id === route.params.id);

  useEffect(() => {
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
