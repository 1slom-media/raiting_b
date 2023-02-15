import { fetch, fetchAll } from "../../lib/postgres.js";

import { POSTRENK, PUTRENK, DELETERENK,GETRENKING} from "./query.js";

const GET = async ({ renkId = 0 }, { atribut, year1, year2,kvartal1,kvartal2 }) => {
  try {
    const renkingi = await fetchAll(GETRENKING, [renkId,atribut,year1,year2,kvartal1,kvartal2]);
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
  category_name_en,
  category_name_ru
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
      category_name_en,
      category_name_ru
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
    category_name_en,
    category_name_ru
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
      category_name_en,
      category_name_ru
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
