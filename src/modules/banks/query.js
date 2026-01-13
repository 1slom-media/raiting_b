const GETBANKS = `
    SELECT
        b.*,
        json_agg(r.*) AS raiting
    FROM banks AS b
    LEFT JOIN raiting AS r ON r.bank_id = b.bank_id
    WHERE (companyname ILIKE CONCAT('%', $2::varchar, '%')) AND CASE WHEN $1 > 0 THEN b.bank_id = $1 ELSE TRUE END
    GROUP BY b.bank_id, update_date
    ORDER BY GREATEST(COALESCE(r.update_date, '2000-01-01')) DESC;
`;


const POSTBANKS = `
INSERT INTO banks (
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
)
VALUES (
  $1,$2,$3,$4,$5,$6,$7,$8,
  $9,$10,$11,$12,$13,$14,$15,$16
)
RETURNING *;
`;



const PUTBANKS = `
WITH old_banks AS (
    SELECT
        bank_id,
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
    FROM banks
    WHERE bank_id = $1    
)
UPDATE banks AS b
SET
    category_id =
        CASE
            WHEN $2 > 0 THEN $2
            ELSE o.category_id
        END,

    companyname =
        CASE
            WHEN length($3) > 1 THEN $3
            ELSE o.companyname
        END,

    inn =
        CASE
            WHEN length($4) > 1 THEN $4
            ELSE o.inn
        END,

    ogrn =
        CASE
            WHEN length($5) > 1 THEN $5
            ELSE o.ogrn
        END,

    kpp =
        CASE
            WHEN length($6) > 1 THEN $6
            ELSE o.kpp
        END,

    country =
        CASE
            WHEN length($7) > 1 THEN $7
            ELSE o.country
        END,

    country_uz =
        CASE
            WHEN length($8) > 1 THEN $8
            ELSE o.country_uz
        END,

    country_en =
        CASE
            WHEN length($9) > 1 THEN $9
            ELSE o.country_en
        END,

    phone =
        CASE
            WHEN length($10) > 1 THEN $10
            ELSE o.phone
        END,

    insta_link =
        CASE
            WHEN length($11) > 1 THEN $11
            ELSE o.insta_link
        END,

    tg_link =
        CASE
            WHEN length($12) > 1 THEN $12
            ELSE o.tg_link
        END,

    web_link =
        CASE
            WHEN length($13) > 1 THEN $13
            ELSE o.web_link
        END,

    facebook_link =
        CASE
            WHEN length($14) > 1 THEN $14
            ELSE o.facebook_link
        END,

    adress_uz =
        CASE
            WHEN length($15) > 1 THEN $15
            ELSE o.adress_uz
        END,

    adress_en =
        CASE
            WHEN length($16) > 1 THEN $16
            ELSE o.adress_en
        END,

    adress_ru =
        CASE
            WHEN length($17) > 1 THEN $17
            ELSE o.adress_ru
        END,

    updated_at = NOW()

FROM old_banks AS o
WHERE b.bank_id = $1
RETURNING b.*;
`;


const DELETEBANKS =`
delete from banks 
where bank_id=$1 returning * 
`;

export {
    GETBANKS,
    POSTBANKS,
    PUTBANKS,
    DELETEBANKS
}