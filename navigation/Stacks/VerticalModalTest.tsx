import { createNativeStackNavigator } from "@react-navigation/native-stack";
import VerticalModalTest from "../../components/screens/verticalModalTest";
import HeaderComponent from "../../components/HeaderComponent";

const Stack = createNativeStackNavigator();

export default function VerticalModalTestStack() {
  return (
    <Stack.Navigator
      screenOptions={({ route }: any) => ({
        header: () => <HeaderComponent routeName={route.name} />,
      })}
    >
      <Stack.Screen
        name="VerticalModalTestStack"
        component={VerticalModalTest}
      />
    </Stack.Navigator>
  );
}
