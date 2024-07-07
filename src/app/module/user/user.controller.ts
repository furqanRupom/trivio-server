import catchAsync from "../../utils/catchAsync";
import { Request, Response } from "express";
import { sendResponse } from "../../utils/sendResponse";
import httpStatus from "http-status";
import { userServices } from "./user.services";


const getUsers = catchAsync(async (request: Request, response: Response) => {
    const result = await userServices.getUsersFromDB()
    sendResponse({
        response: response,
        success: true,
        statusCode: httpStatus.CREATED,
        message: "Fetchd users successfully !",
        result: result
    })
})


const getSingleUser = catchAsync(async (request: Request, response: Response) => {
    const result = await userServices.getSingleUserFromDB()
    sendResponse({
        response: response,
        success: true,
        statusCode: httpStatus.CREATED,
        message: "Update user successfully !",
        result: result
    })
})



export const userController = {
  getUsers,
  getSingleUser
}