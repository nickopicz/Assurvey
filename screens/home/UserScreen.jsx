import { Text, View, StyleSheet, FlatList } from "react-native";
import SurveyCard from "../../components/display/SurveyCard";

const UserScreen = ({ props, navigation }) => {
    const styles = StyleSheet.create({
        container: {
            flex: 1,
        },

        cardContainer: {
            justifyContent: "space-evenly",
            flexDirection: "row",
        },
    });

    // const ListSurveys = props.surveys.map((survey) => {
    //     if (survey !== null) {
    //         return (<View style={styles.cardContainer}>
    //             <SurveyCard title={survey.title} description={survey.description} />
    //         </View>)
    //     }
    // }
    // );

    const cardTest = {
        title: "Testing",
        description: "Pretty please with sprinkles on top take my survey I really need some responses URGENTLY",
    };

    // useEffect(() => {
    //     first

    //     return () => {
    //         second
    //     }
    // }, [third])

    return (
        <View>
            <FlatList
                data={props.surveys}
                renderItem={({ survey }) => <SurveyCard title={survey.title} description={survey.description} />}
                keyExtractor={survey => survey.id}
                numColumns={3} />
        </View>
    );
};

export default UserScreen;