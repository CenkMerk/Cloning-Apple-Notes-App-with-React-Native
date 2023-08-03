import { StyleSheet, Text, TextInput, View } from "react-native";
import React, { useRef, useEffect } from "react";

export default function AddNoteScreen() {
  const inputRef = useRef(null);

  useEffect(() => {
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
