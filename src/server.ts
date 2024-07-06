import {Server} from "http"
import mongoose from "mongoose"
import config from "./config"
import app from "./app"
let server:Server


const main = async () => {
    try {
        const connect = await mongoose.connect(config.database_url as string);
        if(connect){
            console.log("Trivio Db successfully connected ! ")
        }
        server = app.listen(config.port,()=>{
            console.log(`Trivio server is running on por ${config.port}`)
        })
    } catch (error) {
        
    }
}

main();