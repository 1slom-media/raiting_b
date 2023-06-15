import { fetch, fetchAll } from "../../lib/postgres.js";

import {
    GETFORM,
    POSTFORM,
    PUTFORM,
    DELETEFORM
} from "./query.js";

const GET = async ({formId=0}) => {
    try {
        return await fetchAll(GETFORM, [formId])
    } catch (error) {
        console.log(error)
    }
};

const POST = async ({name,name_organisation,phone_number,email,comment}) => {
    try {
      return await fetch(POSTFORM, [name,name_organisation,phone_number,email,comment]);
    } catch (error) {
        console.log(error);
    } 
}; 

const PUT = async ({formId},{ name,name_organisation,phone_number,email,comment}) => {
    try {
      return await fetch(PUTFORM, [formId,name,name_organisation,phone_number,email,comment]);
    } catch (error) {
        console.log(error); 
    }
}; 


const DELETE = async ({formId}) => {
    try {
      return await fetch(DELETEFORM, [formId]);
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