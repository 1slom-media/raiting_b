import { fetch, fetchAll } from "../../lib/postgres.js";

import {
    GETANALITIKA,
    POSTANALITIKA,
    PUTANALITIKA,
    DELETEANALITIKA
} from "./query.js";

const GET = async ({analitikaId=0},{search}) => {
    try {
        return await fetchAll(GETANALITIKA, [analitikaId,search])
    } catch (error) {
        console.log(error);
    }
};

const POST = async ({category_name, title_uz,title_en,title_ru,description_uz,description_en,description_ru,img,data_date,analitka_pdf}) => {
    try {
      return await fetch(POSTANALITIKA, [ category_name,title_uz,title_en,title_ru,description_uz,description_en,description_ru,img,data_date,analitka_pdf]);
    } catch (error) {
        console.log(error);
    }
};

const PUT = async ({analitikaId},{category_name,title_uz,title_en,title_ru,description_uz,description_en,description_ru,img,data_date,analitka_pdf}) => {
    try {
      return await fetch(PUTANALITIKA, [analitikaId,category_name,title_uz,title_en,title_ru,description_uz,description_en,description_ru,img,data_date,analitka_pdf]);
    } catch (error) {
        console.log(error);
    }
};



const DELETE = async ({analitikaId}) => {
    try {
      return await fetch(DELETEANALITIKA, [analitikaId]);
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