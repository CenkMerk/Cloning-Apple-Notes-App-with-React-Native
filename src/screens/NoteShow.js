import React, { useContext, useEffect } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
//navigation
import { useNavigation } from "@react-navigation/native";
//context
import NotesContext from "../context/Notes";

export default function NoteShow({ route }) {
  const navigation = useNavigation();
  const { notes, setShowNoteId } = useContext(NotesContext);
  
  const note = notes.find((item) => item.id === route.params.id);

  useEffect(() => {
    setShowNoteId(note.id);
  }, []);

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() =>
        navigation.navigate("EditNoteScreen", { id: route.params.id })
      }
    >
      <Text style={styles.text}>{note.text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1C1C1E",
    flex: 1,
  },
  text: {
    color: "white",
    margin: "10%",
    fontSize: 18,
  },
});
