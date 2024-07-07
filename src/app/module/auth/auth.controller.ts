import catchAsync from "../../utils/catchAsync";
import { Request,Response } from "express";
import { authServices } from "./auth.services";
import { sendResponse } from "../../utils/sendResponse";
import httpStatus from "http-status";


const register = catchAsync(async(request:Request,response:Response) =>{
    const payload = request.body
    console.log(request.body)
    const result = await authServices.registerIntoDB(payload);
    sendResponse({
        response:response,
        success:true,
        statusCode:httpStatus.CREATED,
        message:"User Registered successfully !",
        result:result
    })
})


const login = catchAsync(async (request: Request, response: Response) => {
    const payload = request.body
    const result = await authServices.loginIntoDB(payload);
    sendResponse({
        response: response,
        success: true,
        statusCode: httpStatus.CREATED,
        message: "User login successfully !",
        result: result
    })
})

export const authController = {
    register,
    login
}