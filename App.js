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

const HeaderLeftComp = () => {
  const { createNote } = useContext(NotesContext);
  const navigation = useNavigation();
  const HandleClick = () => {
    navigation.goBack();
    createNote();
  };
  return (
    <TouchableOpacity onPress={HandleClick}>
      <View style={styles.headerLeftContainer}>
        <Ionicons name="chevron-back" size={30} color="#FFD52E" />
        <Text style={styles.headerLeftTitle}>Notes</Text>
      </View>
    </TouchableOpacity>
  );
};
const HeaderRightComp = () => {
  const { createNote } = useContext(NotesContext);
  const navigation = useNavigation();
  const HandleClick = () => {
    navigation.goBack();
    createNote();
  };
  return (
    <TouchableOpacity onPress={HandleClick}>
      <Text style={styles.headerLeftTitle}>Done</Text>
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
              headerLeft: () => <HeaderLeftComp />,
              headerRight: () => <HeaderRightComp />,
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
