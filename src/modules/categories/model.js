import { fetch, fetchAll } from "../../lib/postgres.js";

import {
    GETCATEGORIES,
    POSTCATEGORIES,
    PUTCATEGORIES,
    DELETECATEGORIES
} from "./query.js";

const GET = async ({categoryId=0}) => {
    try {
        const categories = await fetchAll(GETCATEGORIES, [categoryId]) 

        return categories?.map(category => {
            category.banks = category.banks[0] == null ? [] : category.banks
            return category
        })
        
    } catch (error) {
        console.log(error)
    }
};

const POST = async ({ title_uz,title_en,title_ru}) => {
    try {
      return await fetch(POSTCATEGORIES, [title_uz,title_en,title_ru]);
    } catch (error) {
        console.log(error);
    }
};

const PUT = async ({categoryId},{  title_uz='',title_en='',title_ru=''}) => {
    try {
      return await fetch(PUTCATEGORIES, [categoryId,  title_uz,title_en,title_ru]);
    } catch (error) {
        console.log(error);
    }
}; 

const DELETE = async ({categoryId}) => {
    try {
      return await fetch(DELETECATEGORIES, [categoryId]);
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