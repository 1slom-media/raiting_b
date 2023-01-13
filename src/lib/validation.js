import Joi from "joi";

export const LoginSchema=Joi.object({
    email:Joi.string().required(),
    password:Joi.string().required()
})

export const RegisterSchema=Joi.object({
    companyname:Joi.string().max(80).required(),
    inn:Joi.string().required(),
    email: Joi.string().required(),
    ogrn: Joi.string().required(),
    kpp: Joi.string().required(),
    country:Joi.string().required(),
    password:Joi.string().required(),
    repeat_password:Joi.ref('password')
})

