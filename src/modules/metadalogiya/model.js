import { fetch, fetchAll } from "../../lib/postgres.js";

import {
    GETMETA,
    POSTMETA,
    PUTMETA,
    DELETEMETA
} from "./query.js";

const GET = async ({metaId=0}) => {
    try {
        return await fetchAll(GETMETA, [metaId])
    } catch (error) {
        console.log(error);
    }
};

const POST = async ({category_name, title_uz,title_en,title_ru,pdf,size}) => {
    try {
      return await fetch(POSTMETA, [category_name, title_uz,title_en,title_ru,pdf,size]);
    } catch (error) {
        console.log(error);
    }
};

const PUT = async ({metaId},{category_name,title_uz,title_en,title_ru,pdf,size}) => {
    try {
      return await fetch(PUTMETA, [metaId,category_name,title_uz,title_en,title_ru,pdf,size]);
    } catch (error) {
        console.log(error);
    }
};



const DELETE = async ({metaId}) => {
    try {
      return await fetch(DELETEMETA, [metaId]);
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