const GETBANKS = `
    select
        b.*,
        json_agg(r.*) as raiting
    from banks as b
    left join raiting as r on r.bank_id = b.bank_id
    where (companyname ilike concat('%', $2::varchar, '%')) and case when $1 > 0 then b.bank_id = $1 else true end
    group by b.bank_id
    order by b.bank_id 
`;

const POSTBANKS =`
insert into banks (category_id,companyname,inn,ogrn,kpp,country)
values ($1,$2,$3,$4,$5,$6) returning *
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
            country
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