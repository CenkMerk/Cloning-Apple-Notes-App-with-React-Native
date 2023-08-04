//navigation
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();
//context
import { Provider } from "./src/context/Notes";
//screens
import HomeScreen from "./src/screens/HomeScreen";
import AddNoteScreen from "./src/screens/AddNoteScreen";
import NoteShow from "./src/screens/NoteShow";
import EditNoteScreen from "./src/screens/EditNoteScreen";
//components
import HeaderComp from "./src/components/HeaderComp";

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
