import { Schema, model } from "mongoose";
import bcrypt from "bcrypt"
import config from "../../../config";
import { IUser } from "./user.interface";

const userSchema = new Schema({
    name: {
        type: String,
        require: true
    },
    email:{
        type:String,
        require:true,
        unique:true
    },
    password:{
        type:String,
        require:true
    },
    role:{
        type:String,
        enum:{
            values:['user','admin']
        },
        default:"user"
    }
},{
    timestamps:true
})


// hash password

userSchema.pre('save', async function (next){
    const user = this; 
    if(user?.password){
        user.password = await bcrypt.hash(user.password, Number(config.salt_number))
    }
    next();
})


export const UserModel =  model<IUser>('user',userSchema)