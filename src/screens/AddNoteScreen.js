//the purpose of this screen is to get the user's note with TextInput

import React, { useRef, useEffect, useContext } from "react";
import { StyleSheet, TextInput, View } from "react-native";
//context
import NotesContext from "../context/Notes";

export default function AddNoteScreen() {
  const inputRef = useRef(null);
  const { text, setText } = useContext(NotesContext);

  useEffect(() => {
    //automatically focuses on the input field 0.3 seconds after page load
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
