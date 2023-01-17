import { fetch, fetchAll } from "../../lib/postgres.js";

import {
    GETNEWS,
    POSTNEWS,
    PUTNEWS,
    DELETENEWS
} from "./query.js";

const GET = async ({newsId=0}) => {
    try {
        return await fetchAll(GETNEWS, [newsId])
    } catch (error) {
        console.log(error);
    }
};

const POST = async ({description_uz,description_en,description_ru,data_date}) => {
    try {
      return await fetch(POSTNEWS, [ description_uz,description_en,description_ru,data_date]);
    } catch (error) {
        console.log(error);
    }
};

const PUT = async ({newsId},{description_uz,description_en,description_ru,data_date}) => {
    try {
      return await fetch(PUTNEWS, [newsId,description_uz,description_en,description_ru,data_date]);
    } catch (error) {
        console.log(error);
    }
};



const DELETE = async ({newsId}) => {
    try {
      return await fetch(DELETENEWS, [newsId]);
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