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
        .where("accessCode", "==", accessCode)
        .get();

    if (!codes.empty) {
        throw new Error("Access code already exists. Please enter a different code.");
    }
}

export async function createSurvey(form: any) {

    try {
        let id = await db.collection("surveys").add({
            form
        }).then((res) => { return res.id })

        return id;
    } catch (e) {
        console.warn("error in createSurvey: ", e)
    }
}


