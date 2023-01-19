import { fetch, fetchAll } from "../../lib/postgres.js";

import {
    GETBANKS,
    POSTBANKS,
    PUTBANKS,
    DELETEBANKS
} from "./query.js";

const GET = async ({bankId=0},{search}) => {
    try {
        return await fetchAll(GETBANKS, [bankId,search])
    } catch (error) {
        console.log(error)
    }
};

const POST = async ({category_id,companyname,inn,ogrn,kpp,country,raiting,prognoz,update_date,images}) => {
    try {
      return await fetch(POSTBANKS, [category_id,companyname,inn,ogrn,kpp,country,raiting,prognoz,update_date,images]);
    } catch (error) {
        console.log(error);
    } 
}; 

const PUT = async ({bankId},{ category_id,companyname,inn,ogrn,kpp,country,raiting,prognoz,update_date,images}) => {
    try {
      return await fetch(PUTBANKS, [bankId,category_id,companyname,inn,ogrn,kpp,country,raiting,prognoz,update_date,images]);
    } catch (error) {
        console.log(error); 
    }
}; 


const DELETE = async ({bankId}) => {
    try {
      return await fetch(DELETEBANKS, [bankId]);
    } catch (error) {
        console.log(error);
    }
};

export default {
    GET,
    POST,
    PUT,
    DELETE
};