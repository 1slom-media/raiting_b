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
      ORDER BY id, updated_at DESC
    `;

    const ratings = await fetchAll(getRatingsQuery, [bankIds]);

    const uniqueBanks = uniqBy(banks, 'bank_id');
    const uniqueRatings = uniqBy(ratings, 'id');

    const banksWithRatings = uniqueBanks.map((bank) => ({
      ...bank,
      raiting: uniqueRatings.filter((rating) => rating.bank_id === bank.bank_id),
    }));

    return banksWithRatings;
  } catch (error) {
    console.log(error);
  }
};



const POST = async ({ category_id, companyname, inn, ogrn, kpp, country,country_uz,country_en }) => {
  try {
    return await fetch(POSTBANKS, [
      category_id,
      companyname,
      inn,
      ogrn,
      kpp,
      country,
      country_uz,
      country_en
    ]);
  } catch (error) {
    console.log(error);
  }
};

const PUT = async (
  { bankId },
  { category_id, companyname, inn, ogrn, kpp, country,country_uz,country_en }
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
      country_en
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
