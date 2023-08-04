import React, { useContext } from "react";
import { FlatList, StyleSheet, View } from "react-native";
//context
import NotesContext from "../context/Notes";
//components
import NoteListItem from "./NoteListItem";

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
