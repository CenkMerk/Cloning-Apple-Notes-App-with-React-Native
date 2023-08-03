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

const HeaderLeftComp = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <View style={styles.headerLeftContainer}>
        <Ionicons name="chevron-back" size={30} color="#FFD52E" />
        <Text style={styles.headerLeftTitle}>Notes</Text>
      </View>
    </TouchableOpacity>
  );
};
const HeaderRightComp = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={styles.headerLeftTitle}>Done</Text>
    </TouchableOpacity>
  );
};

export default function App() {
  return (
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
            headerRight: () => <HeaderRightComp/>,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
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
