import { NavigationContainer } from "@react-navigation/native";
import DrawerNavigator from "./src/navigation/Menu";
import { AuthProvider } from "./src/context/AuthContext";
import { StatusBar } from "expo-status-bar";

export default function App() {
  return (
    <>
      <StatusBar hidden />
      <NavigationContainer>
        <AuthProvider>
          <DrawerNavigator />
        </AuthProvider>
      </NavigationContainer>
    </>
  );
}

