import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HeaderComponent from "../../components/HeaderComponent";
import Home from "../../components/screens/Home/Home";

const Stack = createNativeStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator
      screenOptions={({ route }: any) => ({
        header: () => <HeaderComponent routeName={route.name} />,
      })}
    >
      <Stack.Screen name="HomeStack" component={Home} />
    </Stack.Navigator>
  );
}
