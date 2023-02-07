import { fetch, fetchAll } from "../../lib/postgres.js";

import { GETYEAR, POSTRENK, PUTRENK, DELETERENK,GETRENKING,GETKVARTAL } from "./query.js";

const GET = async ({ renkId = 0 }, { atribut, year1, year2,kvartal1,kvartal2 }) => {
  try {
    if(year1>=0 && year2>=0){
      const renkingi = await fetchAll(GETYEAR, [renkId,atribut,year1,year2]);
      return renkingi?.map((renking) => {
        renking.about_renking =
          renking.about_renking[0] == null ? [] : renking.about_renking;
        return renking;
      });
    }
    if(kvartal1>=0 && kvartal2>=0){
      const renkingi = await fetchAll(GETKVARTAL, [renkId,atribut,kvartal1,kvartal2]);
      return renkingi?.map((renking) => {
        renking.about_renking =
          renking.about_renking[0] == null ? [] : renking.about_renking;
        return renking;
      });
    }
    const renkingi = await fetchAll(GETRENKING, [renkId,atribut]);
    return renkingi?.map((renking) => {
      renking.about_renking =
        renking.about_renking[0] == null ? [] : renking.about_renking;
      return renking;
    });

  } catch (error) {
    console.log(error);
  }
};

const POST = async ({
  category_name,
  title_uz,
  title_en,
  title_ru,
  data_date,
  inn,
  ogrn,
  kpp,
  country,
}) => {
  try {
    return await fetch(POSTRENK, [
      category_name,
      title_uz,
      title_en,
      title_ru,
      data_date,
      inn,
      ogrn,
      kpp,
      country,
    ]);
  } catch (error) {
    console.log(error);
  }
};

const PUT = async (
  { renkId },
  {
    category_name,
    title_uz,
    title_en,
    title_ru,
    data_date,
    inn,
    ogrn,
    kpp,
    country,
  }
) => {
  try {
    return await fetch(PUTRENK, [
      renkId,
      category_name,
      title_uz,
      title_en,
      title_ru,
      data_date,
      inn,
      ogrn,
      kpp,
      country,
    ]);
  } catch (error) {
    console.log(error);
  }
};

const DELETE = async ({ renkId }) => {
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
  DELETE,
};
