import { fetch, fetchAll } from "../../lib/postgres.js";

import {
    GETINFARMATSIA,
    POSTINFARMATSIA,
    PUTINFARMATSIA,
    DELETEINFARMATSIA
} from "./query.js";

const GET = async ({inforId=0}) => {
    try {
        return await fetchAll(GETINFARMATSIA, [inforId])
    } catch (error) {
        console.log(error);
    }
};

const POST = async ({ title_uz,title_en,title_ru,pdf,size}) => {
    try {
      return await fetch(POSTINFARMATSIA, [ title_uz,title_en,title_ru,pdf,size]);
    } catch (error) {
        console.log(error);
    }
};

const PUT = async ({inforId},{title_uz,title_en,title_ru,pdf,size}) => {
    try {
      return await fetch(PUTINFARMATSIA, [inforId,title_uz,title_en,title_ru,pdf,size]);
    } catch (error) {
        console.log(error);
    }
};



const DELETE = async ({inforId}) => {
    try {
      return await fetch(DELETEINFARMATSIA, [inforId]);
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