import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";

export default function AddNoteScreen() {
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} multiline  selectionColor="#FFD52E"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1C1C1E",
    flex: 1,
  },
  input: {
    flex:1,
    color:"white",
    margin:"10%",
    fontSize:18
  },
});
