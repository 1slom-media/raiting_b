import model from './model.js'
import jwt from '../../lib/jwt.js'
import { AuthorizationError, ValidationError } from '../../utils/errors.js'

const GET = async (req, res) => {
    try {
        const users = await model.GET(req.params)
        res.send(users)
    } catch (error) {
        console.error(error);
    }
}

const LOGIN = async (req, res,next) => {
    try {
        const user = await model.LOGINMODEL(req.body)
        if(user) {
            res.status(200).json({
              status: 200,
              message: "ok",
              data:{user_id:user.user_id,companyname:user.companyname,email:user.email,country:user.country,inn:user.inn,kpp:user.kpp,ogrn:user.ogrn},
              token: jwt.sign({ userId: user.user_id })
            });
            next()
        }else{
            res.status(401).json({
              status: 401,
              message: "email or  password",
              token: null,
            });
        }
    } catch (error) {
        return next(new AuthorizationError(401,error.message))
    }
}

const REGISTER=async (req,res,next)=>{
    try {
        const user = await model.REGISTERMODEL(req.body)
        console.log(user);
        if(user) {
            res.status(201).json({
              status: 201,
              message: "ok",
              data:{user_id:user.user_id,companyname:user.companyname,email:user.email,country:user.country,inn:user.inn,kpp:user.kpp,ogrn:user.ogrn},
              token: jwt.sign({ userId: user.user_id })
            });
            next()
        }else{
            res.status(401).json({
              status: 401,
              message: "Please fill the form correctly",
              token: null,
            });
        }
    } catch (error) {
        return next(new ValidationError(401,error.message))
    }
}


export default {
    LOGIN,
    REGISTER,
    GET
}