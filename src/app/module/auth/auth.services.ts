/* sign up or register */

import { IUser } from "../user/user.interface"
import { UserModel } from "../user/user.model"
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
import config from "../../../config"

const registerIntoDB  = async (payload:IUser) => {
      const result = await UserModel.create(payload);
      return result;
}


const loginIntoDB = async (payload:{email:string,password:string}) => {

    const user = await UserModel.findOne({
        email:payload.email
    })

    if(!user){
        throw new Error("User not exit");
        
    }

    const matchPassword =  await bcrypt.compare(payload.password,user.password);
    if(!matchPassword){
        throw new Error("Password did not macthed !");
        
    }

    // access token

    const accessToken = jwt.sign({email:user.email,password:user.password,role:user.role},config.secret_token as string,{
        expiresIn:'24d'
    })
    const refreshToken = jwt.sign({ email: user.email, password: user.password, role: user.role }, config.refresh_token as string, {
        expiresIn: '50d'
    })


    return {
        accessToken,
        refreshToken
    }
    



}

export const authServices = {
    registerIntoDB,
    loginIntoDB
}