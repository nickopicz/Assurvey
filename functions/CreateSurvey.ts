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

export async function checkAccessCode(accessCode: string) {
    const codes = await db
        .collection("surveys")
        .where("code", "==", accessCode)
        .get();


    return codes.empty
}


/**
 * 
 * @param form state data from create survey page
 * @returns promise that indicates if creation was successful
 */
export async function createSurvey(form: any, graded: boolean) {

    try {
        let id = await db.collection("surveys").add({
            author: form.author,
            code: form.code,
            isGraded: form.isGraded,
            questions: form.questions,
            title: form.title,
            graded: graded
        }).then((res) => { return res.id })

        return id;
    } catch (e) {
        console.warn("error in createSurvey: ", e)
    }
}

export async function saveSurvey(docId: string, form: any, graded: boolean) {
    try {
        await db.collection("surveys").doc(docId).set({
            author: form.author,
            code: form.code,
            isGraded: form.isGraded,
            questions: form.questions,
            title: form.title,
            graded: graded
        }).then((res) => {
            console.log("save success", res)
        })

    } catch (e) {
        throw new Error("warning in saving survey")
    }
}


