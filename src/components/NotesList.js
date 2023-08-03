import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import NoteListItem from "./NoteListItem";

export default function NotesList() {
  const Notes = [
    {
      title: "cenkmerk",
      desc: "dağlar daslkn ascasca",
    },
    {
      title: "ascasca",
      desc: "ascasc as as ascas",
    },
  ];
  return (
    <View style={styles.container}>
      <FlatList
        data={Notes}
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
