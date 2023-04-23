import { db } from "../firebase/firebase";
import firebase from "firebase";

// /**
//  * 
//  * @param userAnswers 
//  * @param answers 
//  * @returns 
//  */
// export function verifyResults(userAnswers: string[], answers: string[]) {
//     const scoredAnswers: boolean[] = new Array(answers.length);

//     for (let i = 0; i < answers.length; i++) {
//         if (userAnswers[i] && answers[i] === userAnswers[i]) {
//             scoredAnswers.push(true);
//         }
//     }

//     return scoredAnswers;
// }

/**
 * 
 * @param answers array of answers from user
 * @param docId id of firebase firestore document object
 */
export async function submitAnswers(answers: any[], code: string) {
    try {
        await db.collection("surveys").doc(code).set({
            responses: firebase.firestore.FieldValue.arrayUnion(answers)
        }, { merge: true })
    } catch (e) {
        console.warn("error in submitting answers to firebase: ", e)
    }
}