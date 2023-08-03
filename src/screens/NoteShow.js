import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React, { useContext } from "react";
import NotesContext from "../context/Notes";
import { useNavigation } from "@react-navigation/native";

export default function NoteShow({ route }) {
  const navigation = useNavigation();
  const { notes } = useContext(NotesContext);
  const note = notes.find((item) => item.id === route.params.id);

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
