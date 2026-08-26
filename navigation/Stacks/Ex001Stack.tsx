import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Ex001 from "../../components/screens/Ex001";
import HeaderComponent from "../../components/HeaderComponent";

const Stack = createNativeStackNavigator();

export default function Ex001Stack() {
  return (
    <Stack.Navigator
      screenOptions={({ route }: any) => ({
        header: () => <HeaderComponent routeName={route.name} />,
      })}
    >
      <Stack.Screen name="Ex001Stack" component={Ex001} />
    </Stack.Navigator>
  );
}
