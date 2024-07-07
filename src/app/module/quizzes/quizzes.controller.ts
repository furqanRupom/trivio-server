import { Request, Response } from "express"
import catchAsync from "../../utils/catchAsync"
import { sendResponse } from "../../utils/sendResponse"
import { quizzesServices } from "./quizzes.services"
import httpStatus from "http-status"

const allQuizzes = catchAsync(async (request: Request, response: Response) => {
    const result = await quizzesServices.FetchedAllQuizzes()
    sendResponse({
        response: response,
        success: true,
        statusCode: httpStatus.FOUND,
        message: "Fetched all the quizzes successfully !",
        result: result
    })
})

export const quizzesController = {
    allQuizzes
}