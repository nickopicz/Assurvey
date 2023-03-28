import { View, TextInput, Text } from "react-native"

const Question = ({ type, editable }) => {  
    const [text, question] = useState('');
    
    return (
        <View>
            <View style={{
                borderRadius: 6,
                backgroundColor: 'white',
                shadowColor: 'black'
            }}>
            <TextInput
                placeHolder="Question..."
                onChangeText={newText => question(newText)}
                defaultValue={text}
            />
            </View>    
        </View>
    )
}

export default Question;