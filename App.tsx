import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { MaterialCommunityIcons } from "@expo/vector-icons";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from "./components/Home";
import Ex001 from "./Ex001";
import Ex002 from "./Ex002";
import HorizontalModalTest from "./horizontalModalTest";
import VerticalModalTest from "./verticalModalTest";

const Tabs = createBottomTabNavigator();
const icons: any = {
  HomeTabs: {
    name: "home-outline",
  },
  Ex001: {
    name: "numeric-1-box-multiple-outline",
  },
  Ex002: {
    name: "numeric-2-box-multiple-outline",
  },
  HorizontalModalTest: {
    name: "swap-horizontal-circle-outline",
  },
  VerticalModalTest: {
    name: "swap-vertical-circle-outline",
  },
};

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <Tabs.Navigator
          screenOptions={({ route }: any) => ({
            tabBarIcon: ({ color, size }: any) => {
              const { name } = icons[route.name];
              return (
                <MaterialCommunityIcons name={name} size={size} color={color} />
              );
            },
            headerShown: false,
            tabBarInactiveTintColor: "#E0E0E0", // cor do icone da rota inativa
            tabBarActiveTintColor: "#2FC183", // cor do icone da rota ativa
            tabBarStyle: styles.tabBar,
            tabBarLabelStyle: {
              // aumenta o tamanho da fonte do nome da rota
              fontSize: 12,
            },
          })}
        >
          <Tabs.Screen
            name="HomeTabs"
            component={Home}
            options={{ title: "Home" }}
          />
          <Tabs.Screen
            name="Ex001"
            component={Ex001}
            options={{ title: "Ex001" }}
          />
          <Tabs.Screen
            name="Ex002"
            component={Ex002}
            options={{ title: "Ex002" }}
          />
          <Tabs.Screen
            name="HorizontalModalTest"
            component={HorizontalModalTest}
            options={{ title: "HorizontalModalTest" }}
          />
          <Tabs.Screen
            name="VerticalModalTest"
            component={VerticalModalTest}
            options={{ title: "VerticalModalTest" }}
          />
        </Tabs.Navigator>
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
