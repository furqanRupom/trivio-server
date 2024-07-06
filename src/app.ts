import express, { Application } from "express";
import cors from "cors"
import router from "./app/routes/router";

const app :Application = express();
app.use(cors({origin:"https://localhost:3000",credentials:true}))


app.use('/api/v1',router)


export default app;