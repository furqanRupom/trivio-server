/* sign up or register */

import { IQuizz } from "../quizzes/quizzes.interface"
import { quizzModel } from "../quizzes/quizzes.model"

const createQuizz = async (payload:IQuizz) => {
  const result = await quizzModel.create(payload);
  return result;

}


const updateQuizz = async (payload:Partial<IQuizz>,id:string) => {
// @ts-ignore
  const result = await quizzModel.findOneAndUpdate(id,payload,{
    new:true
  })

  return result;

}

const deleteQuizz = async (id:string) => {
  // @ts-ignore
  const result = await quizzModel.findOneAndDelete(id, {
    new: true
  })

  return result;
}

export const  adminServices = {
  createQuizz,
  updateQuizz,
  deleteQuizz
}