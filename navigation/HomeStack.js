import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeHeader } from "../components/HomeHeader";
import { HomeScreen } from "../screens/home/HomeScreen";
import { SurveyTaker } from "../screens/TakeSurvey";

const Stack = createNativeStackNavigator();

export const HomeStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        header: ({ navigation }) => <HomeHeader navigation={navigation} />,
      }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Take" component={SurveyTaker} />
    </Stack.Navigator>
  );
};
