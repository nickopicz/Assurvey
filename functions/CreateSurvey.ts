import { db } from "../firebase/firebase"
import firebase from "firebase"


/**
 * 
 * @param user : string , email of the creator
 * @param questions: array of questions from application state
 * @param accessCode: The access code of the survey, user generated
 * @returns id for the firebase document object, required to add questions to survey doc
 * **NOTE ACCESSCODE** requires a unique user generated code, use "checkCode(code)" for that
 */
export async function createSurvey(user: string, questions: any[], accessCode: string) {

    try {

        const temp: {
            creator: string,
            accessCode: string,
        } = {
            creator: user,
            accessCode: accessCode,

        }

        let id = await db.collection("surveys").add({
            temp
        }).then((res) => { return res.id })

        return id;
    } catch (e) {
        console.warn("error in createSurvey: ", e)
    }
}

/**
 * 
 * @param id document id that was returned from create survey function
 * @param question: string, question content
 * @param answers: string array, array of questions... for SHORT, it is just any preface for a user to answer
 * @param correctAnswer 
 * @param type: string, can be of ["MC", "MATCH", "SHORT"] aka multiple choice, matching, and short answer
 * 
 * **NOTE FOR QUESTION TYPES** use correct answer as the spot to put either for MC : the correct answer, for MATCH:  an array of the correct 
 * options for matching in order of the questions, and for SHORT: null
 */
export async function saveQuestion(id: string, question: string, answers: string[], correctAnswer: any, type: string) {
    try {

        let temp: any;
        if (type === "MC") {
            temp = {
                question: question,
                answers: answers,
                correctAnswer: correctAnswer,
                type: "MC"
            }
        }

        if (type === "MATCH") {
            temp = {
                question: question,
                answers: answers,
                correctAnswer: correctAnswer,
                type: "MATCH"
            }
        }

        if (type === "SHORT") {
            temp = {
                question: question,
                answers: answers,
                type: "SHORT",
            }
        }

        await db.collection("surveys").doc(id).set({
            questions: firebase.firestore.FieldValue.arrayUnion(temp)
        }, { merge: true })
    } catch (e) {
        console.warn("error in saveQuestion: ", e)
    }
}
