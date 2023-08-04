import React, { useContext } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
//navigation
import { useNavigation } from "@react-navigation/native";
//context
import NotesContext from "../context/Notes";
//icons
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

export default function HeaderComp({ header, screen }) {
  const navigation = useNavigation();
  const { createNote, editNote, showNoteId, deleteNote } =
    useContext(NotesContext);
    
  const HandleClick = () => {
    navigation.navigate("Home");

    if (screen === "show" && header === "right") {
      deleteNote(showNoteId);
    } else if (screen === "edit") {
      editNote();
    } else {
      createNote();
    }
  };

  return (
    <TouchableOpacity onPress={HandleClick}>
      {header === "left" && (
        <View style={styles.headerLeftContainer}>
          <Ionicons name="chevron-back" size={30} color="#FFD52E" />
          <Text style={styles.headerLeftTitle}>Notes</Text>
        </View>
      )}
      {header === "right" && (screen === "add" || screen === "edit") && (
        <Text style={styles.headerLeftTitle}>Done</Text>
      )}
      {header === "right" && screen === "show" && (
        <AntDesign name="delete" size={24} color="#FFD52E" />
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  headerLeftContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  headerLeftTitle: {
    color: "#FFD52E",
    fontWeight: "bold",
    fontSize: 18,
  },
});
