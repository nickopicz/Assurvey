class Question{
    #questionText = "";
    #answerChoices = [];
    #correctAnswer = null;
    #pointValue = 0;

    constructor(){
        throw new Error("Abstract class 'Question' cannot be instantiated");
    }

    setQuestionText(str) {
        this.#questionText = str;
    }

    getQuestionText(){
        return this.questionText;
    }

    addChoice(answer){
        if(Array.isArray(answer)) for(i = 0; i < answer.length(); i++) this.#answerChoices.push(answer[i]);
        else this.#answerChoices.push(answer);
    }

    removeChoice(answer){
        let answerIndex = this.#answerChoices.find(answer)
        
        if(answerIndex != -1){
            this.#answerChoices = this.#answerChoices.splice(0, answerIndex) + this.#answerChoices(answerIndex+1, this.#answerChoices.length);
        }
    }

    setCorrectAnswer(answer){
        this.#correctAnswer = answer;
    }

    getCorrectAnswer(){
        return this.#correctAnswer;
    }

    setPointValue(num){
        if(Number.isInteger(num)) this.#pointValue = num
        throw new Error("Error: Input must be a whole number")
    }

    getPointValue(){
        return this.#pointValue;
    }

    getJSON(){
        return(
            question = {
                questionText: this.#questionText,
                answerChoices: this.#answerChoices,
                correctAnswer: this.#correctAnswer,
                pointValue: this.#pointValue
            }
        );
    }
}