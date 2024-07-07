import catchAsync from "../../utils/catchAsync";
import { Request, Response } from "express";
import { sendResponse } from "../../utils/sendResponse";
import httpStatus from "http-status";
import { adminServices } from "./admin.services";


const createQuizz = catchAsync(async (request: Request, response: Response) => {
    const id = request.params.id;
    const payload = request.body;
    //  @ts-ignore
    const result = await adminServices.createQuizz(payload,id)
    sendResponse({
        response: response,
        success: true,
        statusCode: httpStatus.CREATED,
        message: "Created Quiz  successfully !",
        result: result
    })
})


const updateQuizz = catchAsync(async (request: Request, response: Response) => {
    const result = await adminServices.updateQuizz(request.body, request.params.id);
    sendResponse({
        response: response,
        success: true,
        statusCode: httpStatus.CREATED,
        message: "Update quiz successfully !",
        result: result
    })
})

const deleteQuizz = catchAsync(async (request: Request, response: Response) => {
    const result = await adminServices.deleteQuizz(request.params.id);
    sendResponse({
        response: response,
        success: true,
        statusCode: httpStatus.CREATED,
        message: "Delete quiz successfully !",
        result: result
    })
})

export const adminController = {
  createQuizz,
  updateQuizz,
  deleteQuizz
}