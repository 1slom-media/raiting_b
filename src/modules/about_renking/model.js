import { fetch, fetchAll } from "../../lib/postgres.js";

import {
    GETABOUT,
    POSTABOUT,
    PUTABOUT,
    DELETEABOUT
} from "./query.js";

const GET = async ({aboutId=0}) => {
    try {
        return await fetchAll(GETABOUT, [aboutId])
    } catch (error) {
        console.log(error);
    }
};

const POST = async ({renking_id,raiting,kvartal,atribut,god,sum}) => {
    try {
      return await fetch(POSTABOUT, [ renking_id,raiting,kvartal,atribut,god,sum]);
    } catch (error) {
        console.log(error);
    }
};

const PUT = async ({aboutId},{renking_id,raiting,kvartal,atribut,god,sum}) => {
    try {
      return await fetch(PUTABOUT, [aboutId,renking_id,raiting,kvartal,atribut,god,sum]);
    } catch (error) {
        console.log(error);
    }
};



const DELETE = async ({aboutId}) => {
    try {
      return await fetch(DELETEABOUT, [aboutId]);
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