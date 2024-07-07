import dotenv from "dotenv"
import path from 'path'

dotenv.config({ path: path.join(process.cwd(), '.env') })

export default {
    database_url : process.env.MONGODB_URI,
    port : process.env.PORT,
    salt_number: process.env.SALT_NUMBER,
    secret_token :process.env.SECRET_ACCESS_TOKEN,
    refresh_token:process.env.REFRESH_ACCESS_TOKEN
}