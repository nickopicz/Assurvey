import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeHeader } from "../components/HomeHeader";
import { HomeScreen } from "../screens/home/HomeScreen";

const Stack = createNativeStackNavigator();

export const HomeStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{ header: () => <HomeHeader /> }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
};
