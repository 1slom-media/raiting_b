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


const POSTBANKS =`
insert into banks (category_id,companyname,inn,ogrn,kpp,country,country_uz,
    country_en)
values ($1,$2,$3,$4,$5,$6,$7,$8) returning *
`;


const PUTBANKS = `
    with old_banks as (
        select
            bank_id,
            category_id,
            companyname,
            inn,
            ogrn,
            kpp,
            country,
            country_uz,
            country_en
        from banks
        where bank_id = $1    
    ) update banks as b
        set
        category_id = 
                case 
                    when $2 > 0 then $2
                    else o.category_id
                end,
        companyname = 
                case 
                    when length($3) > 1 then $3
                    else o.companyname
                end,
                inn = 
                case 
                    when length($4) > 1 then $4
                    else o.inn
                end,
                ogrn = 
                case 
                    when length($5) > 1 then $5
                    else o.ogrn
                end,
                kpp = 
                case 
                    when length($6) > 1 then $6
                    else o.kpp
                end,
                country = 
                case 
                    when length($7) > 1 then $7
                    else o.country
                end,
                country_uz = 
                case 
                    when length($8) > 1 then $8
                    else o.country_uz
                end,
                country_en = 
                case 
                    when length($9) > 1 then $9
                    else o.country_en
                end
    from old_banks as o   
    where b.bank_id = $1
    returning b.*                 
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