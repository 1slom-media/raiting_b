import { fetch, fetchAll } from "../../lib/postgres.js";

import {
    GETVOPROS,
    POSTVOPROS,
    PUTVOPROS,
    DELETEVOPROS
} from "./query.js";

const GET = async ({voprosId=0}) => {
    try {
        return await fetchAll(GETVOPROS, [voprosId])
    } catch (error) {
        console.log(error);
    }
};

const POST = async ({category_name, title_uz,title_en,title_ru,description_uz,description_en,description_ru}) => {
    try {
      return await fetch(POSTVOPROS, [ category_name,title_uz,title_en,title_ru,description_uz,description_en,description_ru]);
    } catch (error) {
        console.log(error);
    }
};

const PUT = async ({voprosId},{category_name,title_uz,title_en,title_ru,description_uz,description_en,description_ru}) => {
    try {
      return await fetch(PUTVOPROS, [voprosId,category_name,title_uz,title_en,title_ru,description_uz,description_en,description_ru]);
    } catch (error) {
        console.log(error);
    }
};



const DELETE = async ({voprosId}) => {
    try {
      return await fetch(DELETEVOPROS, [voprosId]);
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