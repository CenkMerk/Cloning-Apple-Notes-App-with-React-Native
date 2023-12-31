//This screen is the homepage with the list of notes and the button to add a new note

import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
//navigation
import { useNavigation } from "@react-navigation/native";
//components
import NotesList from "../components/NotesList";
//icons
import { Feather } from "@expo/vector-icons";

export default function HomeScreen() {
  const navigation = useNavigation();
  
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Notes</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("AddNoteScreen")}
        >
          <Feather name="edit" size={30} color="#FFD52E" />
        </TouchableOpacity>
      </View>

      <NotesList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1C1C1E",
    paddingVertical: "10%",
    paddingHorizontal: "5%",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "5%",
  },
  title: {
    color: "white",
    fontWeight: "bold",
    fontSize: 30,
  },
});
