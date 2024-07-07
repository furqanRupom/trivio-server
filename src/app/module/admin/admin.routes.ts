import express from "express";
import { adminController } from "./admin.controller";
import validateRequest from "../../middleware/validateRequest";
import { quizzesValidation } from "../quizzes/quizzes.validation";

const router  = express.Router();


router.post('/create-quiz',validateRequest(quizzesValidation.quizzSchemaValidation),adminController.createQuizz)
router.put('/update-quiz',adminController.updateQuizz)
router.delete('/delete-quiz',adminController.deleteQuizz)

export const adminRoutes = router;