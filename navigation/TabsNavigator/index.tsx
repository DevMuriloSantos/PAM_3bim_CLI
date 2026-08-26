import { MaterialCommunityIcons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet } from "react-native";

import HorizontalModalTestStack from "../Stacks/HorizontalModalTest";
import Ex002Stack from "../Stacks/Ex002Stack";
import Ex001Stack from "../Stacks/Ex001Stack";
import VerticalModalTestStack from "../Stacks/VerticalModalTest";
import HomeStack from "../Stacks/HomeStack";

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

export default function TabsNavigator() {
  return (
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
        component={HomeStack}
        options={{ title: "Home" }}
      />
      <Tabs.Screen
        name="Ex001"
        component={Ex001Stack}
        options={{ title: "Ex001" }}
      />
      <Tabs.Screen
        name="Ex002"
        component={Ex002Stack}
        options={{ title: "Ex002" }}
      />
      <Tabs.Screen
        name="HorizontalModalTest"
        component={HorizontalModalTestStack}
        options={{ title: "HModalTest" }}
      />
      <Tabs.Screen
        name="VerticalModalTest"
        component={VerticalModalTestStack}
        options={{ title: "VModalTest" }}
      />
    </Tabs.Navigator>
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
});
