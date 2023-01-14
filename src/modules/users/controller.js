import model from './model.js'
import jwt from '../../lib/jwt.js'
import { AuthorizationError, ValidationError } from '../../utils/errors.js'
import { fetchAll } from '../../lib/postgres.js'

const allUsers = await fetchAll(`
 select
    user_id,
    companyname,
    inn,
    email,
    ogrn,
    kpp,
    country
from users as u
where  case when $1 > 0 then u.user_id = $1 else true end
order by u.user_id`,[0])

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

const REGISTER=async (req,res)=>{
    try {
        const user = await model.REGISTERMODEL(req.body)
        let newUser;
        allUsers.filter(use=>{
            if(use.companyname !== user.companyname){
                return newUser = true
            }
            return newUser = false
        })
        if(newUser) {
            res.status(201).json({
              status: 201,
              message: "ok",
              data:{user_id:user.user_id,companyname:user.companyname,email:user.email,country:user.country,inn:user.inn,kpp:user.kpp,ogrn:user.ogrn},
              token: jwt.sign({ userId: user.user_id })
            });
        }else{
            res.status(401).json({
              status: 401,
              message: "Already exists",
              token: null,
            });
        }
    } catch (error) {
        return new ValidationError(401,error.message)
    }
}


export default {
    LOGIN,
    REGISTER,
    GET
}