import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

export default function NoteListItem({ item }) {
  return (
    <View style={styles.button}>
      <TouchableOpacity>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.desc}>{item.desc}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    borderWidth: 1,
    borderColor: "grey",
    marginBottom: 30,
    borderRadius: 10,
    padding: 15,
    shadowColor: "white",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  title: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  desc: {
    color: "grey",
    fontSize: 18,
  },
});
