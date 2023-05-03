import { auth, db } from "../firebase/firebase";
import firebase from "firebase";

export async function getSurveyList() {
    try {
        const user = auth.currentUser?.email;

        const ref = db.collection("surveys").where("author", "==", user);


        let formData: any[] = [];


        await ref.get().then((res) => {

            res.forEach((doc) => {
                console.log("doc: ", doc.data())
                formData.push({ ...doc.data(), id: doc.id })
            });
        })
        console.log("data of docs from database:", formData)

        return formData;
    } catch (e) {
        throw new Error("error in getting survey list. ")
    }
}

export async function getSurvey(id: string) {
    return await db.collection("surveys").doc(id).get().then((doc) => {
        if (doc.exists) return doc.data()
    }).catch(e => console.warn(e))
}

/**
 * 
 * @param code user generated code by creator
 * @returns the survey data
 */
export async function getSurveyFromCode(code: string) {
    try {

        const ref = db.collection("surveys").where("code", "==", code);


        let formData: any[] = [];


        await ref.get().then((res) => {

            res.forEach((doc) => {
                console.log("doc: ", doc.data())
                formData.push({ ...doc.data(), id: doc.id })
            });
        })

        return formData[0];
    } catch (e) {
        throw new Error("error in getting survey list from code ")
    }
}

/**
 * 
 * @param code user generated code by creator to get doc from that code in responses collection
 * @returns the survey data
 */
export async function getSurveyResponses(code: string) {
    try {
        console.log("getting doc: ", code)
        const ref: any = await db.collection("results").doc(code).get().then((doc) => {
            if (doc.exists) {
                console.log("responses after getting: ", doc.data())
                return doc.data()
            }
        })



        // console.log("indices: ", indices)

        let options: [any] = ref.responses.map((el: any, index: number) => {
            return { label: el.user, value: index }
        })

        console.log("optins: ", options)


        return {
            data: ref.responses,
            options: options,
        }

    } catch (e) {
        throw new Error("error in getting survey list from code ")
    }
}


/**
 * 
 * @param code code for accessing results firebase doc
 * @param user user string email
 * @param grade grade given by creator to send to firebase object
 */
export async function gradeSurvey(docId: string, user: string, grade: number) {
    try {

        console.log("user obj: ", {
            user: user,
            grade: grade,
        })
        await db.collection("surveys").doc(docId).set({
            grades: firebase.firestore.FieldValue.arrayUnion({
                score: grade,
                user: user,
            })
        }, { merge: true })

    } catch (error) {
        console.warn("error in grading function: ", error)
    }
}

