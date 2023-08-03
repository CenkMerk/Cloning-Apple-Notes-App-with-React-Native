//navigation
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();
//screens
import Home from "./src/screens/Home";
import { Text } from "react-native";

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
{
  /* <ScrollView style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Notes</Text>
        <TouchableOpacity>
          <Feather name="edit" size={26} color="#FFD52E" />
        </TouchableOpacity>
      </View>
    </ScrollView>
     container: {
      backgroundColor: "black",
      padding: "10%",
    },
    title: {
      color: "white",
      fontWeight: "bold",
      fontSize: 30,
    },
    titleContainer: {
      width: "100%",
      flexDirection:"row",
      alignItems:"center",
      justifyContent:"space-between"
    }, */
}
