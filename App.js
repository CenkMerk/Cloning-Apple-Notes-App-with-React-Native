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

const HeaderComp = ({ header, edit }) => {
  const navigation = useNavigation();
  const { createNote, editNote } = useContext(NotesContext);
  const HandleCreateNote = () => {
    navigation.navigate("Home");
    createNote();
  };
  const HandleEditNote = () => {
    console.log("edit");
    navigation.navigate("Home");
    editNote();
  };
  return (
    <TouchableOpacity onPress={edit ? HandleEditNote : HandleCreateNote}>
      {header === "left" ? (
        <View style={styles.headerLeftContainer}>
          <Ionicons name="chevron-back" size={30} color="#FFD52E" />
          <Text style={styles.headerLeftTitle}>Notes</Text>
        </View>
      ) : (
        <Text style={styles.headerLeftTitle}>Done</Text>
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
              headerLeft: () => <HeaderComp edit={false} header="left" />,
              headerRight: () => <HeaderComp edit={false} header="right" />,
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
              headerLeft: () => <HeaderComp edit={false} header="left" />,
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
              headerLeft: () => <HeaderComp edit={true} header="left" />,
              headerRight: () => <HeaderComp edit={true} />,
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
