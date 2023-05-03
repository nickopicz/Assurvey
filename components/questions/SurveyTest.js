const SurveyTest = class {
    title = "";
    #id = 0;
    #questions = [];
    isGraded = false;

    SurveyTest(){
        this.title = "Enter Title Here!";
        this.#id = this.#generateSurveyCode();
        this.#questions = [];
        this.isGraded = false;
    }

    //TODO
    static #generateSurveyCode(){
        return 0;
    }

    addQuestion(question){
        if(question instanceof Question) this.#questions.push(question);
        else throw new Error('Error: Expected input of type "Question", recieved ' + typeof question);
    }

    removeQuestion(index){
        if(Number.isInteger(index) && index >= 0) this.#questions.splice(index, 1);
        else throw new Error("Error: Input must be a positive integer");
    }

    questions(){
        return this.#questions;
    }
}