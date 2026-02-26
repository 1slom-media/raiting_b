import { fetch, fetchAll } from "../../lib/postgres.js";
import pkg from "lodash";
const { uniqBy } = pkg;

import { GETBANKS, POSTBANKS, PUTBANKS, DELETEBANKS } from "./query.js";

const GET = async ({ bankId = 0 }, { search }) => {
  try {
    const banks = await fetchAll(GETBANKS, [bankId, search]);

    const bankIds = banks.map((bank) => bank.bank_id);

    const getRatingsQuery = `
      SELECT *
      FROM raiting
      WHERE bank_id = ANY($1)
      ORDER BY update_date DESC
    `;

    const ratings = await fetchAll(getRatingsQuery, [bankIds]);

    const uniqueBanks = uniqBy(banks, 'bank_id');
    const uniqueRatings = uniqBy(ratings, 'id');

    const banksWithRatings = uniqueBanks.map((bank) => {
      const bankRatings = uniqueRatings
        .filter((rating) => rating.bank_id === bank.bank_id)
        .sort((a, b) => {
          const dateA = new Date(a.update_date);
          const dateB = new Date(b.update_date);
          return dateB - dateA; // DESC order
        });
      
      return {
        ...bank,
        raiting: bankRatings,
      };
    });

    return banksWithRatings;
  } catch (error) {
    console.log(error);
  }
};



const POST = async ({
  category_id,
  companyname,
  inn,
  ogrn,
  kpp,
  country,
  country_uz,
  country_en,
  phone,
  insta_link,
  tg_link,
  web_link,
  facebook_link,
  adress_uz,
  adress_en,
  adress_ru
}) => {
  try {
    return await fetch(POSTBANKS, [
      category_id,
      companyname,
      inn,
      ogrn,
      kpp,
      country,
      country_uz,
      country_en,
      phone,
      insta_link,
      tg_link,
      web_link,
      facebook_link,
      adress_uz,
      adress_en,
      adress_ru
    ]);
  } catch (error) {
    console.log(error);
  }
};


const PUT = async (
  { bankId },
  {
    category_id,
    companyname,
    inn,
    ogrn,
    kpp,
    country,
    country_uz,
    country_en,
    phone,
    insta_link,
    tg_link,
    web_link,
    facebook_link,
    adress_uz,
    adress_en,
    adress_ru
  }
) => {
  try {
    return await fetch(PUTBANKS, [
      bankId,
      category_id,
      companyname,
      inn,
      ogrn,
      kpp,
      country,
      country_uz,
      country_en,
      phone,
      insta_link,
      tg_link,
      web_link,
      facebook_link,
      adress_uz,
      adress_en,
      adress_ru
    ]);
  } catch (error) {
    console.log(error);
  }
};


const DELETE = async ({ bankId }) => {
  try {
    return await fetch(DELETEBANKS, [bankId]);
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
