import { quizzModel } from "./quizzes.model"

const FetchedAllQuizzes = async () => {
    const result = await quizzModel.find();
    return result;
}

export const quizzesServices = {
    FetchedAllQuizzes
}