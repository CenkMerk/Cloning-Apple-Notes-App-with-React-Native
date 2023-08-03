//navigation
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();
//screens
import HomeScreen from "./src/screens/HomeScreen";
import AddNoteScreen from "./src/screens/AddNoteScreen";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Provider } from "./src/context/Notes";
import NotesContext from "./src/context/Notes";
import { useContext } from "react";
import NoteShow from "./src/screens/NoteShow";
import EditNoteScreen from "./src/screens/EditNoteScreen";
import { AntDesign } from "@expo/vector-icons";

const HeaderComp = ({ header, screen }) => {
  const navigation = useNavigation();
  const { createNote, editNote, showNoteId, deleteNote } =
    useContext(NotesContext);
  const HandleClick = () => {
    navigation.navigate("Home");
    if (header === "right") {
      if (screen === "add") {
        createNote();
      } else if (screen === "edit") {
        editNote();
      } else if (screen === "show") {
        deleteNote(showNoteId);
      }
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
};

export default function App() {
  return (
    <Provider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="AddNoteScreen"
            component={AddNoteScreen}
            options={{
              title: "",
              headerStyle: {
                backgroundColor: "#1C1C1E",
              },
              headerLeft: () => <HeaderComp screen="add" header="left" />,
              headerRight: () => <HeaderComp screen="add" header="right" />,
            }}
          />
          <Stack.Screen
            name="NoteShow"
            component={NoteShow}
            options={{
              title: "",
              headerStyle: {
                backgroundColor: "#1C1C1E",
              },
              headerLeft: () => <HeaderComp screen="show" header="left" />,
              headerRight: () => <HeaderComp screen="show" header="right" />,
            }}
          />
          <Stack.Screen
            name="EditNoteScreen"
            component={EditNoteScreen}
            options={{
              title: "",
              headerStyle: {
                backgroundColor: "#1C1C1E",
              },
              headerLeft: () => <HeaderComp screen="edit" header="left" />,
              headerRight: () => <HeaderComp screen="edit" header="right" />,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
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
