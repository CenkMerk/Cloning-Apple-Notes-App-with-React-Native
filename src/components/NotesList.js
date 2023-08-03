import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import NoteListItem from "./NoteListItem";
import NotesContext from "../context/Notes";

export default function NotesList() {
  const { notes } = useContext(NotesContext);
  return (
    <View style={styles.container}>
      <FlatList
        data={notes}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => {
          return <NoteListItem item={item} />;
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1C1C1E",
    marginTop: "5%",
    paddingHorizontal: "5%",
    paddingVertical: "5%",
    borderRadius: 10,
  },
});
