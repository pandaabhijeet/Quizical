import { shuffleArray } from "./Util";

export type Question = {
    category : string;
    correct_answer : string;
    difficulty : string;
    incorrect_answers: string[];
    question: string;
    type: string;
}

export type QuestionState = Question & {answers : string[]};

export enum Difficulty{
    EASY = "easy",
    MEDIUM ="medium",
    Hard = "hard"
}

//https://opentdb.com/api.php?amount=10

export const fetchQuizQuestions = async (amount : number, difficulty : Difficulty) => {
    const endpoint = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple&category=9&category=22`;
    const data = await (await fetch(endpoint)).json();

    return (data.results && data.results.map((question: Question) =>({
        ...question,
        answers: shuffleArray([...question.incorrect_answers,question.correct_answer])
    })))
}