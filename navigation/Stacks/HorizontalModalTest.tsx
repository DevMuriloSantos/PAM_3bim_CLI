import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HorizontalModalTest from "../../components/screens/horizontalModalTest";
import HeaderComponent from "../../components/HeaderComponent";

const Stack = createNativeStackNavigator();

export default function HorizontalModalTestStack() {
  return (
    <Stack.Navigator
      screenOptions={({ route }: any) => ({
        header: () => <HeaderComponent routeName={route.name} />,
      })}
    >
      <Stack.Screen
        name="HorizontalModalTestStack"
        component={HorizontalModalTest}
      />
    </Stack.Navigator>
  );
}
