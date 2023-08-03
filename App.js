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
import { AntDesign } from '@expo/vector-icons';

const HeaderComp = ({ header, func }) => {
  const navigation = useNavigation();
  const { createNote, editNote,deleteNote } = useContext(NotesContext);
  const HandleClick = () => {
    navigation.navigate("Home");
    if (func === "create") {
      createNote();
    } else if (func === "edit") {
      editNote();
    } else {
      deleteNote();
    }
  };
  return (
    <TouchableOpacity onPress={HandleClick}>
      {header === "left" && (
        <View style={styles.headerContainer}>
          <Ionicons name="chevron-back" size={30} color="#FFD52E" />
          <Text style={styles.headerTitle}>Notes</Text>
        </View>
      )}
      {header === "right" && func === "delete" && (
       <AntDesign name="delete" size={25} color="#FFD52E" />
      )}
      {header === "right" && (func === "create" || func === "edit") && (
        <Text style={styles.headerTitle}>Done</Text>
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
              headerLeft: () => <HeaderComp func="create" header="left" />,
              headerRight: () => <HeaderComp func="create" header="right" />,
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
              headerLeft: () => <HeaderComp func="null" header="left" />,
              headerRight: () => <HeaderComp func="delete" header="right" />,
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
              headerLeft: () => <HeaderComp func="edit" header="left" />,
              headerRight: () => <HeaderComp func="edit" header="right" />,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  headerTitle: {
    color: "#FFD52E",
    fontWeight: "bold",
    fontSize: 18,
  },
});
