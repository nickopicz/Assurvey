

export function verifyResults(userAnswers: string[], answers: string[]) {
    const scoredAnswers: boolean[] = new Array(answers.length);

    for (let i = 0; i < answers.length; i++) {
        if (userAnswers[i] && answers[i] === userAnswers[i]) {
            scoredAnswers.push(true);
        }
    }

    return scoredAnswers;
}

