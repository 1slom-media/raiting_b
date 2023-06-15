import { fetch, fetchAll } from "../../lib/postgres.js";

import {
    GETPRESS,
    POSTPRESS,
    PUTPRESS,
    DELETEPRESS
} from "./query.js";

const GET = async ({pressId=0}) => {
    try {
        return await fetchAll(GETPRESS, [pressId])
    } catch (error) {
        console.log(error);
    }
};

const POST = async ({description_uz,description_en,description_ru,data_date,press_center_pdf}) => {
    try {
      return await fetch(POSTPRESS, [ description_uz,description_en,description_ru,data_date,press_center_pdf]);
    } catch (error) {
        console.log(error);
    }
};

const PUT = async ({pressId},{description_uz,description_en,description_ru,data_date,press_center_pdf}) => {
    try {
      return await fetch(PUTPRESS, [pressId,description_uz,description_en,description_ru,data_date,press_center_pdf]);
    } catch (error) {
        console.log(error);
    }
};



const DELETE = async ({pressId}) => {
    try {
      return await fetch(DELETEPRESS, [pressId]);
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