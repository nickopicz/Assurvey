import * as React from 'react';
import {View, Text, Button, TextInput, StyleSheet} from "react-native";
import { db } from "../../firebase/firebase.js";
import { useState } from "react";

export const CreateSurvey = ({navigation}) => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [id, setId] = useState(0);
    const [questions, setQuestions] = useState([]);
    const [isGraded, setIsGraded] = useState(true);

    const handleSubmit = () => {
        db.collection("surveys").add({
            id: Number.parseInt(id),
            title: title,
            author: author,
            isGraded: false,
            questions: questions,
        });
    }

    return(
        <View>
            <Text>Title: </Text>
            <TextInput
                onChangeText={(text) => setTitle(text)}
                placeholder="Title..."/>
            
            <Text>Author: </Text>
            <TextInput
                onChangeText={(text) => setAuthor(text)}
                placeholder="Author..."/>
            
            <Text>Code: </Text>
            <TextInput
                onChangeText={(text) => setId(text)}
                placeholder="Unique Code..."/>
            
            <View style={{flexDirection: "row"}}>
                <Button
                    title="Add New Multiple Choice Question"
                    onPress={() => questions.push( 
                        {
                            questionText: "Multiple Choice Question",
                            answerChoices: ["True", "False"],
                            correctAnswer: "True",
                            pointValue: 0
                        })}/>
                
                <Button
                    title="Add New Essay/Short Response Question"
                    onPress={() => questions.push( 
                        {
                            questionText: "Essay/Short Response Question",
                            answerChoices: [null],
                            correctAnswer: null,
                            pointValue: 0
                        })}/>
                
                <Button
                    title="Add New Matching Question"
                    onPress={() => questions.push( 
                        {
                            questionText: "Matching Question",
                            answerChoices: [{"Left": "Right"}],
                            correctAnswer: {"Left": "Right"},
                            pointValue: 0
                        })}/>
            </View>
            
            <Button
                title="Upload Survey"
                onPress={handleSubmit}/>
        </View>
    );
}

export default CreateSurvey;