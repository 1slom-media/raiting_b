import { fetch, fetchAll } from "../../lib/postgres.js";

import {
    GETRENK,
    POSTRENK,
    PUTRENK,
    DELETERENK
} from "./query.js";

const GET = async ({renkId=0},{kvartal,atribut,years}) => {
    try {
        const renkingi = await fetchAll(GETRENK, [renkId,kvartal,atribut,years])
        return renkingi?.map(renking => {
            renking.about_renking = renking.about_renking[0] == null ? [] : renking.about_renking
            return renking
        })
    } catch (error) {
        console.log(error);
    }
};

const POST = async ({category_name, title_uz,title_en,title_ru,data_date,inn,ogrn,kpp,country}) => {
    try {
      return await fetch(POSTRENK, [category_name, title_uz,title_en,title_ru,data_date,inn,ogrn,kpp,country]);
    } catch (error) {
        console.log(error);
    }
};

const PUT = async ({renkId},{category_name,title_uz,title_en,title_ru,data_date,inn,ogrn,kpp,country}) => {
    try {
      return await fetch(PUTRENK, [renkId,category_name,title_uz,title_en,title_ru,data_date,inn,ogrn,kpp,country]);
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