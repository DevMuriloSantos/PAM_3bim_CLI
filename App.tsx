import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";

import { NavigationContainer } from "@react-navigation/native";
import RootNavigator from "./navigation/RootNavigator";


export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light"/>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    position: "absolute",
    bottom: 8,
    left: 20,
    right: 20,
    backgroundColor: "#111211",
    borderTopWidth: 0,
    borderRadius: 25,
    height: 60,
    padding: 5,
    margin: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
  },
  container: {
    flex: 1,
    backgroundColor: "#000000",
  },
});
