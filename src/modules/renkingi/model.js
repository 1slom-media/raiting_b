import { fetch, fetchAll } from "../../lib/postgres.js";

import {
    GETRENK,
    POSTRENK,
    PUTRENK,
    DELETERENK
} from "./query.js";

const GET = async ({renkId=0}) => {
    try {
        return await fetchAll(GETRENK, [renkId])
    } catch (error) {
        console.log(error);
    }
};

const POST = async ({category_name, title_uz,title_en,title_ru,pdf,size}) => {
    try {
      return await fetch(POSTRENK, [category_name, title_uz,title_en,title_ru,pdf,size]);
    } catch (error) {
        console.log(error);
    }
};

const PUT = async ({renkId},{category_name,title_uz,title_en,title_ru,pdf,size}) => {
    try {
      return await fetch(PUTRENK, [renkId,category_name,title_uz,title_en,title_ru,pdf,size]);
    } catch (error) {
        console.log(error);
    }
};



const DELETE = async ({renkId}) => {
    try {
      return await fetch(DELETERENK, [renkId]);
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