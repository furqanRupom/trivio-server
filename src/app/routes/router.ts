import express from "express";
import { authRoutes } from "../module/auth/auth.routes";
import { userRoutes } from "../module/user/user.routes";
import { quizzesRoutes } from "../module/quizzes/quizzes.routes";
import { adminRoutes } from "../module/admin/admin.routes";


const router = express.Router();

const moduleRoutes = [
    {
        path:"/auth",
        route:authRoutes
    },
    {
        path:"/user",
        route:userRoutes
    },
    {
        path:"/admin",
        route:adminRoutes
    },
    {
        path:"/quizzes",
        route:quizzesRoutes
    }
]

moduleRoutes.forEach(({path,route}) => router.use(path,route))

export default router;