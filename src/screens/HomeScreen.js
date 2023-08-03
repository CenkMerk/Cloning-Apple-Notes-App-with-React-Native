import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";
import NotesList from "../components/NotesList";
import { useNavigation } from "@react-navigation/native";


export default function HomeScreen() {
  const navigation = useNavigation();
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Notes</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("AddNoteScreen")}
      >
        <Feather name="edit" size={30} color="#FFD52E" />
      </TouchableOpacity>
      <NotesList />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1C1C1E",
    paddingVertical: "10%",
    paddingHorizontal: "5%",
  },
  title: {
    color: "white",
    fontWeight: "bold",
    fontSize: 30,
    paddingLeft: "5%",
  },
  button: {
    position: "absolute",
    bottom: "10%",
    right: "10%",
  },
});