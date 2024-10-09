import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { About } from "./components/About";
import BankAccount from "./components/BankAccount";
import { Main } from "./components/Main";
import MyAccont from "./components/MyAccont";
const Stack = createNativeStackNavigator();

export default function Navigate() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Main"
          component={Main}
          options={{ title: "Main" }}
        ></Stack.Screen>
        <Stack.Screen
          name="About"
          component={About}
          options={{ title: "About" }}
        ></Stack.Screen>
        <Stack.Screen
          name="MyAccount"
          component={MyAccont}
          options={{ title: "MyAccount" }}
        ></Stack.Screen>
        <Stack.Screen
          name="Bank Account"
          component={BankAccount}
          options={{ title: "Bank Account" }}
        ></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
