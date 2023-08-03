import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

export default function NoteListItem({ item }) {
  return (
    <View style={styles.button}>
      <TouchableOpacity>
        <Text style={styles.title} numberOfLines={1} ellipsizeMode="tail">{item.text}</Text>
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
    backgroundColor: "#1C1C1E",
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
