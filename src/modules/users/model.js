import {fetch,fetchAll } from '../../lib/postgres.js'
import { LOGIN,REGISTER,GETUSERS } from './query.js'

const GET =  async ({userId=0}) => {
    try {
      return await fetchAll(GETUSERS, [userId])
      
    } catch (error) {
      console.log(error);
    }
};

const LOGINMODEL = async ({email, password}) => {
    try {
        return await fetch(LOGIN, [email, password]);
    } catch (error) {
        console.error(error);
    }
}

const REGISTERMODEL=async ({companyname,inn,email,ogrn,kpp,country,password,repeat_password})=>{
    try {
        return await fetch(REGISTER, [companyname,inn,email,ogrn,kpp,country,password,repeat_password]);
    } catch (error) {
        console.error(error.message);
    }
}

export default {
    LOGINMODEL,
    REGISTERMODEL,
    GET
}