import { Response } from "express"


interface ISendResponse<T> {
    response: Response;
    statusCode: number;
    success: boolean;
    message: string;
    result?: T
}
export const sendResponse = (responseData: ISendResponse<any>) => {
    const { response,
        statusCode,
        success,
        message,
        result
    } = responseData
    return response.status(statusCode).json({
        success,
        message,
        result
    })

}