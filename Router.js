import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./pages/Home";
import Header from "./components/ui/Header";

const Stack = createNativeStackNavigator();

export default function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="home"
          component={Home}
          options={{
            title: "Mes todos",
            header: Header,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
