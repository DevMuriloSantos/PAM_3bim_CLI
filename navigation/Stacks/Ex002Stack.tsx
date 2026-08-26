import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Ex002 from "../../components/screens/Ex002";
import HeaderComponent from "../../components/HeaderComponent";

const Stack = createNativeStackNavigator();

export default function Ex002Stack() {
  return (
    <Stack.Navigator
      screenOptions={({ route }: any) => ({
        header: () => <HeaderComponent routeName={route.name} />,
      })}
    >
      <Stack.Screen name="Ex002Stack" component={Ex002} />
    </Stack.Navigator>
  );
}
