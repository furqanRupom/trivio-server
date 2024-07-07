import expres from "express";
import { quizzesController } from "./quizzes.controller";


const router = expres.Router();


router.get('/',quizzesController.allQuizzes);


export const quizzesRoutes = router;