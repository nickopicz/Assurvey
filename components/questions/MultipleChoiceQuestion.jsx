import { View } from "react-native"


export const MultipleChoiceQuestion = ({ type, editable }) => {
    const [text, question] = useState('');
    
    return (
        <View>
            <View style={{
                borderRadius: 6,
                backgroundColor: 'white',
                shadowColor: 'black'
            }}>
            <TextInput 
                placeholder="Question..."
                onChangeText={newText => question(newText)}
                defaultValue = {text}
            />
            </View>
        </View>
    )
}