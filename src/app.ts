import express, { Application,Request,Response } from "express";
import cors from "cors"
import router from "./app/routes/router";

const app :Application = express();
app.use(cors({origin:"https://localhost:3000",credentials:true}))
app.use(express.json())


app.use('/api/v1',router)

app.get('/', (req:Request,res:Response)=>{
     res.send("Trivio Server working safely..")
})
export default app;