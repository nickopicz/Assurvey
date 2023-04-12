import { auth, db } from "../firebase/firebase";

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


export async function getSurveyFromCode(code: string) {
    try {
        const user = auth.currentUser?.email;

        const ref = db.collection("surveys").where("code", "==", code);


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
        throw new Error("error in getting survey list from code ")
    }
}