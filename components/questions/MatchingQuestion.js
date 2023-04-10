class MatchingQuestion extends Question {
    constructor(){
        this.setQuestionText("Question...");
        this.addChoice({"1": "2"});
    }

    addChoice(keyAnswer, valueAnswer){
        super.addChoice({keyAnswer: valueAnswer});
    }

    removeChoice(keyAnswer, valueAnswer){
        super.removeChoice({keyAnswer: valueAnswer});
    }
}