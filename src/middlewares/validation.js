import {LoginSchema,RegisterSchema} from "../lib/validation.js";
import { ValidationError } from "../utils/errors.js";
export default (req,res,next)=>{
    try {
        if(req.url=="/login"){
            let{error}=LoginSchema.validate(req.body)
            if(error) throw error
        }
        if(req.url=="/register"){
            let{error}=RegisterSchema.validate(req.body)
            if(error) throw error
        } 
        return next()
    } catch (error) {
        return next(new ValidationError(401,error.message))
    }
}