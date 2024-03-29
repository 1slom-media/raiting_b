import { fetch, fetchAll } from "../../lib/postgres.js";

import {
    GETRAITING,
    POSTRAITING,
    PUTRAITING,
    DELETERAITING
} from "./query.js";

const GET = async ({raitingId=0}) => {
    try {
        return await fetchAll(GETRAITING, [raitingId])
    } catch (error) {
        console.log(error);
    }
};

const POST = async ({bank_id,raiting,prognoz,update_date,sertifikat,type_reting,link,update_date_pdf,type_reting_uz,type_reting_en,prognoz_uz,prognoz_en}) => { 
    try {
      return await fetch(POSTRAITING, [ bank_id,raiting,prognoz,update_date,sertifikat,type_reting,link,update_date_pdf,type_reting_uz,type_reting_en,prognoz_uz,prognoz_en]);
    } catch (error) {
        console.log(error);
    }
};

const PUT = async ({raitingId},{bank_id,raiting,prognoz,update_date,sertifikat,type_reting,link,update_date_pdf,type_reting_uz,type_reting_en,prognoz_uz,prognoz_en}) => {
    try {
      return await fetch(PUTRAITING, [raitingId,bank_id,raiting,prognoz,update_date,sertifikat,type_reting,link,update_date_pdf,type_reting_uz,type_reting_en,prognoz_uz,prognoz_en]);
    } catch (error) {
        console.log(error);
    }
};



const DELETE = async ({raitingId}) => {
    try {
      return await fetch(DELETERAITING, [raitingId]);
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