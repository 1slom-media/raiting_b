import { fetch, fetchAll } from "../../lib/postgres.js";

import {
    GETUSLUGIY,
    POSTUSLUGIY,
    PUTUSLUGIY,
    DELETEUSLUGIY
} from "./query.js";

const GET = async ({uslugaId=0}) => {
    try {
        return await fetchAll(GETUSLUGIY, [uslugaId])
    } catch (error) {
        console.log(error);
    }
};

const POST = async ({ title_uz,title_en,title_ru,description_uz,description_en,description_ru,img}) => {
    try {
      return await fetch(POSTUSLUGIY, [ title_uz,title_en,title_ru,description_uz,description_en,description_ru,img]);
    } catch (error) {
        console.log(error);
    }
};

const PUT = async ({uslugaId},{title_uz,title_en,title_ru,description_uz,description_en,description_ru,img}) => {
    try {
      return await fetch(PUTUSLUGIY, [uslugaId,title_uz,title_en,title_ru,description_uz,description_en,description_ru,img]);
    } catch (error) {
        console.log(error);
    }
};



const DELETE = async ({uslugaId}) => {
    try {
      return await fetch(DELETEUSLUGIY, [uslugaId]);
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