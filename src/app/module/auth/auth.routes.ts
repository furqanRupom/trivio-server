import express from "express";
import { authController } from "./auth.controller";
import validateRequest from "../../middleware/validateRequest";
import { userValidation } from "../user/user.validation";

const router = express.Router();


router.post('/register',(req,res,next)=>{
      console.log(req.body)
      next()
}, validateRequest(userValidation.userSchemaValidaiton),authController.register);
router.post('/login',authController.login);

export const authRoutes = router;