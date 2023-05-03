import { Text, View, FlatList, Button } from "react-native";
import { getSurveyList } from "../functions/FetchSurveys";
import { getSyntheticLeadingComments } from "typescript";

const ResultsScreen = ({ navigation }) => {
  const surveys = getSurveyResponses ().;

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
