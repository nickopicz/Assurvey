import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeHeader } from "../components/HomeHeader";
import { CreateScreen } from "../screens/create/CreateScreen";
import { HomeScreen } from "../screens/home/HomeScreen";
import { SurveyTaker } from "../screens/TakeSurvey";
import { EditMenuScreen } from "../screens/create/EditMenu";
import { GradeMenuScreen } from "../screens/grade/GradeMenu";
import { SurveyGrader } from "../screens/grade/GradingScreen";
import UserScreen from "../screens/home/UserScreen";
import ResultsScreen from "../screens/ResultsScreen";

const Stack = createNativeStackNavigator();

/**
 *
 * @returns homestack, or that which is shown when a user is authenticated
 */
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
      <Stack.Screen name="Create" component={CreateScreen} />
      <Stack.Screen name="EditMenu" component={EditMenuScreen} />
      <Stack.Screen name="GradeMenu" component={GradeMenuScreen} />
      <Stack.Screen name="Grade" component={SurveyGrader} />
      <Stack.Screen name="Results" component={ResultsScreen} />
    </Stack.Navigator>
  );
};
