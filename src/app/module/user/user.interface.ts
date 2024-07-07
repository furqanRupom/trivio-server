import { IRole } from "../../constants/constant";
export interface IUser {
    id:string;
    name:string;
    email:string;
    password:string;
    role : "user" | "admin"
}