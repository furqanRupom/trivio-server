import { Model, Schema, model } from "mongoose";
import { IQuizz } from "./quizzes.interface";


const AnswerSchema: Schema = new Schema({
    option: { type: String, required: true },
    isCorrect: { type: Boolean, required: true },
});

const QuestionSchema: Schema = new Schema({
    name: { type: String, required: true },
    answer: { type: [AnswerSchema], required: true },
});

const QuizzSchema: Schema = new Schema({
    subject: { type: String, required: true },
    questions: { type: [QuestionSchema], required: true },
});
export const quizzModel = model<IQuizz>("quizz",QuizzSchema)
