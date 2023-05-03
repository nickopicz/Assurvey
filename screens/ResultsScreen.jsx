import { Text, View, FlatList, Button } from "react-native";
import { getUserResponses } from "../functions/FetchSurveys";
import { getSyntheticLeadingComments } from "typescript";
import { auth } from "../firebase/firebase";

const ResultsScreen = ({ navigation }) => {
  const surveys = getUserResponses(auth.currentUser);

  console.log("surveys: " + surveys);

  return (
    <View>
      <FlatList
        style={{ width: "80%" }}
        numColumns={3}
        data={surveys}
        renderItem={(item) => {
          <Button title={item.item.title} onPress={() => {}} />;
        }}
      />
    </View>
  );
};

export default ResultsScreen;
